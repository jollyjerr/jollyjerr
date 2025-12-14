+++
+++

# GRPC

Extends the idea of local procedure call to a remote server.
Defined a framework for data encoding and communication protocol

protobufs - binary format to serialize data (structure is agreed on)

.proto file defines data and functions, grpc compiler generates libraries that
can be used in different applications

Supports unary and streaming apis.

```proto
syntax = "proto3";

service Echo {
 rpc echo(Message) returns (Message) {}
}

message Message{
 string message = 1;
}
```
