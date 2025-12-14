+++
+++

# Approximation Algorithms

- Vertex Cover
- Knapsack
- Travelling Sales Problem
- MAX SAT

Example optimization problems that are np-complete and require exponential time to
solve correctly, but can be approximated in polynomial time within some constant
factor of the optimum solution.

## JobShop Scheduling

n tasks that all take Tn time. Each task is assigned to a single processor out
of m processors.

The makespan of an alignment is the load of the processor with the maximum load.
If you minimize the makespan then the entire assignment finishes in the smallest
amount of time possible.

This problem is NP complete via translation to the "partition problem".

### Approximation Algorithm via greedy scheduler:

```
1 .. n jobs
1 .. m processors

j[1] .. j[m] all preset to 0

Go through each job j[i] is the sum of the time of the jobs that each processor
already has been assigned. Find k = processor where commitment time is the
minimum and break ties arbitrarily. Assign i to that processor and increase j[i]
by that jobs time.

Use heap to store j values so finding k is fast.
```

Runs in `O(n log(m))`.

### Bound of worst case

At some point in the loop, you are going to add `T[i]` to some processor `k` that is
going to increase the makespan to the max it will be, and the remaining jobs
will not increase it.

Because of this, you know `J[K] <= J[L] for all L` so at least one processor has
to have more than the average load per processor. Some algebra can show that
this means the approximation is bounded by 2 over the optimum.

You can do even better if you sort the jobs from largest to smallest before
running the greedy scheduler. This bounds the difference from optimum by `3/2`.

## Topics

- [vertex cover](./vertex-cover.md)
- [maximum satisfiability](./max-3-sat.md)
- [traveling salesperson problem](./tsp.md)
- [fully polynomial time approximation](./fully-polynomial.md)
