+++
+++

# Program Verification

Program verification is formally proving a program will always perform
correctly.

A program is made up of a contract:

- pre condition: typically the input type
- post condition: a guaranteed computational result
- must end after a finite number of steps

## Loop invariants

A loop invariant is a predicate that is true before the loop and true after the
loop. Once the loops condition is false and the loop exits, you can use the loop
invariant and the negation of the loop condition to prove that something is
true.

```c
// pre condition: n >= 0
int i = 0;
// loop invariant: i <= n
// loop condition: i <= n
while (i < n) {
    i += 1;
    // loop invariant is still true: i <= n
}
// loop condition is negated: i >= n

// if i <= n and i >= n then i = n ∎
// to do this formally you have to prove every comment and show the loop will
// end after a finite number of iterations
```

Common loop invariants include:

1. `maximum` stores the maximum value up to the i'th element
2. `sorted` is in sorted order up to the i'th element

etc...
