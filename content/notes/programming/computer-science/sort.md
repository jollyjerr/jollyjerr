+++
+++

# Sort

> Any xi in an array is <= xi + 1

## Bubble Sort

Start at the beginning of an array. Each element looks to it's right and swaps if the property of sorted-ness is broken (xi > xi + 1)

Each iteration will put the biggest remaining element at the end of the array. So each iteration can go over N - iteration_count items

Stop iterating when you are only checking an array of one item

Runtime is O(N^2) reduced from `O(n(n+1)/2)`

```ts
function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
```

## Quicksort

Quicksort takes advantage of [recursion](./recursion.md) and sorts an array in place.

Pick a pivot, walk the array and put everything less than pivot to the left of the pivot and everything greater than the pivot behind it.
Repeat tho process for the left of pivot and right of pivot - all the way down.

Running time is O(nlogn) with good pivots, but worst case is O(n^2). Space is constant.

Normally written as two parts:

1. Partition -> produce the pivot index and moves the items to each side of the index
2. Quick Sort (qs) -> calls partition and handles recursion and the base case

```ts
function qs(arr: number[], lo: number, hi: number): void {
  // base case
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]; // or whatever (normally midpoint)

  let idx = lo - 1;

  for (let i = 0; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;

      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  // put pivot in middle (at the pivot index)
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quickSort(arr: number[]) {
  qs(arr, 0, arr.length - 1);
}
```
