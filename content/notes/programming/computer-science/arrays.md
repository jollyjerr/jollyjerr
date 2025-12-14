+++
+++

# Arrays

An array is a contiguous memory space that contains a certain amount of bytes.

```
a = int[3]

a[1] <- go to memory address of a and add how big my type is * the index (in this case 4 bytes (32 bit int) * 1)
```

- Insertion just overwrites `a + width * offset (O(1))`

- Deletion depends on the system, just insert "not something"

- Cannot grow traditional arrays

- No Array.size() in most basic implementation - you need to have 1. a pointer to the start of the array 2. the size of the things in the array 3. the number of things in the array

> TIP: In JS, use an ArrayBuffer to replicate true arrays.

## Array List

An array list gives you a push operation on top of an array (like a vec)

1. Create initial capacity and track length
2. If length is inside capacity, add or remove at index of length in constant time
3. If length is at capacity, create a new array with more capacity, copy over all elements in order, continue with step two
4. If you want to enqueue/dequeue at the front or middle, you have to move each item over one

## Array Buffer (Ring Buffer)

Aka VecDequeue in rust

1. Create initial capacity and track index based head _and_ length (index based tail)
2. Head and tail can circle around to the other side. If the tail tries to insert off the array, take `this.tail % len` to get your tail's index in the front
3. If your tail exceeds your head, you need to resize
4. Start head at zero and rewrite in a larger capacity array
