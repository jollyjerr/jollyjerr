+++
+++

# Heap (priority queue)

A type of [tree](./trees.md) that maintain a weak ordering

Fill in each node from left to right and maintain the heap property (weak ordering to max or min)

### Addition

Add new node to the very bottom and then bubble up (by swapping above) until
the heap property is restored

### Deletion

Remove the node, swap the lowest node in it's place and heapify down

## Min Heap

Top node is the smallest

```
20
|   |
30   100
| |  |  |
31 80 3000 1001
```

## Max Heap

Top node is the largest

## ArrayList Representation

It can be helpful to represent heaps in an array list so accessing elements at the
end is easier.

```
[0, 1, 2, 3, 4, 5, 6, 7, 8]

Children can be found with this function:

2i + 1 === left child
2i + 2 === right child

And a nodes parent can be found with:

Math.floor((i - 1)/2)
```

Insert and delete operations have a worst case runtime of O(logn) because the depth of the
tree will always be logn

## Implementation (Min Heap)

```ts
class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);

    this.length++;
  }

  delete(): number | undefined {
    if (this.length <= 0) return undefined;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const val = thid.data[idx];

    const pidx = this.parent(idx);
    const pval = this.data[pidx];

    if (pval > val) {
      // swap
      this.data[idx] = pval;
      this.data[pidx] = val;

      this.heapifyUp(pidx);
    }
  }

  private heapifyDown(idx: number): void {
    const lidx = this.leftChild(idx);
    const ridx = this.rightChild(idx);

    if (idx >= this.length || lidx >= this.length) return;

    const lval = this.data[lidx];
    const rval = this.data[ridx];
    const val = this.data[idx];

    if (lval > rval && val > rval) {
      this.data[idx] = rval;
      this.data[ridx] = val;

      this.heapifyDown(ridx);
    } else if (rval > lval && val > lval) {
      this.data[idx] = lval;
      this.data[lidx] = val;

      this.heapifyDown(lidx);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}
```
