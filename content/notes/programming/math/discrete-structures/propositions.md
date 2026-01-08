+++
title = "Propositional Logic"
+++

# Propositional Logic

## Building blocks

### Proposition

A proposition is a statement that is either true or false.

The proposition's truth value is a value indicating if the proposition is
actually true or false.

### Compound Proposition

A compound proposition is multiple propositions connected by a logical operator.

∧ - and (conjunction)
∨ - or (disjunction)

example: (true ∧ false) = false

In the absence of parentheses negation is applied first, then conjunction, then disjunction.

A compound proposition is a _tautology_ if it is always true regardless of the
truth value of the propositions: `p ∨ ¬p`.

A compound proposition is a _contradiction_ if it is always false regardless of the
truth value of the propositions: `p ∧ ¬p`.

A compound proposition is a _contingency_ if it is neither a tautology nor a
contradiction.

Two propositions are _logically equivalent_ if they have the same truth value
regardless of the truth value of the propositions: `p ≡ ¬¬p`. If you have two
logically equivalent propositions you can substitute one for the other inside
larger logical structures.

##### A Note On Disjunctions

Typically "or" in English is used to mean "exclusive or" (denoted with ⊕):

false or true = true
true or true = false

But the disjuction operator is an inclusive or:

false or true = true
true or true = true

### Negation

The ¬ operator negates, or reverses the truth value, of a proposition.

¬(true ∧ false) = true

## Conditional Statements

### Conditional Proposition

A conditional statement uses the -> symbol to say "if p then q" or "p is
sufficient for q" or "q only if p"

`p -> q`

The example above is called a conditional proposition and claims that if
hypothesis p then conclusion q will be true. The hypothesis does not _have_ to
be true for the whole proposition to be true. `false -> true` is still a true
proposition. Also `false -> false` is still a true proposition.

There are closely related conditional statements as well:

- Converse: q -> p
- Contrapositive: ¬q -> ¬p (this is logically equivalent to the original
  proposition)
- Inverse: ¬p -> ¬q (this is the contrapositive of the converse)

### Biconditional Operation

"p if and only if q" is expressed with the biconditional operation and is denoted `p <-> q`.

Sometime people write "iff" to say "if and only if".

## Truth Tables

For n variables in a proposition there are 2^n rows in a truth table

Also some people use binary to show true/false

```
p | q | p ∧ q
1   1   1
1   0   0
0   1   0
0   0   0
```

## Laws

```
idempotent laws
p and p == p
p or p == p

associative laws
(p or q) or r == p or (q or r)
(p and q) and r == p and (q and r)

commutative laws
p or q == q or p
p and q == q and p

distributive laws
p or (q and r) == (p or q) and (p or r)
p and (q or r) == (p and q) or (p and r)

identity laws
p or false == p
p and true == p

domination laws
p and false == false
p or true == true

double negation law
not not p == p

complement laws
p and not p == false
not true == false
p or not p == true
not false == true

De Morgan's laws
not (p or q) == not p and not q
not (p and q) == not p or not q

absorption laws
p or (p and q) == p
p and (p or q) == p

conditional identities
p -> q == not p or q
p <-> q == (p -> q) and (q -> p)
```

## Reducing Propositions

You can use the laws above to prove two propositions are logically equivalent or
to reduce and expand propositions.

```
(p ∨ w) ∧ (p ∨ ¬w)
== p ∨ (w ∧ ¬w)    # via distributive law
== p ∨ false       # via complement law
== p               # via identity law
```
