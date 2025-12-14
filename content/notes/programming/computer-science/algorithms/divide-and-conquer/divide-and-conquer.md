+++
+++

# Divide and Conquer

Divide and conquer is an algorithm design strategy shared in many algorithms
where you:

1. Divide input into subproblems (smaller instances of the original problem)
2. Solve subproblems recursively (the recursion bottoms out at the base case)
3. Combine solutions

Simple examples:

- Merge sort
- Quick sort
- Binary search

The interesting thing is that the "real work" of each algorithm might happen in
any of the steps.

In math, a recurrence is an equation that describes a function in terms of it's
value on other, typically smaller, arguments. In CS we use recurrences to
describe the running time of divide and conquer algorithms.

## Topics

- [max subarray problem](./max-subarray.md)
- [karatsuba's multiplication](./karatsuba.md)
- [recurrences](./recurrences.md)
- [fast fourier transforms](./fast-fourier-transforms.md)
