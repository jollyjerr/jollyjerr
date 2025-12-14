+++
+++

# Maps

## Terms

Load Factor - the amount of data points vs the amount of storage (data.len / storage.capacity)

Key - a value that is consistently hashable and is used to look up data

Value - data associated with a key

Collision - when two or more keys map to the same cell

```
type map = {key, value}[][]
hash(key) -> number

take that number % capacity to produce index of item

if there is more than one item stored there (from collisions), linear search at that index
```

## LRU Cache

Least recently used items get evicted

Under the hood it's a linked list supported by a hash map for lookup, if you lookup an item
it gets moved to the front of the list.

Super handy because it has a fixed capacity.

```ts
type Node<T> = {
	value: T;
	next?: Node<T>;
	prev?: Node<T>;
};

class LRUCache<K, V> {
	private length: number;
	private lookup: Map<K, Node<V>>;
	private reverseLookup: Map<Node<V>, K>;
	private head?: Node<V>;
	private tail?: Node<V>;

	constructor(private capacity: number = 10) {
		this.length = 0;
		this.head = this.tail = undefined;
		this.lookup = new Map<K, Node<V>>();
		this.reverseLookup = new Map<Node<V>, K>();
	}

	update(key: K, value: V): void {
		let node = this.lookup.get(key);
		if (!node) {
			node = createNode(value);
			this.length++;
			this.prepend(node);
			this.trimCache();

			this.lookup.set(key, node);
			this.reverseLookup.set(node, key);
		} else {
			this.detach(node);
			this.prepend(node);
			node.value = value;
		}
	}

	get(key: K): V | undefined {
		const node = this.lookup.get(key);
		if (!node) return undefined;

		this.detach(node);
		this.prepend(node);

		return node.value;
	}

	private detach(node: Node<V>): void {
		if (node.prev) {
			node.prev.next = node.next;
		}

		if (node.next) {
			node.next.prev = node.prev;
		}

		if (this.head === node) {
			this.head = this.head.next;
		}

		if (this.tail === node) {
			this.tail = this.tail.prev;
		}

		node.next = undefined;
		node.prev = undefined;
	}

	private prepend(node: Node<V>): void {
		if (!this.head) {
			this.head = this.tail = node;
			return;
		}

		node.next = this.head;
		this.head.prev = node;
	}

	private trimCache(): void {
		if (this.length <= this.capacity) {
			return;
		}

		const tail = this.tail!;
		this.detach(this.tail);

		const key = this.reverseLookup.get(tail) as K;
		this.lookup.delete(key);
		this.reverseLookup.delete(tail);
		this.length--;
	}
}

function createNode<T>(value: T): Node<T> {
	return { value };
}
```
