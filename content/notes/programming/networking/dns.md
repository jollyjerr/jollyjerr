+++
title = "DNS"
+++

# Domain Name System

IP addresses are not human readable, and they point to single machines when
applications have many.

## Domain name System

Distributed database of mapping between hostnames and IP addresses. Application
layer protocol that runs on top of UDP.

Resource Records (name, value, type, ttl)

- Type A: name - hostname, value - ip
- Type NS: name - domain, value - hostname of authoritative name server for this domain

## Root Servers

In recursive lookups, 13 root servers (IP addresses stable) that are replicated.

Any Cast: advertise a single IP prefix with multiple distinct locations. Hosts
routed to closest one.

## Message Format

- identification: reply will match query
- flags: tell if query or reply
- questions: query of hostname lookup
- answers: responses to query
- authority: if responder does not know answer, nameserver authoritative for
  part of the hostname
- additional: to help prevent further lookups (hints for common lookups)
