+++
title = "Transmission Control Protocol"

[extra]
navname = "notes"
+++

# Transmission Control Protocol

TCP was created to provide an abstraction of reliable networking. TCP/IP is
commonly referred to as the Internet Protocol Suite.

The specification can be found [here](https://www.ietf.org/rfc/rfc793.txt).

TCP is optimized for accurate delivery over speed, and grantees that all bytes
sent will be received in order and unaltered.

Some of the key features:

- Re-transmission of lost data
- in-order delivery
- congestion control and avoidance
- data integrity

## Handshake

Each TCP connection starts off with a three-way handshake:

1. Sender sends a SYN packet with a random sequence number, X, and other
   flags/options.
2. Receiver responds with a SYN ACK packet including X + 1 and a new sequence
   number, Y.
3. Sender responds with an ACK packet including X + 1 and Y + 1
4. Sender is now free to send application data

TCP Fast Open exists to allow sending application data with the SYN packet, but
it has limitations on the type of data that can be sent.

Error in handshake:

- pkt 1 lost - A won't get an ACK, will resend
- pkt 2 lost - A won't get an ACK, will resend. B will re-ACK
- pkt 3 lost - B won't get an ACK, will resend. A will re-ACK

## Flow Control

Each side of a TCP connection advertises it's own receive window (rwnd) to
communicate the available buffer space to hold the incoming data.

Each ACK contains the current rwnd, and the rwnd can be reduced to indicate that
the server or client is at capacity for some reason.

These windows can (and typically are) be scaled by a window scaling option
communicated during the handshake that tells each machine how many bits to left
shift the 16-bit window size for all future ACKs.

### Slow start

The server in a TCP connection initializes an additional metric `cwnd = initcwnd` so that the
connection does not overwhelm the network. The maximum amount of data in flight
for a tcp request is the min(rwnd, cwnd). `cwnd` is exponentially grown as
packets are delivered successfully, and is decreased then re-increased (using Proportional Rate Reduction)
if packets are lost so client and server can converge on the available bandwidth of the
network between them. Packet loss at some point is an expected part of the
convergence process.

```
time to reach bandwidth target =
round trip time * (log(1 + (N / initial cwnd)))
```

If a connection goes idle, this slow start process is restarted.

## Head of line blocking

Because TCP guarantees in order delivery, if packet 1 is dropped but p2 and p3
make it to the destination the TCP layer cannot provide p2 and p3 until p1 is
retransmitted.

If your application can handle out-of-order delivery and packet loss it is
likely better served by [UDP](./udp.md) to avoid head of line blocking.
