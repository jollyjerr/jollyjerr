+++
title = "Virtual Networking"
+++

# Virtual Networking

## Network Namespaces

`Bare Metal -> Virtual Machines -> Containers`

namespaces: what resources and naming of those resources a process sees (file
descriptors, ip addresses)

cgroup: (control groups) groups processes and allocates resources (CPU, Memory)
that the kernel enforces.

Processes inherent from a parent but can exist in their own namespace. Root
namespace is where user interacts.

`ip netns` tool for process network namespace management

- create network namespace
- create veth pair
- attach veth devices to a namespace
- ip netns exec <netns> <command>

then you can add ip addresses to each device and communicate between the two

Useful tools for setting up virtual networking in linux namespaces:

```
ip netns list
ip netns exec
ip route
ethtool
ip link
ping
tshark
tcpdump
```

## Docker

Docker includes a client (cli) that interacts with a host (daemon) that pulls
images from the registry (web api).

A docker container is:

- a temporary filesystem
  - layered over an image
  - fully writable (copy on write)
  - disappears when End of Life
- A network stack
- A process group - one main process with possible subprocesses

Docker daemon doesn't create a reference of the network namespace file in the
`/var/run/netns` directory.

`docker0` is a default network bridge that all containers attach to (unless
otherwise specified)
