+++
+++

# Transport

Transport layer addresses:

- Multiplexing
- Reliable Transport
- Congestion Control

## Multiplexing

IP and MAC get you to a host, but the transport layer takes over to make sure
the message gets to the correct process (or application).

You do this with a new header, ports.

Messages are called datagram at the transport layer.

Two main transport protocols:

- UDP
- TCP

Connectionless: the host uses the dest IP and dest port to demultiplex to
specific processes.

Connection-oriented: a 4 tuple of (src ip, dest ip, src port, dest port)
identifies the connection. Requires establishment before data transfer. Host has
to keep state about the connections.

### UDP

- Connectionless
- Simple multiplexing
- Inherits IP's service - best effort delivery of each datagram

### TCP

- Connection-oriented
- Single process can have multiple connections
- In-order reliable stream

#### Reliable Transfer

Goal: allow an application to be assured that what they send is what is received
(same data and order)

UDP does **not** provide this.

Recall link layer may detect errors but not fix errors, so frames can be
dropped. Also in the network layer if the incoming rate > outgoing rate then the
packet buffer can fill up causing dropped/dead-letter packets. Packets can also
get re-ordered in the network layer if packet A is sent on a longer path than
packet B.

TCP provides an abstraction of a reliable in order stream.

1. Sequence Number (in the TCP header) indicates which bytes in the stream the
   datagram contains
2. Acknowledgment Number (in the TCP header) specifies what is the next byte in
   the stream the receiver expects
3. Re-transmission - sender can re-send any unacknowledged bytes in the stream

When to re-transmit: Estimate round trip time + some buffer || > 2 ack
expecting an old packet

`estimatedRTT = (1-a)*estimatedRTT + a*sampleRTT`

Flow Control: do not overwhelm the receiver

Sender limits amount of unACKed data to whatever the receiver advertises as free
buffer in "window size" of TCP header

#### State

Each side, the sender and receiver need to store state (what has been
sent/received and ACKed)

Three way handshake is in place to establish allocation of these state tracking
resources. See [tcp](./tcp.md) for handshake process.

#### Congestion Control

Goal: detect congestion and backoff sending to reduce load

Congestion happens in any situation where a send rate is lower than a receive
rate.

When congestion occurs, packets will get dropped on router and sender will
re-transmit. Positive feedback loop leading to congestion collapse.

"goodput" is a measure of unique (not retransmitted) data going over the
network. Congestion collapse is when goodput hits 0.

Fair: each flow receives an equal share of the bandwidth of a link

Efficient: full bandwidth of link is used

Approaches to handle congestion:

- Reservation: in network, reserve bandwidth on each router
- Feedback and Adjust - on hosts, detect congestion and adjust send rate

TCP uses feedback and adjust approach.

Feedback to sender:

- Packet loss (timeout, duplicate ACK)
- Packet Delay
- Explicit Congestion Notification (requires router support)

Host limits sending through a congestion window (cwnd) at all times

`lastByteSent - lastByteAck <= cwnd`

cwnd is internal state on host

Additive Increase Multiplicative Decrease (AIMD) is used to optimize congested
flow rates.

- increase sending rate by 1 maximum segment size every RTT (round trip time) until loss detected
- decrease sending rate by some multiplicative factor when loss detected

```
increment = MSS * (MSS/CongestionWindow)
CongestionWindow += increment
```

Increase is linear, but decrease is proportional to send rate. So convergence is
towards fairness.

TCP slow start: increase cwnd every ack instead of every RTT so that spinup is
faster (exponential)
