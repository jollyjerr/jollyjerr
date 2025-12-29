+++
title = "Routing"

[extra]
navname = "notes"
+++

# Routing

## Router Data Plane

A router is a gateway between different networks (can have different link layers).
They also forward the traffic to the correct destination.

### Forwarding vs routing

- Forwarding: data plane

Direct a data packet to an output port/link by use of a forwarding table.

- Routing: Control plane

Compute paths by communicating with neighbors. Creates the forwarding table.

### Packet forwarding

Control plane (route processor) calculates the forwarding table

Data plane - life of packet

- received at ingress of line card
- lookup destination in forwarding table
- send packet over switch fabric to output port
- line card transmits packet

Key computing work: lookup IP address really quickly. Also some updates to
packet headers.

### Longest Prefix Match (LPM)

Find the most specific IP prefix that matches the destination.

Good data structure for this: Trie

Each node has a 0 child to left and 1 child to right. Walk the tree to perform a
lookup (entirety of prefix length)

### Switch fabric

Each line card stores the forwarding table and has connections to other line
cards, or we just load into system memory and do the networking with cpu time.

- Link scheduling
- Dropping packets on congestion
- Traffic shaping to force traffic to conform to a policy

## Routing Control Plane

Key function: calculate the forwarding table

Different routing protocols solve problems differently.

What does each router know?

What info does each router exchange?

What calculation is being performed?

- Link-state protocol - OSPF (intra-domain) (decentralized)
- Path-vector protocol - BGP (inter-domain) (decentralized)
- Software-defined networking (move logic to centralized controller that does
  calculations for entire network and installs forwarding tables to each router)

### Link State Protocol

OSPF - Example link state protocol

1. Each router establishes peering with neighbors
2. Link states are flooded to entire network (each router tells neighbors all
   link states they know about)
3. Each router calculates shortest path - dijkstra's with weights on links being
   various network factors

Link state

- Connection to other routers - tells who the neighbor is
- Connection to network with end hosts - tells prefixes reachable

Link state flooding

1. Each router tells neighbors all link states they know about
2. Process continues until "convergence" when all routers agree

Changes in the network structure cause link state updates until convergence then
each router recalculates the shortest paths.

### Path Vector Protocol

BGP - Example path vector protocol

The internet: many inter-connected networks called Autonomous Systems all
coordinating with one another with BGP.

1. Peer with neighbors
2. For any route (path to prefix) update received: update routing table, perform local best path
   calculation (each AS is a node), if anything has changed for you - send update to neighbors

Each node uses operations like `ANNOUNCE, WITHDRAW, UPDATE` to keep neighbors
informed about changes. Also nodes do not tell neighbors about paths that
involve the neighbor itself.

iBGP vs eBGP

- iBGP is operating inside each "node" (AS)

Business policies - applied in ingress and egress

provider - paid to transit
customer - pays a provider
peer - financially neutral arrangement between ASes

Path calculation hierarchy:

- local preference (can be manually set)
- AS path length (number of AS hops)
- Multiple exit discriminator (allows AS nodes to indicate they prefer an exit
  point)
- eBGP vs iBGP (learned through internal or external neighbor)
- shortest IGP path cost (exit this network as quickly as possible)
- router ID (arbitrary tiebreaker)
