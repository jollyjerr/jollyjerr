+++
title = "IP Link"
+++

# Linux Network Device Configuration (IP Link)

Goal: network device configuration

Types of devices:

- Physical interfaces (ethernet)
- Attach to another device (vlan)
- Connect together multiple devices (bridge, bond)
- Tunnel traffic (vxlan, geneve)
- Virtual devices - (veth)

iproute2 - a collection of utilities for controlling TCP/IP networking and
traffic control in Linux. (also checkout net-tools)

### Commands

show, set, add, delete

VLAN enables isolation on a shared L2 network.

```
ip link add link eth0 name eth0.2 type vlan id 2
```

Tunnels "encapsulate" traffic for transmission over some network.

geneve and vxlan.

```
ip link add name gen0 type geneve id 55 remote 1.2.3.4
```
