+++
title = "Linux Data Plane"
+++

# Linux Data Plane

Very high level:

```
Device Drivers (connect to network cards)
|
Recv function (parse headers)
|
| if local
|
TCP, ICMP, IPsec
|
| else
|
forward
|
Queueing discipline
|
arp
|
transmit
|
driver

Also todo (ingres):
bridge
vlan
arp
```

## Netlink

Netlink is a protocol for user space utilities to interact with the kernel data
plane.

Based on berkeley [sockets](./socket.md).

Each application is a client - servers run in kernel. Supports multicast.

## Filtering

Use Match-Action Tables to apply rules to packets. This can be security rules
(drop packets) or packet modification like sharing one external IP address that
then translates to internal IP addresses (use port numbers to keep track of
internal mapping).

use `iptables` to set rules at the linux kernel level.

```
iptables (ADD/REM/CHANGE) (TABLE) (CHAIN) (RULE)

-p protocol
-m match
-s source
-d destination
-i in-interface name
-o out-interface name

see man page for more...
```

Four tables:

- filter table
- nat table
- mangle
- raw

## Load balancing

Flow affinity:

- TCP is stateful, so need to ensure all packets from the same tcp connection
  got to the same server
- First packet: algorithm selects server (IP of server called VIP virtual IP)
- Subsequent packets look in existing table

Source Hash: hash of source IP and port determines server, flow affinity handled
automatically by the algorithm

Round Robin: Iterate over servers in order. Flow affinity must be maintained by
load balancer.

Least Connections: Select server that has least active connections. This puts
flow affinity and connection tracking on the load balancer.

Layer 4 (network load balancer) considers IP and TCP headers

Layer 7 (application) considers HTTP headers

IPVS implements transport layer load balancing inside the kernel, ipvsadm sets
up and maintains the server table in the kernel.

## QOS (Quality of Service)

- filtering (token bucket filter)
- load balancing
- controlling loss and prioritization

iptables, ipvsadm, tc qdisc
