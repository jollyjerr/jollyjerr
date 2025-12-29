+++
title = "Nmap"

[extra]
navname = "notes"
+++

# Nmap

Nmap is a tool for network discovery.

Read the nmap book: https://nmap.org/book/

There are different types of scans, some of them send packets and some of them
do not. Sending specific packets to specific ports is how you do host discovery.

## Host discovery

- ARP ping

Default on local ethernet. Low weight and not threatening.

ICMP protocol

- ICMP ping

TCP or UDP layer scans to detect if host is up.
