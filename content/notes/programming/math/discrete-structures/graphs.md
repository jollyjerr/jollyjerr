+++
title = "Graphs"
+++

# Graphs

Graphs are a data structure that come from [binary relations](./sets.md).

Vertices (nodes) are connected by edges (links). Ex: the edge (u,v) connects node u
to v. u is the tail and v is the head.

Every node has an in-degree (the number of edges pointing into it) and an
out-degree (the number of edges pointing out of it).

## Terms

Vertices are adjacent if they have an edge

An edge is incident to it's endpoints

Vertices are neighbors if they have an edge, and a vertices degree is the number
of neighbors that it has.

The total degree of a graph is a sum of all the degrees of the vertices. (twice
the number of edges will always be the degree).

A graph is regular if all the vertices have the same degree.

Two vertices are connected if there is any path between the two.

A graph can be n-connected if removing n edges/nodes will break it into more
than one piece.

## Notation

Normally you just draw it out in a math context.

#### Adjacency Matrix

```
0 0 1 0
1 0 0 1
0 1 0 0
1 1 0 1

shows if (from x, to y) is true
```

#### Adjacency List

```
{
    a: [b, c],
    b: [a, c, e]
}

each node points to a list of it's neighbors
```

### Operations

#### Walk

Start at one vertex and use a sequence of edges to reach another vertex. The
length of a walk is the number of edges in the walk, not the number of nodes.

#### Circuit

A walk where the last vertex is the vertex you started at. <a> is a circut of
length 0.

A circuit is a cycle if there are no other repeated nodes other than the initial
and final node.

## Graph power theorem

Let G be a directed graph. Let u and v be any two vertices in G. There is an
edge from u to v in G^k (g composed with itself k times) if and only if there is
a walk of length k from u to v in G.

## Transitive Closure

Basically just connect each node that is connected by an extra step. Every two
step becomes one. Continue for each transitive closure - can be written as G^n

If you have a graph with n vertices there is no direct path without loops
between two vertices that is longer than n.

## Directed Acyclic Graph

Graph with directed edges and no loops.

You can sort them with topological sort to show the dependency relations between
nodes.
