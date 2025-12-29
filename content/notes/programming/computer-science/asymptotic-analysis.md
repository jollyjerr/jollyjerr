+++
+++

# Asymptotic Analysis

## Big O

A mathematical function can be Big O of another function if it is bounded above (less than) by that function after a certain point and multiplied by a constant C (AKA less than or equal to)

Just have to [prove](../../math/discrete-structures/proofs.md) that one constant (C) works

```
T(N) is O(F(N)) if and only if C * F(N) is forevermore above T(N) after N * x (the crossing point)
```

Close relatives are Omega (greater than or equal to) and Theta (equal to)

```
T(N) is BigOmega(F(N)) if and only if C * F(N) is forevermore below T(N) after N * x
```

Theta means both are true

Little o means all constant C there exists some larger "N not" there is a upper bound `C * f(n)` for T(N) `strictly less than`

Solid resource on Big O -> [http://web.mit.edu/16.070/www/lecture/big_o.pdf](http://web.mit.edu/16.070/www/lecture/big_o.pdf)

"Big-Oh" means that you have reduced F(N) to the sweet spot of abstraction by performing Asymptotic Analysis. _Suppress_ constant factors (from the environment EX: lines of code) and lower-order terms (that are irrelevant for large inputs).

A merge sort example can be proved (via binary recursion tree) to have an upper bound of `6N(log2(n) + 6N)`, you can suppress constant factors and lower-order terms even farther to reach a "Big-Oh" of `Nlog(N)`

Big O is used to categorize algorithms based on time _and_ space requirements.

EX: O(N) time can still be O(N^3) space

### Common Big O's

O(1) -> get element from dict "constant time"
O(log N) -> Binary search trees "Pick a spot in N, half N, Pick a spot in N, half N..."
O(sqt(N)) -> not common "go over N^1/2 items once"
O(N log N) -> Quicksort "Go over N, half N, go over N, half N..."
O(N) -> for loop "go over N"
O(N^2) -> 2d array "go over N for every member of N"
O(N^3) -> Matrix multiplication "N^2 for every member of N" (except for Strassen algorithm)
O(N!) -> yuck
O(N^N) -> super yuck

## Guiding Principles for Analysis of Algorithms

1.  Use "Worst Case" analysis

Make absolutely no assumptions about the input.

"Average Case" and "Benchmark" analysis require domain specific knowledge but can be useful for practical applications.

2.  Do not worry (too much) about constant factors or lower-order terms

Simpler and sloppy upward bounds for easier mathematics

Constants depend on machines and there is no reason to track those small changes

3.  Asymptotic Analysis

Focus on large input sizes (N)

> Only big problems are interesting

A _Fast Algorithm_ 🔥 === worst-case running time grows slowly with input size (Good Asymptotic running time)

Aim for mathematical tactility and **predictive power**

Aspire to linear running time
