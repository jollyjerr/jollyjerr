+++
+++

# Trees

A tree is an undirected graph that is connected and has no cycles.

There are two types of nodes on trees - leaf nodes that are of 1 degree, and
internal vertices.

## Rooted vs rooted trees

A tree is rooted if it has a root node. That node gets oriented up top and each
node gains an ancestry relation to different nodes and a "level". The root is
level 0 then count up as you go down to the children.

The height of the tree is the highest level.

Trees can have subtrees taken out of them.

## Traversals

A lot of problems require you to traverse all the nodes of a rooted tree.

1. Pre Order

Process the node then visit it's children (lean left - as in process left child
then right)

2. Post Order

Process visit all children then process the node (lean left)

3. In order

Process left child, self, then right child

4. Level order (BFS)

Process each level from left to right

## Spanning trees

A spanning tree is a subgraph of a graph that contains all the nodes but is a
tree.

Most famously, Prim's Minimum Spanning tree algorithm will find the smallest
spanning tree on a weighted graph. Minimum spanning trees are not unique. There
is a guarantee that the total weight will be the smallest possible which can be
proven via the "cut property".

```ts
// input: an undirected, connected, weighted graph G
// output: T, the minimum spanning tree of G
function prims(G) {
  T = [];
  // pick any node from G and add to T
  for (j = 1; j < n - 1; j++) {
    // let C be the set of edges with one endpoint in T and one endpoint
    // outside of T
    //
    // let e be the minimum weight edge in C
    //
    // add e to T and add the endpoint of e not in T to T
  }
}
```
