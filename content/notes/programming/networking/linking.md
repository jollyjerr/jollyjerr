+++
title = "Linking"

[extra]
navname = "notes"
+++

# Linking

Between network devices there is some physical transmission medium.

The link layer is typically implemented in a NIC card and is the first layer of
abstraction.

The linking layer is below IP so we deal with frames

## Frame

Split data into three parts, header payload trailer.

In Ethernet, here is the frame format:

[dest 48, source 48, type 16, data, FCS 32]

Size in bits, fcs stands for Frame Check Sequence

Souce and dest are MAC addresses (media access control). Historically these were
globally unique, but not anymore.

FF:FF:FF:FF:FF:FF is a special broadcast dest address to everyone.

Ethernet is one example, 802.11 is WiFi another example of how the link can
split data into frames.

## Error handling

Some bits might get flipped in the physical world.

Parity: force every transmission to have an even or odd number of 1s, if you
receive a message that fails the test, reject. Count ones in an array of bits by
XOR ing through the array, if you end up with 0 it's an even number of ones and
1 it's odd.

Cyclic redundancy check: used for fcs field in ethernet
find bit value R such that D(ata) + R mod G is 0. G is a generator polynomial
defined by whatever standard you are using

```
r = 3
G = 1010
D = 11101010

find R

quotient bit = 1 if divisor can fit, otherwise 0

R = 110 so transmit <D,R>

11101010110
```

on check side divide <D,R> by G and check remainder is 0

detects any 1 bit error, any two adjacent 1 bit errors, any odd number of 1 bit
errors, any burst of errors with a length of 32 or less

## Sharing the link

If signals collide, interference destroys the data.

Approaches:

Channel partitioning:

Time division multiple access (TDMA) - nodes can only send during their time
slots
Frequency Division Multiple Access (FDMA) - divide frequency spectrum and assign
nodes a slot

Random Multi Access Protocols:

when to send? how to know if transmission succeeded or failed?

Carrier Sense Multiple Access (CSMA) - node reads channel and only starts
sending if idle

In CSMACD (collision detection) nodes can read while sending, and if it reads something different it
sends a jam signal to let all nodes know. this is used in ethernet

In CSMACA (collision avoidance) server has to ACK, if node does not get ACK you
assume collision after some time. this is used in wifi

If transmission fails we back off exponentially with jitter and retry.

## Local Area Networks

Ethernet switching solves the scalability problem of a single cable, special
nodes direct traffic using MAC addresses for addressing. Each switch has a mac
address table to map output ports to mac addresses. The table starts empty and
is built with "MAC Table Learning" where on table misses you send the traffic to
all out ports (flooding) and remember who replies.

Switches are built out in huge trees. Loops can happen when you use flooding
and have cycles in your trees of switches, any flooding loops all the way back
to the sender switch. This is combated by message lifespan or Spanning Tree
Protocol or architecting the network so no looping can occur.

In wireless LAN the special nodes are called access points which connect to a
wired network. Nodes associating with an access point is a hard problem.
