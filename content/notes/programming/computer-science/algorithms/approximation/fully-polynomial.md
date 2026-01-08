+++
title = "Fully Polynomial Time Approximation"
+++

# Fully Polynomial Time Approximation

A fully polynomial time approximation algorithm is an algorithm that can give
you an approximate answer bounded by some `k >= 0` constant factor of the
correct answer where you get to specify `k` as a trade off for performance:

```
Example runtime of a fully polynomial time approximation:

O(n^3 * (1/k))

Where the optimal solution is no more than (1-k)OPT

s.t. k > 0
```
