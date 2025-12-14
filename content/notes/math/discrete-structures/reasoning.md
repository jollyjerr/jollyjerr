+++
+++

# Logical reasoning

## Arguments

An argument is made up of propositions. A series of propositions called
hypotheses lead up to a final proposition called the conclusion.

A valid argument is a guarantee that the conclusion is true whenever all
of the hypotheses are true.

The form of an argument can be written out like:

```
p1
p2
p3
...
__
∴ c (the tripple dot means "therefore")
```

The order of the propositions does not matter.

### Truth Value

The truth value of an argument is determined by it's form. So even this
argument:

```
1+1 != 3
if 1+1 = 3, then dogs can fly
_____________________
∴ dogs cannot fly
```

even though it seems valid, this argument is false because it's form is invalid

```
¬p
p -> q
______
∴ q
```

this form is invalid if p = false and q = true

## Rules of inference with propositions

These arguments are known to be valid, and can be used to prove other arguments
as valid:

```
modus ponens
p
p -> q
∴ q

modes tollens
¬q
p -> q
∴ ¬p

addition
p
∴ p ∨ q

simplification
p ∧ q
∴ p

conjunction
p
q
∴ p ∧ q

hypothetical syllogism
p -> q
q -> r
∴ p -> r

disjunctive syllogism
p ∨ q
¬p
∴ q

resolution
p ∨ q
¬p ∨ r
∴ q ∨ r
```

## Inference

When using arguments in proofs, you should label the thing you are doing on each
line:

```
3 is an integer. Element definition.
c is an arbitrary integer above zero. Hypothesis.
t Hypothisis
t ^ c Conjunction of lines 2 and 3
```

### Inference for quantified statements

```
Universal Instantiation
c is an element (arbitrary or particular)
∀x P(x)
∴ P(c)

Universal Generalization
c is an arbitrary element
P(c)
∴ ∀x P(x)

Existential Instantiation
∃x P(x)
∴ (c is a particular element) ∧ P(c)

Existential Generalization
c is an element (arbitrary or particular)
P(c)
∴ ∃x P(x)
```

When using existential instantiation in proofs make sure to use a new particular
for each hypothesis because one hypothesis does not imply the other.
