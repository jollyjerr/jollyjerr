+++
+++

# HTTP

Application level protocol

Defines:

- message syntax
- types of messages exchanged
- message semantics

## Message Syntax

- base types
- flat types (array or structure)
- complex types (has pointers)

Conversion Strategy:

- Canonical Intermediate Form (send and rec side convert internal representation
  to agreed upon format)
- Receiver Makes Right (sender includes data about it's internal representation)

Tagging:

- untagged (agree on type, length, and location of data)
- tagged (include in message tags about the data) (json and protobuf)

```
start line
message header
message body
```

## Types

```
options
get
head
post
put
delete
trace
connect
```

## connection

- client initiate TCP connection
- client requests file

Versions:

```
1.0 first
1.1 persistent connections (no handshake per file)
2.0 multiplexed requests (requests objects in parallel)
3.0 HTTP over QUIC instead of TCP
```
