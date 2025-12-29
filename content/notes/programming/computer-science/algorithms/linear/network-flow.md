+++
+++

# Network Flow Problems

Directed graph with source node and sink node. The edges have different weights.

Send max amount of flow.

```
constraints [
    follow edges direction,
    cannot send more than an edges capacity,
    flow concentration - total amount of flow egres must be == ingres on each node - this is also Kirchoff's law
]
```

## Formulate as LP

Decision Variables: how much flow each edge is going to carry

Objective Function: Max flow leaving the source or the flow entering the sink (they will be the same)

```
Constraints [
    x1...xn >= 0,
    # capacity constraint for every edge...
    x1 <= capacity constraint,
    # Kirchoff's law
    x1 + x2 + x6 = x4 + x5 # etc - depends on the graph
]
```

Flow problems are typically always feasible and bounded.
