+++
title = "Randomized Planning"

[extra]
navname = "notes"
+++

# Randomized Planning

## Sampling Based Planning

Grid based planning has limitations. It requires a lot of exploration. It is
very problematic in higher dimensions. Lowering resolutions is difficult to get
correct.

Instead of discretizing the C space into a grid, we sample from continuous
coordinates. Only need function to generate possible (random) neighbor. This is
very fast for exploration of large configuration space.

Basically you rapidly explore random trees - many short predictions of future
outcomes with different actions taken. Once you find the goal, you can use other
algorithms to optimize your path taken.

This is called **RRT**, rapidly exploring random tree.

```
input:
    - configuration space C
    - start node qstart and end node qgoal
    - K the maximal number of vertices in the RRT
    - delta_q the incremental distance with which to build the tree

output:
    - RRT graph G

procedure:
    - initialize graph with qstart
    - sample random point qrand
    - find nearest point to qrand (qnear)
    - move from qnear in direction of qrand by delta_q
    - compute potential new node qnew
    - if edge between qnear and qnew is collision-free, add edge and qnew to the graph
    - if qnew is less than delta_q from qgoal, add edge from qnew to qgoal and quit
    - otherwise, repeat process until k nodes

bias search toward the goal:
    - set qrand = qgoal with probability p
    - bias exploration toward the goal, balance exploration and exploitation
```

You can improve this algorithm thousands of ways. Mainly techniques to improve
the initial discovered path to make it closer to the ideal path (found with `A^*` or whatever) at the end of exploration.

**C-forest** can refine the graph and parallelize the search. Nodes limit search
area of other nodes.

### Collision Checking

Need to check every point along a potential edge. On a grid map: Bresenham's
line algorithm works. In continuous space: linearly interpolate vectors.

In practice this can be done using computer graphics collision checking (ODE,
Bullet, ...). Export Universal Robo Descriptor File from solid works or Webots.
