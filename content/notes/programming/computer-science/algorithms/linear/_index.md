+++
title = "Linear Programming"
+++

# Linear Programming

A linear program is a mathematical optimization process subject to some
constraints that all must be true.

The objective function must be linear, and the M constraints also must be in the
form `something linear (<= | >= | =) constant`. There are extensions that add
strict inequalities but normal LP does not.

The word program is referring to "scheduling", where the field was developed.

## Trivial example

```
decision variables: x1, x2, x3

objective: max or min some linear function like x1 + x2 - x3

constraints: [
    0 <= x1, x2, x3 <= 1
] of length m
```
