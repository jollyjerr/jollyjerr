+++
+++

# Queue

A specific implementation of a [linked list](./linked-list.md).

A FIFO structure (first in, first out)

All operations are O(1):

- insert/enqueue: add item to tail of linked list
- get/deque: get and remove head of linked list
- peek: look at head of linked list but don't remove

```ts
type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;

  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item };
    this.length++;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    // free memory - not needed in Typescript but you get the idea
    head.next = undefined;
    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
```
