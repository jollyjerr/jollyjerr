+++
title = "Predicates and Quantifiers"
+++

# Predicates and quantifiers

## Predicates

A logical statement whose truth value is a function of one or more variables is called a predicate.

For example: the expression P(x) read "p of x" where P(x): "x is an odd number".

"x" is called the free variable in this predicate.

P(5) would be a proposition because it's truth value is known.

Predicates have a domain that is normally clear from the context but can be
provided if not clear.

## Quantifiers

You can transform a predicate into a proposition by using a quantifier to bind
the variable. For example:

### Universal

```
P(x) read "p of x" is a predicate

∀x P(x) read "for all x, p of x" is a proposition asserting P(x) is true for all
values in it's domain.
```

In the example we used the universal quantifier to create a universally
quantified statement.

Example with proof:

```
Proof that ∀x ((1/(x+1)) < 1) for the domain all positive integers:

0 < x because we are working with all positive integers

1 < x+1 add one to both sides

1/(x+1) < (x+1)/(x+1) divide both sides by x+1

1/(x+1) < 1

QED
```

#### Counterexamples

You can prove a universally quantified statement false by providing a single
counter example. However, if a universally quantified statement has the empty
set for it's domain, it is always true.

### Existential

The logical statement ∃x P(x) is read "There exists an x, such that P(x)".

This is an existentially qualified statement. A single example proves it is true
but proving it is false requires proving it is false for the entire domain.

```
Proof that ∃x (x + 1 < x) is false:

x + 1 < x

1 < 0 subtract x from the inequality

1 < 0 is a contradiction

QED
```

## Quantified statements

Logical statements constructed out of quantified predicates are called
quantified statements.

```
∃x (P(x) -> ¬Q(x))
```

The quantifiers are applied before the logical operations (∧, ∨, ->, and <->).

∀x P(x) ∧ Q(x) is equivalent to (∀x P(x)) ∧ Q(x) as opposed to ∀x (P(x) ∧ Q(x)).

Keep in mind, if there are any free variables in a quantified statement, it is
not a proposition but is a predicate with an unknown truth value.

### Nested quantifiers

A statement with multiple binding quantifiers before it is called a nested
quantifier statement: `∃x∀y T(x,y,z)` - x and y are bound, z is free

A common nested quantifier statement is "everything but itself"

`∀x ∀y ((x ≠ y) → M(x, y))`

Or "one other thing / someone else's"

`∃x ∃y ((x ≠ y) ∧ M(x, y))`

### De Morgan's Law

Universally qualified statements: `¬∀x P(x) = ∃x ¬P(x)`

Existentially qualified statements: `¬∃x P(x) = ∀x ¬P(x)`

Nested qualifiers:

```
¬∀x∀y P(x, y) ≡ ∃x∃y ¬P(x, y)
¬∀x∃y P(x, y) ≡ ∃x∀y ¬P(x, y)
¬∃x∀y P(x, y) ≡ ∀x∃y ¬P(x, y)
¬∃x∃y P(x, y) ≡ ∀x∀y ¬P(x, y)
```
