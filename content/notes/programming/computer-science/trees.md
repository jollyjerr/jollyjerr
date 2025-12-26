+++
+++

# Trees

Expanding on the idea of [linked lists](./linked-list.md), trees start at a root node and descend
some height (distance to farthest child). Trees can be balanced or not (all children at same depth). They can have cycles or not.
They can be sorted or not (typically combined with binary trees).

Trees can be presented in a lot of ways:

```ts
interface Node<T> {
  value: T;
  children: Node<T>[];
}

// Or in a binary tree
interface Node<T> {
  value: T;
  right: Node<T>;
  left: Node<T>;
}
```

You can traverse trees with recursion or iteration.

### Depth First:

Depth first traversals use a stack and preserve the shape of the traversal

- pre order (visit the node and then call next on children)
- in order (call next on left, visit node, call next on right)
- post order (do all next then visit node)

```ts
function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

// on a binary search tree
function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }
  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  return search(curr.left, needle);
}
```

### Breadth First:

Breadth first traversals use a queue

Visits each level of a tree at a time

```ts
function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head]; // <- this js arraylist makes the running time o(n^2), so use a real queue in actual programs

  while (q.length) {
    const curr = q.shift();
    if (!curr) {
      continue;
    }

    if (curr.value === needle) {
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}
```

## Binary Search Tree

At each node, the left side children must be less than or equal to the current node, and right side children must be greater than.

TODO: red black and AVL balancing strategies
