+++
+++

# Counting

See also [counting in mathematics](../../discrete-structures/counting.md).

If a sample space S has N single events, and if each of these events is equally
likely to occur, then we need only count the number of events to find the
probability.

For example, if S = {E1, E2, ..., En} and if P(Ek) = 1 / N for k = 1,2,...,N and
if A is an event in S, then P(A) = number of simple events in A / N.

Example

```
Roll a six-sided dice twice.

S = {(i, j) | i, j ∈ {1,2,3,4,5,6}} so |S| = 36

Each outcome in S is equally likely.

P(rolling a 1 on the first roll) = P({11,12,13,14,15,16}) = 1/6

P(sum of two rolls is 8) = P({26,35,44,53,62}) = 5/36

P(second roll is two more than first roll) = P({13,24,35,46}) = 1/9 (4/36)
```

Another question you see a lot is a test has 20 5 answer questions, it can be
completed 5^20 ways.

## Permutations

Any ordered sequence of k objects taken from a set of n distinct objects is
called a permutation of size k. Notation: Pk,n

Suppose an organization has 60 members. One person is selected at random to be
the president, another person is selected as the vice-president, and a third is
selected as the treasurer. How many ways can this be done?

`P3,60 = 60 * 59 * 58 = 60!/57!`

|Sp| = 60!/57!

## Combinations

Given n distinct objects, any unordered subset of size k of the objects is
called a combination. Notation: Ck,n

Example: Suppose we have 60 people and want to choose a 3 person team (order is
not important). How many combinations are possible?

Take each group of permutations and group them into combinations (same people
different order are all grouped together into a singe combination.)

|Sc| = 60!/57!3!

Notation: (n choose k) = n!/k!(n-k)! this represents the number of combinations
of size k chosen from n distinct objects.

### Example with probability

Suppose we have the same 60 people, 35 are female and 25 are male. We need to
select a committee of 11 people.

(60 choose 11) ways the committee can be formed.

What is the probability that a randomly selected committee will contain at least
5 men and at least 5 women? (Assume each committee is equally likely.)

```
P(at least 5m and at least 5w on committee)
= P(5m + 6w) + P(6m + 5w)
= [(25 choose 5)(35 choose 6)/(60 choose 11)] + [(25 choose 6)(35 choose 5)/(60
choose 11)]
```
