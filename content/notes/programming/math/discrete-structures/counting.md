+++
+++

# Counting

In discrete mathematics the goal of counting is to count the number of elements
in (or the cardinality of) a finite set given a description of the set.

## Product rule

To count sequences you use the product rule. How many unique combinations of
elements? Multiply them:

```
A, B, C be finite sets, then
|A| * |B| * |C|
```

This can be used when limiting string characters and other similar stuff, so if
there are 26^3 3 letter words, there are `26^2 * 2` three letter words that begin
with a or b.

The _generalized counting rule_ considers the impact of selecting an item on the
cardinality of the next choice. So if you have 20 runners in a race and want to
see how many podium outcomes exist, it is not 20 _ 20 _ 20 but 20 _ 19 _ 18.

## Sum rule

When only one element is selected, not combinations of elements, you just add
the cardinality of each set to get the number of outcomes.

|A ∪ C| + |B|

Sum and product rule example:

```
Each character in a password is either a digit or lowercase letter. How many
valid passwords are there if the length can either be 10 or 8 and every password
must start with a digit?

(36^9 * 10) + (36^7 * 10)
10(36^9 + 36^7)
```

## Bijection rule

If there is a [bijection](./functions.md) from one set to another then the sets
have the same cardinality. So if you can show there is a bijection then counting
an easy set can find the count to a difficult set.

This get's expanded to the "k-to-1" rule where one set will be the same
cardinality of another set multiplied by a constant factor k. Ex: each person
has two shoes. Then |B| = |A|/k.

## Counting Permutations

A permutation is a sequence that contains each element of a finite set exactly
once.

The number of permutations of a set with n elements is n!.

An r-permutation is a sequence of r items with no reputations all taken from the
same set.

There are n!/(n-r)! r-permutations to a set with n elements. A simplified form
of this counting procedure is show in code below.

```js
function p(options, length, depth = 0, result = 1) {
  if (depth === length) return result;
  return p(options - 1, length, depth + 1, result * options);
}
```

```
A red, blue, and green die are thrown. Each die has six possible outcomes. How many outcomes are possible in which the three dice all show different numbers?
6 * 5 * 4 = 120
```

## Counting subsets

If order does not matter, only the number of selected items, then you do not
count permutations and rather count subsets or "r-combinations".

Basically, tuples are permutations and sets are subsets.

You count them using the k-to-1 rule:

`r-permutations/r!` where r is the subset size

```
{1,2,3}

r-permutations: 6 (3*2*1)
r-combinations: 3 (6/2!)
```

Sometimes you see "n-choose-r" notation to mean the same thing:

```
(n r) = n!/(r!(n-r)!)
```

Where n is the number of elements and r is the subset size.

```js
function choose(n, r) {
  const factorial = (a) => {
    let result = 1;
    do {
      result *= a;
      a--;
    } while (a > 1);
    return result;
  };

  return factorial(n) / (factorial(r) * factorial(n - r));
}
```

Interesting bijection: n choose r == n choose (n-r) for non negative n

## Permutations with repetition

If you are counting permutations of a set that has repeated items, you need to
count r-subsets for each item and then put them together using the product rule.

For example

```
How many ways to scramble "mississippi"?

p's * i's * s's * m's

(11 choose 2) * (9 choose 4) * (5 choose 4) * (1 choose 1)

11!/(2!9!) * 9!/(4!5!) * 5!/(4!1!) * 1!/(1!0!) = 11!/(2!4!4!1!)

notice it simplified to places!/count!count!count!count! - this is always true
```

## Counting by complement

Count the number of items in a set that do not have a certain property and then
you also know the number of items in the set that do have that property.

More challenging example:

```
A shop has 7 different shirts and 5 different jeans.
How many ways are there to select two items so that at least one jeans is chosen?

Answer: 45

total choices: 12 choose 2 = 66
choices with no jeans: 7 choose 2 = 21

66 - 21 = 45
```

## The Inclusion-exclusion Principle

A technique for determining the cardinality of the union of sets that uses the cardinality
of each individual set as well as the cardinality of their intersections.

The point is to prevent items in both sets from being counted twice.

```
Two Sets:
|A ∪ B| = |A| + |B| - |A ∩ B|

Three Sets:
|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |B ∩ C| - |A ∩ C| + |A ∩ B ∩ C|

n Sets:
First, add in the size of each subset individually.
Then consider each pair of sets and subtract the size of the intersection of each pair.
Then consider every set of three sets and add in the three-way intersection of the triplets of sets.
Continue with the pattern until the final term which is the intersection of all the sets.
If the number of sets is even, the last term is subtracted.
If the number of sets is odd, the last term is added.

n set example:
Suppose you are using the inclusion-exclusion principle to compute the number of elements in the union of four sets.
Each set has 15 elements.
The pair-wise intersections have 5 elements each.
The three-way intersections have 2 elements each.
There is only one element in the intersection of all four sets.
What is the size of the union?

(15 * 4) - (choose(4, 2) * 5) + (choose(4, 3) * 2) - 1 = 37
```

If sets are mutually disjoint, meaning they share no elements, then you just add
the cardinality of all the sets. So it is just the sum rule.

## The pigeonhole principle

If n+1 elements are placed in n boxes, then one box has 2 elements.

also,

If a function f has a domain of size at least n+1 and a target of size at most n, where n is
a positive integer, then there are two elements in the domain that map to the same element
in the target.

Useful to prove that you are forced to have duplicates or forced into having
things close together:

```
37 points are placed in a 6 mile by 6 mile square area. There must be 2 points that are within
sqrt(2) miles of each other.

You have 36 1x1 mile squares and 37 items, so two must be in the same square.
```
