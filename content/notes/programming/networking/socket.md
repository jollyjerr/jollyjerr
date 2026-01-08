+++
title = "Socket Programming"
+++

# Socket Programming

When an operating system gets a transport layer datagram, it knows what port to
get to.

## Berkeley Sockets:

1983

A socket is an abstract representation for the local endpoint of a network
communication path.

One application puts data in a socket, other app gets data from the socket.

Sockets link the transport and application layer.

## Programming

TCP Server

- socket() os will create a socket and return a handle (file descriptor) (also
  specify TCP or UDP)
- bind() tells the os what address to use
- listen() notify the OS of the willingness to accept incoming connections
- accept() blocks, waiting for connections
- recv() process request
- send()
- recv()
- close()

Client

- socket(), connect() connection establishment
- send()
- recv()
- close() end of file notification

```python
import json
import socket
import time
from multiprocessing import Process
import os
import sys
import struct

dictionary = {}

# { obj: name }
# { obj: name, val: dictionary }
# value can be arbitrary
def get(params):
    name = params["obj"]
    entry = dictionary.get(name)
    retval = {"obj":name, "val":entry}
    return retval

# {obj:name, val: dictionary}
# {obj:name, response:response}
def put(params):
    name = params["obj"]
    val = params["val"]
    dictionary[name] = val
    retval = {"obj":name, "response":"ok"}
    return retval


# {func: func, params: params}
# {func: func, response: response}
def make_call(msg):
    func = msg["func"]
    param = msg["params"]
    if (func == "GET"):
        return {"func":"GET", "response":get(param)}
    elif (func == "PUT"):
        return {"func":"PUT", "response":put(param)}
    else:
        return {"func":func, "response":"ERROR - Function doesn't exist"}

def recv_message(conn):
   header = conn.recv(8)
   if len(header) < 8:
       return None

   (version, data_len) = struct.unpack("ii", header)
   data = conn.recv(data_len).decode()
   return json.loads(data)


def send_message(conn, json_dict):
    json_blob = json.dumps(json_dict)
    len_blob = len(json_blob)
    hdr = struct.pack("ii", 1, len_blob)
    conn.send(hdr)
    conn.send(json_blob.encode())

def server_program():
    host = socket.gethostname()
    port = 4444

    server = socket.socket()
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind((host, port))
    server.listen()

    while True:
        conn, addr = server.accept()
        print("got message from ", addr)
        data = recv_message(conn)
        if data:
            result = make_call(data)
            print("result", result)
            send_message(conn, {"status": "OK", "response": result})
        else:
            send_message(conn, {"status": "ERROR"})
        conn.close()

    server.close()
    return None


def client_do_single_call(call):
    host = socket.gethostname()  # client and server are both running on same host
    port = 4444  # socket server port number

    client_socket = socket.socket()  # instantiate
    client_socket.connect((host, port))  # connect to the server

    send_message(client_socket, call)

    json_dict = recv_message(client_socket)

    client_socket.close()  # close the connection
    return json_dict
```
