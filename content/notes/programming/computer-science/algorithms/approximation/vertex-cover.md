+++
title = "Vertex Cover"
+++

# Vertex Cover

Choose a subset of vertices that covers the graph (every edge touches one
selected vertex). Goal is smallest cardinality of subset.

As discussed in [linear programming](../linear/linear.md), this problem is np-complete.

However, an optimal factor 2 approximation is achievable:

## First try: greedy on vertex degree

```
until graph has no edges:
    choose vertex with highest degree
    delete the vertex and all edges going out from it
```

`VCgreedy <= OPT(logn)`

Super simple and good algorithm but does not perform well enough to be useful in
bad cases where you have a lot of nodes that are only connected to one other
node.

## Second try: Maximum Matching

```
until graph has no edges:
    choose an edge at random
    delete that edge, it's two vertices, and all edges connected to those vertices
```

Seems like this would be wasteful, but it is actually almost optimal (no worse
than twice the optimum).

The optimum algorithm will have always chosen at least one vertex for every two
that this algorithm chooses. The proof is very simple.
