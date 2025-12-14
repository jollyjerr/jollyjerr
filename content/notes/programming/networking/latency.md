+++
+++

# Performance of network traffic

## Latency

Latency is the total time it takes for a message to travel from its origin to
destination.

A packet's total latency is the sum of all delays:

- Propagation delay

Amount of time required for the message to travel the physical distance.

Normally within a small constant factor of the speed of light. (~1.5 refractive
index in the material data travels through meaning 200 million meters per second)

distance/speed of propagation

- Transmission delay

Amount of time required to push the packet's bits into the link.

`packet length * data rate of the link`

- Processing delay

Amount of time required to process the packet header, check for bit level
errors, and determine the packet's destination

- Queuing delay

Amount of time the packet is waiting in the queue until it can be processed

---

When reading delay times be sure to check units. bps means bits per second while
Bps means bytes!

Also people detect lag if something takes over 200ms.

### Last mile latency

The last mile between a client and a server involve the most hops and introduce
a lot of latency. Typically 10-65ms.

Use `traceroute <ip>` to learn about the specifics of your situation. (`tracert on
windows`). It sends a sequence of packets with increasing hop limits an counts
time between `ICMP Time Exceeded` messages.

## Bandwidth

### Core Networks

Most long distance messages travel over both optical fiber and metal wires.
Optical fiber leverages wavelength-division multiplexing (WDM) to carry multiple
different wavelengths through each fiber, with multiple fibers per cable.

Average bandwidth speeds in the US are 12.6 Mbps, normally due to technology in
the last mile (bandwidth is only as much as the weakest link). For perspective,
streaming video takes 10 Mbps ish.
