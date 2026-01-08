+++
title = "Kubernetes Networking"
+++

# Kubernetes Networking

Challenges:

- Where to run -> k8s includes a scheduler to pick nodes
- how to communicate with each other -> ensures communication in face of changes
- scaling the service -> has constructs to support scaling
- handling failure -> monitors and can restart containers

## Use

You can use [kind](https://kind.sigs.k8s.io/) for local testing on a single host
(k8s in docker).

`kubectl` is the management utility for controlling clusters. `.kube/config`
tells the utility to send API calls to the control plane container.

#### Pod:

- A Pod is the unit of work in Kubernetes
- Often a single container, but can be multiple containers
- Receives a unique IP address in the Kubernetes Cluster

Base fields for k8s resource:

```yml
aipVersion:
kind:
metadata:
spec:
```

`kubectl port-forward pod/something 8000:80` for simple networking (expose internal ip to outside network)

#### Deployment

A deployment is a type of "Controller" that changes the actual state to the
desired state at a controlled rate.

Usually controls another controller (like replica set)

#### Service

A service is an abstraction which defines a logical set of Pods and a policy by
which to access them

Load balance between pods.

## Architecture

Control Plane and Workers

Everything is grouped in 'Namespaces' which are a k8s thing.

Kubelet (creates containers and sets up pods) is the only system that runs on
the machine, everything else is pods. Registers the node it's running on by
creating a node resource in the API server. Runs liveness probes. Deletes
containers. Can run static pods.

etcd is a distributed key value store using RAFT consensus algorithm to store
state of K8s cluster.

API Server provides a CRUD interface for querying and modifying the cluster
state over a REST API, stores the state in etcd.

All components listen to the API Server over http.

Scheduler waits for newly created pods then assigns a node to each new pod.
Filter feasible nodes, score the remaining nodes. Broken into 11 extension
points.

Controller Manager runs multiple controllers as processes performing various
reconciliation tasks.

## Networking

Needed communication:

- pod to pod

Each pod gets an IP address. Container Network Interface (CNI) calls a network
plugin to set up the networking for that Pod. A popular plugin is called flannel
which creates veth pairs and uses VXLAN tunneling or GRE tunneling to connect
physical nodes.

- pod to pods

Services have an IP address and load balance to pods. Kube-proxy is a component
that is an interface to iptables or ipvs. You can load balance with iptables
with the 'statistic' module.

- pod to external service

Services can be defined with type "ExternalName" which will point to an external
service.

- external service to internal service

Ingress and Ingress Controller are two components that handle load balancing and
provide routing rules. The controller sits ahead of the ingress component.

## Creating a networking plugin

Network Plugins have to implement the CNI spec. When Kubelet creates a pod via
the container runtime it will then invoke the network plugin following the CNI
spec to set up networking for the new pod.

- It'll check `/etc/cni/net.d` for configuration files.
- Looks for an executable labeled `type: ptp`. Executable implements CNI

Suggested next step: eBPF
