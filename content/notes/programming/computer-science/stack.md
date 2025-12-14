+++
+++

# Stack

A specific implementation of a singly [linked list](./linked-list.md) where you only add or remove from the head. (first in last out)

Implemented very similarly to a [queue](./queue.md).

```ts
type Node<T> = {
	value: T;
	prev?: Node<T>;
};

class Stack<T> {
	public length: number;
	private head?: Node<T>;

	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	push(item: T): void {
		const node = { value: item } as Node<T>;

		this.length++;

		if (!this.head) {
			this.head = node;
			return;
		}

		node.prev = this.head;
		this.head = node;
	}

	pop(): T | undefined {
		this.length = Math.max(0, this.length - 1);
		const head = this.head!;

		if (this.length === 0) {
			this.head = undefined;
			return head?.value;
		}

		this.head = head.prev;

		// free
		head.prev = undefined;

		return head.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
```
