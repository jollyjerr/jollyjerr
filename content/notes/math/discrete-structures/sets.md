+++
+++

# Sets

All of mathematics can be described with sets. A **set** is a collection of **elements**. Sets can be infinite or finite.

Sets are equal if they contain the same elements - even if they are listed in a different order.

`A = {1,2,3}`

2 ∈ A (read as 2 is in A)

Some sets are special and get reserved symbols:

- N = All natural numbers
- Z = All integers
- R = All real numbers
- ∅ = The empty set
- Q = The rational numbers `Q = { x: x = m/n, where m,n ∈ Z and n ≠ 0 }`

Sets can have anything as elements (numbers, strings, other sets, functions), or nothing, which makes them equal to the _empty set_ or ∅.

## Conventions

Lowercase letters represent elements in the set, while uppercase letters denote
the set itself:

```
a ∈ A
```

## Notation

#### Roster notation: write out all members of the set.

```
A = {True, False}
```

Ellipsis can be used if the pattern is clear `{1,3,5,7,...,99}`

#### Set Builder Notation

**Set-builder notation** is used to describe sets that are hard to write out in full. `X = {expression:rule}` Example:

```
E={2n:n∈Z}

Read: "E is the set of all things of form 2n, such that n is an element of Z"

Translation: E is the set of all n in (all integers) where n is even
```

## Cardinality

Number of distinct elements in a set, denoted with ||. Ex `|{1,8}| = 2`

## Subsets

A ⊆ B if and only if every element in A is also in B ("is a subset of")

A ⊂ if and only if every element in A is also in B AND B has more elements than
A ("is a proper subset of")

A = B if both sets have all the same elements

The empty set is a subset of any set

## Power sets

The power set of a set is the set of all subsets.

```
S = {1,2,3}
P(S) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}
```

If A is a set of carnality n, then |P(A)| = 2^n

## Set operations

- Intersection

A set containing the elements that are in both sets

{1,2} ∩ {2,3} = {2}

Intersections can also be indexed, so if you have j sets you can intersect each
set up to a jth set in a loop. The notation looks like the sum operator but with
the intersection symbol.

- Union

A set containing all elements from both sets

{1,2,3} ∪ {2,3,4} = {1,2,3,4}

Unions can also be indexed, so if you have j sets you can union each
set up to a jth set in a loop. The notation looks like the sum operator but with
the unionion symbol.

- Difference

Elements in first set that are not in the second one (note this is ordered!)

{1,2,3} - {2,3,4} = {1}

- Symmetric difference

All elements that are in one or the other element but not both
A ⊕ B = (A - B) ∪ (B - A)

{1,2,3} ⊕ {2,3,4} = {1,4}

- Set complement

Difference between the universal set (scoped to some domain normally) and another set

U - A

Can also be notated with a horizontal line above the set name.

## The Cartesian Product

It is possible to multiply two [sets](./sets.md) and produce a new set, the **Cartesian Product**

A cartesian product of two sets, A and B, is another set, denoted as A x B,
and defined as `A x B = {(a,b): a ∈ A, b ∈ B}`

Notice the [tuple](./tuple.md) in this definition

You can also have ordered triples `(x,y,z)` etc...

A _Cartesian plane_ is just the cartesian product R x R. `{(x,y): x,y ∈ R}`

Expanding on this, you can have a **Cartesian power** like `A^n`

```
A^n = A * A * A ... * A = {(x1,x2,...,xn): x1,x2,...,xn ∈ A}
```

The cardinality of a cartesian product is the product of the cardinality of each set

If A is a set of symbols or strings it is common to write the cartesian product
without punctuation:

```
A = {0,1}, A^2 = {00, 01, 10, 11}
```

## Logical operators

Sets follow the same laws as [propositions](./propositions.md) but with set symbols:

¬ == ⎻ (complement)
∧ == ∩
∨ == ∪

## Binary Relations

A binary relation is a subset of the cartesian product of two sets:

```
p = {Sue, Harry, Sam}
f = {file1, file2, file3, file4}

pAf if person p has access to file f

A = {(Sam, file2), (Harry, file4)}
```

These can also be expressed as a boolean matrix with the sets as the two axis.

The fact that (a,b) in R is written as aRb.

You can represent a binary relation as a matrix or graph. It's really just a
directed graph.

### Properties of binary relations

Reflexive: A Binary relation is _reflexive_ if for every x in A, xRx. (self loops on every
node)

Anti Reflexive: A binary relation is anti-reflexive if no x in A, xRx. (no self loops on any
nodes)

Transitive: If for every three nodes you can get to each node in two hops and
one hop. Rock paper scissors is not transitive

Symmetric: Loops between every pair of nodes

Anti symmetric: No pair of nodes is symmetric

## Composite Relations

The composite of two binary relations is a composite relation.

```
R = A X B
S = B X C

S ⚬ R = {(a, c) : ∃b such that aRb and bSc}
```

The result is basically taking every two step jump across sets and making it a
direct connection.

You can recursively compute composite relations on a graph on itself but I don't
super get it yet need to fix up these notes.
