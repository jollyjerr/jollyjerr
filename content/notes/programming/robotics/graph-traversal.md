+++
title = "Graph Traversal"

[extra]
navname = "notes"
+++

# Graph Traversal

## Shortest Path Problem

If a robot needs to find the optimal path to a target location, it must solve
the shortest path problem.

- **Unweighted graph**

Breadth-First Search can be used to find the shortest path by traversing all
nodes (full traversal).

- **Weighted graph**

Dijkstra's algorithm can be used to find the shortest path between a starting
node and **all** other nodes in a weighted graph.

`A*` (A star) combines the best features of Dijkstra with a greedy heuristic
that guides the robot to the goal node of a weighted graph.

## Complete Traversal of Unweighted Graph

In navigation, the preferred algorithm to completely traverse a graph is
Breadth-First Search. BFS uses a queue, as apposed to DFS which uses a stack,
therefor the **first** path to a target node that is found **will be the
shortest path**.

```py
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start = 'A'
goal = 'F'

queue = [start]
visited = set(start)
parent = {}

while queue:
    v = queue.pop(0)
    for u in graph[v]:
        if u not in visited:
            queue.append(u)
            visited.add(u)
            parent[u] = v

key = goal
path = []
while key in parent.keys():
    key = parent[key]
    path.insert(0, key)
path.append(goal)

print(f'Shortest path from {start} to {goal}: ', path)
```

## Complete Traversal of Weighted Graph

Dijkstra's algorithm is similar to breadth-first search but uses a priority
queue or heap instead of a normal queue so that it is always popping the lowest
cost edge from the queue.

```py
from heapq import heapify, heappush, heappop
from collections import defaultdict

graph = {
    'A': [(5, 'B'), (3, 'C')],
    'B': [(5, 'A'), (3, 'D'), (1, 'E')],
    'C': [(3, 'A'), (3, 'F')],
    'D': [(3, 'B')],
    'E': [(1, 'B'), (1, 'F')],
    'F': [(3, 'C'), (1, 'E')]
}

start = 'A'
goal = 'F'
queue = [(0, start)]
heapify(queue)

distances = defaultdict(lambda: float("inf"))
distances[start] = 0

visited = {start}
parent = {}

while queue:
    (currentdist, v) = heappop(queue)
    visited.add(v)
    for (cost_vu, u) in graph[v]:
        if u not in visited:
            newcost = distances[v] + cost_vu
            if newcost < distances[u]:
                distances[u] = newcost
                heappush(queue, (newcost, u))
                parent[u] = v
```

### Partial Traversal

Dijkstra's algorithm is computationally expensive for large graphs. `A*` adds a
heuristic estimate to prioritize the nodes that are most likely to lead to the
shortest path - this results in better performance for large graphs.
