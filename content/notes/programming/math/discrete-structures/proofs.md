+++
+++

# Proofs

A theorem is a statement that can be proven to be true, and a proof is the
formal process of showing that it is true via a series of steps consisting of
axioms (assumed truth), proven theorems, and logic.

Writing proofs is formally done like:

```
Theorem:
Every positive integer is less than
or equal to its square.

Proof:
Let x be an integer, where  x > 0

Since x > 0, we can multiply both
sides of the inequality by x to get: x*x >= 1x

Simplify the expression we get: x^2 >= x ∎
```

## Language

Proofs use language to give the purpose of each line:

let/suppose: new variable
thus/therefore: it follows from the last point
since: restate a fact or assumption
we will prove/show: purpose
by definition
by assumption
in other words
gives/yields

## Universal Proofs

### Proof by Exhaustion

If you literally walk through every element of a domain and prove a statement is
true for each element, you have proven the universally qualified statement as
true via exhaustion.

### Universal Generalization

Name an arbitrary object of a theorem's domain and prove the theorem for that
object.

The example at the top of this document is a universal generalization.

Remember that you only need a single counterexample to prove universally
quantified statements as false. A counterexample needs to satisfy all the
hypothesis but contradict the conclusion.

## Existential Proofs

To disprove an existential statement you have to prove that for every element
the statement is false.

### Constructive proof of existence

Give a specific example of an element that has the required properties.

### Nonconstructive proof of existence

Commonly done by showing that assuming no element exists leads to a
contradiction.

## Direct Proofs

p -> c

p is assumed to be true and the conclusion is proven to be true as a direct
result of the proposition.

example:

```
Theorem: The difference between two even integers is even.

Let x and y be even integers. We will prove that x-y is even.

Since x is even, there is an integer k such that x = 2k.
Since y is even, there is an integer j such that y = 2j.

x-y = 2k - 2j

2k - 2j = 2(k-j)

Since k and j are integers, k-j is also an integer.

Since x-y is equal to 2m, where m = k-j which is an integer, x-y is even.
∎
```

## Contrapositive

To prove p -> q show that ¬q -> ¬p

Do this when ¬q is a more useful assumption than p.

If you have to negate and/or statements you can remember de morgan's laws:

```
If x < 0 and xy > 0, then y < 0.

contrapositive:

assume y >= 0, show x >= 0 or xy <= 0
```

## Contradiction

A proof by contradiction is an indirect proof where you assume the theorem is
false (¬t) and prove that a contradiction arises as a result of that assumption
(r ∧ ¬r).

## Proof by cases

For a universal statement, you can break the domain into different groups and
prove the theorem is true for a member of each group.

```
For every integer x, x2 - x is an even integer.

Case 1: x is even
Case 2: x is odd
```

Also you can sometimes break into one case without loss of generality:

```
Theorem: For any two integers x and y, if x is even or y is even, then xy is even.

Proof:
Without loss of generality, assume that x is even. Then x = 2k for some integer k. Plugging in the expression 2k for x in xy gives xy = 2ky = 2(ky). Since k and y are integers, ky is also an integer. Since xy is equal to two times an integer, xy is even.  ■
```

## Induction

Induction is a proof technique especially helpful for proving statements about
elements in a [sequence](./sequence.md). It can also be used when proving facts
about lists of other mathematical objects like sets - even if those lists are
infinitely long.

```
Principle of mathematical induction:

Let S(n) be a statement parameterized by a positive integer n. Then S(n) is true for all positive integers n, if:

1. S(1) is true (the base case).
2. For all k ∈ Z+, S(k) implies S(k+1) (the inductive step).
```

Proofs using induction follow this general outline:

```
Theorem:
Thing you will prove, including the inductive hypothesis

Proof:
Induction on n (n is the variable you are tracking)

Base:
n = 1

...show what happens

Inductive step:

...assume the inductive hypothesis (base case generalized to some k)

...show n implies n+1 using the inductive hypothesis
```

Here is an example of an inductive proof:

```
Theorem: For every positive integer n, 3 evenly divides 2^(2n) - 1.

Proof: By induction on n

Base Case: n = 1

2^(2*1) - 1 = 4 - 1 = 3. Since 3 evenly divides 3, the theorem holds for the
case n = 1.

Inductive step:

Suppose that for positive integer k, 3 evenly divides 2^2k - 1. Then we will
show that 3 evenly divides 2^2(k+1) - 1.

By the inductive hypothesis 3 evenly divides 2^2k - 1, which means that = 3m for
some integer m. By adding 1 to both sides of the equation, we get 2^2k = 3m + 1.

We must show 2^2(k+1) - 1 can be expressed as three times an integer:

2^2(k+1) - 1 = 2^(2k+2) - 1
= 4 * 2^(2k) - 1
= 4(3m + 1) - 1 (subbing in our reworked inductive hypothesis)
= 3 * 4m + 4 - 1
= 3(4m + 1)

Scince m is an integer, 3(4m + 1) is 3 multiplied by an integer. Therefore
2^(2k) - 1 is divisible by 3. ∎
```

### Strong Induction

In normal (weak) induction, the inductive hypothesis is just S(k), but in strong
induction we assume the fact to be proven holds for every value up to k as well.
This is needed for proving things like the Fibonacci sequence because you need
to refer to deeper values than just k-1.

You may need multiple base cases to establish the truth value on the sequence
before you generalize to the inductive hypothesis.

```
For all k ≥ 6, if P(3), P(4),.....,P(k) are all true, then P(k+1) is true.
Base case: show P(3), P(4), P(5), and P(6).
```
