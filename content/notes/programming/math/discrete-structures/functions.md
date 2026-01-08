+++
title = "Functions"
+++

# Functions

## Definitions

Function: Let X and Y be nonempty sets. A function from X to Y is an assignment
of exactly one element of Y to each element of X.

Domain: the set of all arguments

Target: set of all output values

Range: target values that the function actually maps to

A mapping between sets is not a function if an element in the domain does not
have a mapping or if an element in the domain has more than one mapping.

## Notation

f: X -> Y

f(x) = y

## Specification

Formula: f(x) = 1 + x

Explicit Specification: {a: 2, b: 68, c: 421}

## Types of functions

### Injective

Also known as "one-to-one" functions.
A function is injective if all inputs map to different outputs for all possible
input values.

If this is true, the size of the domain will be less than or equal to the size
of the target: |D| <= |T|

### Surjective

Also known as "onto" functions. The range == the target, so for every value y in Y
there is some value x in X that maps to y.

If this is true, the size of the domain will be greater than or equal to the
size of the target: |D| >= |T|

### Bijection

A function is a bijection function if it is _both_ injective and surjective.

Bijection is sometimes called "one-to-one correspondence"

If this is true, the size of the domain and the target will be the same

### Inverse

An inverse function "undoes" the action of another function.

Let f: X -> Y be a bijection. The inverse of f is the function f^-1: Y -> X that
assigns to an element y in Y the element x in X such that f(x) = y, i.e., f^-1(y) = x when f(x) = y

Therefore: f^-1 = {(y,x): (x,y) ∈ f}

Only Bijection functions can have an inverse.

### Composition

If you have f: X -> Y and g: Y -> Z the composition of f and g is the function
(g⚬f): X -> Z such that (g⚬f)(x) = g(f(x)) for all x ∈ X

### Identity function

Maps a set to itself. f: X -> X, and f(x) = x

A function composed with it's inverse results in the identity function:

```
If f(a) = b and f^-1(b) = a
then (f^-1⚬f)(a) = a
because f^-1(f(a)) == f^-1(b)
```

### Strictly increasing

if x < x2 then f(x) < f(x2)

### Strictly decreasing

if x < x2 then f(x) > f(x2)

## Common functions

Floor: ⌊2.9⌋ = 2
Ceiling: ⌈2.1⌉ = 3
