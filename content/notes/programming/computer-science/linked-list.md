+++
title = "Linked List"
+++

# Linked List

A heap allocated set of containerized nodes that point to the next node in the list:

```ts
type Node<T> = {
  item: T;
  next?: Node<T>;
};
```

A _doubly_ linked list includes a pointer to previous:

```ts
type Node<T> = {
  item: T;
  next?: Node<T>;
  previous?: Node<T>;
};
```

Insertion/Deletion can be O(1) (if you know where it is) because you just change `next` and `previous` pointers.
All operations in general can be O(N) because of the traversal but obviously head/tail stuff can be constant.

## Implementation

```ts
type Node<T> = {
  item: T;
  next?: Node<T>;
  previous?: Node<T>;
};

class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    this.length++;

    const node = { item } as Node<T>;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("cannot insert beyond the list");
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;

    const curr = this.getAt(idx) as Node<T>;

    const node = { item } as Node<T>;
    node.next = curr;
    node.previous = curr.previous;
    curr.previous.next = node;
    curr.previous = node;
  }

  append(item: T): void {
    this.length++;
    const node = { item } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.item === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);

    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.item;
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  }

  private removeNode(node: Node<T>): T | undefined {
    this.length--;

    if (this.length === 0) {
      const out = this.head.item;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.previous) {
      node.previous.next = node.next;
    }

    if (node.next) {
      node.next.previous = node.previous;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.previous;
    }

    node.previous = node.next = undefined;
    return node.item;
  }
}
```
