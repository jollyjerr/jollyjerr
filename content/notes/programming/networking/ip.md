+++
title = "Internet Protocol"
+++

# Internet Protocol

Internet Protocol provides host to host addressing and routing. Versions 1-3
were revised. IPV4 is the one we all know and love. IPV5 was called Internet
Stream Protocol (SP) and never took off. And IPV6 is what happens when you run
out of addresses in IPV4 lol.

The specification can be found [here](https://www.ietf.org/rfc/rfc791.txt).

The IP exists one level above "local networks" to pass data between local
networks (nets or gateways). There are no acknowledgments either end-to-end or hop-by-hop.

## Datagram

The IP layer sends a 20 byte packet, roughly:

```cpp
struct ipv4_header {
    uint8_t version_and_header_length;
    uint8_t DSCP_and_ECN;
    uint16_t total_length;
    uint16_t identification;
    uint16_t flags_and_fragment_offset;
    uint8_t time_to_live;
    uint8_t protocol;
    uint16_t header_checksum;
    uint32_t source_ip_address;
    uint32_t destination_ip_address;
    uint32_t options;
    // ...payload
};
```

This packet is sent as a datagram, so there is no guarentee the message will be
delivered. Layers above IP can detect dropped packets and recover if they wish.

## Internetworking

Enables communication between multiple networks (links)

Called gateway in 1974 "a protocol for packet network intercommunication" by
Cerf and Kahn

### Service model

Best effort:

- packets may get dropped
- timing, no guarentee how long
- order, packets may get re-ordered

### Addressing

Each interface gets an IP address.

IPV4: 32 bits dotted decimal 192.168.0.1

IPV6: 128 bits in hextets (16 bits) seperated by a colon. Drop leading 0's and
:: replaces consecutive 0's

### Subnet

Set of consecutive IP addresses

Higher order pits in a subnet all the same, lower order identify unique host

Any message going to subnet just uses higher order bits

### CIDR

Classless Inter-Domain Routing

Format: a.b.c.d/x (called the prefix)

x is the length of the prefix - num of high order bits that are the same

a.b.c.d are values which are the same (use 0 for low order bits)

### Hierarchical

Two subnets can combine: 1.1.0.0/24 and 1.1.1.0/24 = 1.1.0.0/23

## Mapping IP Addresses

Allocation:

- IANA - Internet Assigned Numbers Authority
- Regional registries - manage local IP address allocation
- ISP's own large blocks of addresses and provide them

### ARP - address resolution protocol

Machine A wants to send a packet to a specific machine

1. Broadcast "what is MAC for this IP?"
2. Only the machine with that IP responds with it's MAC

### Assigning an IP on a LAN

1. Statically assign manually `sudo ip addr add 10.1.1.10/24 dev eth0`
2. Dynamic - DHCP (dynamic host configuration protocol)

```
dhcp discover
dhcp offer (can be multiple dhcp servers on a network that all offer)
dhcp request
dhcp ack
```
