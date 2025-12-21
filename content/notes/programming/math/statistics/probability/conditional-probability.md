+++
+++

# Conditional Probability

Notation `P(A|B)`, the probability of event A given that B has occurred.

Draw a ven diagram - find what outcomes in B are also in A. So you reduce the
probability of A to the probability of A ∩ B.

```
P(A∩B)/P(B), P(B) > 0
```

Terms

```
P(A)   prior prob of A
P(A|B) posterior prob of A
```

## Multiplication rule

```
P(A∩B) = P(B)P(A|B)
```

## Bays Theorem

Let `P(B) > 0`. Then,

```
P(A|B) = (P(B|A)P(A))/(P(B))
```

## Law of total probability

Given two events A and B from the same sample space,

```
B = (B ∩ A) ∪ (B ∩ Acomplement)

P(B)
= P(B ∩ A) + P(B∩Acomplement)
= P(B|A)P(A) + P(B|Acomplement)P(Acomplement)
```

This can be extended to any _n_ sets.

```
A1, A2,...,An where A1 ∩ ... ∩ An = {} and sum of all A's is S.

Then

P(B) = sum(1, n) P(B|Ak)P(Ak)
```

## Other stuff

```
P(A union B) = P(A) + P(B) - P(A intersect B)
```
