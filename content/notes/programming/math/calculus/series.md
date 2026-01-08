+++
title = "Series"
+++

# Series

A series is just a sum.

## Sigma notation

```
5        <--- stop
󰒠 1/n^2  <--- formula for terms
n=1      <--- start
```

## Geometric Series

In a geometric series, the formula for terms is a number raised to the power
of the variable:

```
(1/2)^n
4(-6/8)^n

abstract:
󰒠 ar^n
```

Geometric series have a cool trick for solving them quickly:

1. Write out the original (partial is fine)
2. Write the same thing but with both sides multiplied by r
3. Subtract line 2 from line 1
4. Solve for the sum

```
sum((1/2)^n, 0, 3000) = (1/2)^0 + (1/2)^1 + ... + (1/2)^3000
- 1/2 sum((1/2)^n, 0, 3000) = (1/2)^1 + (1/2)^2 + ... + (1/2)^3001

things cancel...

1/2 sum((1/2)^n, 0, 3000) = (1/2)^0 - (1/2)^3001

sum((1/2)^n, 0, 3000) = [1 - (1/2)^3001]/(1/2)
```

Some questions will ask you to "find the common ratio of this geometric series".
Just divide each term by the preceding term to get the difference and if it is a
geometric series the difference will always be the same.

## Infinite Series

An infinite series is just a limit where the stop value of the sum is your limit.

This example uses a general version of the geometric series example above:

```
sum((1/2)^n, 0, infinity)

lim[m->inf] [1 - (1/2)^(m+1)]/(1/2)

[1 - 0]/(1/2)

2
```

## Partial sum

A partial sum is the sum of an infinite series up to some x'th element.

S = series inf
S sub 3 = sum of first 3 terms

## Notation

Series are commonly expressed as a function:

```
f(x) = sum(0, inf) x^n/n^2
```

## Divergence and convergence

Does this series diverge or converge?
Use convergence tests to tell.

Convergence is if the sum of each element in the series starts to group around a
single point if graphed. This basically means terms cancel out or the nth terms
get small enough fast enough for convergence to happen.

There are two types of convergence:

- Absolute

Series A converges absolutely if series |A| converges.

- Conditional

If not, the series converges conditionally.

### The n'th term test

If the `lim[n -> inf] a` is not zero, then the sum of `a` from zero to inf
does not converge.

So just take the series and find it's limit. If it results in anything but zero
then it diverges. IMPORTANT: If it does result in zero, that does NOT mean that
it converges! If you get zero you need to try a different method.

### The P test

Some `1/(n^p)` converges if p > 1, and diverges if p <= 1.

```
1/n diverges (p=1)

1/sqrt(n) diverges (p = 1/2)
```

### Limit comparison test

If you have a series you can compare it to a series that you know to tell if it
converges or diverges. Typically the series that you know is found by
simplifying the initial series by pulling out it's significant terms.

```
compared = lim|a/b|
if compared > 0 and compared < inf, then both series a and series b either
converge or diverge.
```

Here is a common example:

```
(n+2)/(n^3+n) basically works out to n/n^3 as n approaches infinity. This step
is a little vague, but can be justified with the next step.

lim[n -> inf] [(n+2)/(n^3+n)]/[n/n^3] = 1

because the limit works out to 1 you know these both behave the same way, and
because the bottom limit converges (via th p test) you know they both converge.
```

The way you solve that resulting fraction over fraction thing is normally
multiplying the top and bottom by the denominator of the bottom, and then
dividing all elements in the top and bottom by the highest common power.

### Ratio Test

Normally used when there is a factorial in the problem.

Take the `lim[n -> inf] |(an + 1)/an|`.

```
< 1 the series converges
> 1 the series diverges
= 1 the ratio test was inconclusive
```

So basically taking the limit of the "next" term divided by the "current" term.

These examples are long to write out, but just use factorial simplification and
group like terms and trust yourself :)

### Root Test

Easier version of the ratio test. This is typically the way if the formula of
the series is all raised to the power of n. The n and 1/n cancel and then you
just solve.

Take the `lim[n -> inf] |(an)^(1/n)|`

```
< 1 the series converges
> 1 the series diverges
= 1 the test was inconclusive
```

### Alternating Series Test

An alternating series is one where the terms change from negative to positive,
flipping back and forth.

```
sum[1 to inf] (-1)^n/n^2

sum[1 to inf] sin(pi/2)
```

In general it is easier for alternating series' to converge because the positive
and negative results will kinda cancel out.

An alternating series converges if the limit of its terms go to zero - basically
the n'th term test but the result of zero _does_ mean that it converges.

It can be more clear if you pull separate the expression into two fractions:

```
(-1)^n * 1/n^2 (as close as you can get to this)

does 1/n^2 get smaller every term?

does this whole expression go to zero with the limit of infinity?

then it converges
```

### Integral Test

This one does not show up that often.

Say you have a function f(x) that meets this criteria:

1. positive
2. decreasing
3. continuous

then, you can be certain that sum[j to inf] f(n) converges whenever ∫f(x)
converges. It is not true that they equal the same value.

Anything that you can do with the p-test, you can do with an integral test, but
you can also solve problems that cannot be solved with the p test.

## Power Series

A power series looks like this:

```
sum(0, inf) anx^2
```

### What is the domain of a power series?

The domain of a power series is the range of values of x for which the series
converges. So for what values of x is the function defined.

You typically use the ratio test or the root test like usual - but the x term
will end up in your answer.

Make sure to include the absolute value in the ratio and root test setup.

Then you compare your answer to one, like on a number line, so you can see the
domain of the function.

The endpoints of your domain will be uncertain because they might = exactly 1.
To test the endpoints you just plug in the endpoint value and check if they
converge. Checking if they converge will be some other test from this section.

These problems can be long but the are systemic.

```
Example skipping the actual math just the problem outline: ratio test ends with |x|.

Everything between -1 and 1 is defined. What about the endpoints?

1 converges by the p test

-1 converges by the alternating series test

domain = [-1, 1]
```

If you end up with something like `|x - 2| < 1/e` you know the domain is
`2-1/e, 2+1/e` because the distance between x and 2 will be at most `1/e`.

##### So full process:

1. Ratio or root test
2. Compare result to 1 - including absolute value. Be super careful about `|x + 2| < 1`
3. Plug in and do separate convergence test of endpoints

##### Special cases

1. Your fist answer is guaranteed to be zero no matter what x is

Then the series converges everywhere - so your domain is all real numbers.

2. The domain is exactly one point

Just look for this and catch it - it will just look like it diverges but notice
if x is exactly -5 the result is 0

```
|n(x + 5)|
```

3. The "center" of your domain (not the radius of convergence) makes the whole
   thing zero

You can notice right off the bat that the center is a specific value because it
zeros out the function. This just helps you check your answer.
