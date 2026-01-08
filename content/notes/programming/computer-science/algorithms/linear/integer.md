+++
title = "Integer Linear Programming"
+++

# Integer Linear Programming

> LP + Integrality Constraint

The restriction is that the decision variables all have to be integers (they can
be positive or negative but must be whole numbers (set Z)).

Solved with many classes of algorithms:

- branch and bound
- cutting plane
- branch and cut
- lift and project
- ... and more!

## Example: Knapsack

List of items where each item has value and weight. You want to max value
without breaking the weight limit W.

Knapsack is NP Hard - the dynamic solution is pseudo polynomial time.

To approach this as an ILP problem:

```
# indicator decision variables
x sub i = {
    0 if Ii is not picked
    1 if Ii is picked
}

maximize v1x1 + v2x2 + v3x3 ... + vnxn

s.t. w1x1 ... <= W
     x1...xn member of Z
```

This is called a 0/1 or binary LP because the decision variables can only be 0
or 1.

## LP Relaxations

If you have an ILP and remove the integrality constraint, that is called lp
relaxation.

- `Opt. LP solution is always more optimal than Opt. ILP solution` every solution of an ILP
  is a solution of the LP
- If an LP relaxation is infeasible then the ILP is infeasible.
- If an ILP is unbounded than the LP relaxation is also unbounded.

## Integrality Gap

```
gap = opt(LP)/opt(ILP) for maximization problems
gap = opt(ILP)/opt(LP) for minimization problems
```

You cannot _always_ prove a bound on how large the gap is because some
optimization problems result in massive gaps (could even be infinite).

## NP Completeness

ILP solving is NP-hard

Decision problem: `is there a solution where the objective function is >= k ?`

- BinaryILP is a member of NP

The certificate is the value of each decision variable.

- BinaryILP is NP Complete

3-SAT can be reduced to BinaryILP.

Each clause of 3-SAT can be written as a constraint, and then you maximize the
number of clauses that are true by choosing "true" or "false" (0,1) for each "P"
value in each clause (so each P value is a decision variable and each clause is
a decision variable).

Therefore if you solved this ILP you would have a solution to 3SAT.

Most real world ILP algorithms run in exponential time.

## Vertex Cover Problem

Choose a subset of vertices that covers the graph (every edge touches one
selected vertex). Goal is smallest cardinality of subset.

```
Decision variables: xi for each vertex

xi = {
    0 if vi not in cover
    1 if vi in cover
}

minimize: x1 + x2 + ... + x6

s.t: for each edge, at least one of the verticies are in the cover
EX: x1 + x4 >= 1 (for an edge going from one to four)
```

### LP Approximation

The vertex cover problem can be approximated in polynomial time with the LP
Relaxation of the ILP definition of the problem. (each variable can be anywhere
in `[0,1]`).

Typically the integrality gap can be arbitrarily large, but in the vertex cover
problem you can prove a bound on the gap, so the LP relaxation gives you
information (a good approximation) of the underlying ILP.

If you take the LP problem results and then round them (>= .5 => 1, < .5 => 0)
you end up with two facts:

1. You WILL have a vertex cover
2. The vertex cover will be at worst 2x the optimal solution

This works because each edge has two vertices, so for the edge to be included
then at least one of the vertices will be >= .5 in the LP relaxation. The full
proof is more involved so I won't write it all out here.

## Branch and Bound Algorithms

If you get a variable as a fraction, branch rounding down and rounding up and
calculate the implications of both.

Runs exponential in worst case, but can be optimized in many real world
situations.

1. Ignore the integrality constraint, solve LP relaxation
2. If you satisfy the constraint by luck, you are done!
3. If not, branch into two possibilities for (pick one) xi that is fractional
   that should be int
4. `xi <= floor(xi*)`, `xi >= ciel(xi*)`
5. recurse on each side
6. eventually you will get an branch and bound tree where each leaf is a LP
7. if a leaf is unfeasible, forget about it
8. if a leaf is an integer solution, record that solution
9. find the most optimal leaf with integer solution as your final answer
