+++
title = "Axioms of Probability"
+++

# Axioms of probability

## Axiom 1

For any event A, `0 <= P(A) <= 1`

## Axiom 2

`P(S) = 1`

Something in the sample space will occur.

## Axiom 3

If A1, A2, ..., An are a collection of n mutually exclusive events, then:

```
P(union of all events) = Sum(1, n)P(Ak)
```

In other words, the sum of all probabilities of these events is exactly equal to
the probability of the event: union of all events.

More generally, if A1, A2, ... is an infinite collection of mutually exclusive
events, then the probability of the union of those events is the same as the sum
of all probabilities of each event.

## Consequences

Ac = "A complement"

```
A ∩ Ac = {} and A ∪ Ac = S, so
1 = P(S) = P(A ∪ Ac) = P(A) + P(Ac) which implies
P(Ac) = 1 - P(A)

If A ∩ B = {}, then P(A ∩ B) = 0 = P({})

P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
```

You can use these to calculate many probabilities.
