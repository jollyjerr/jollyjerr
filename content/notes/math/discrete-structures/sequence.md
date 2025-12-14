+++
+++

# Sequence

A sequence is basically a general list type mathematical tool that can be
indexed. It's technically a function where the domain is a consecutive set of
integers.

```
g: {1,2,3,4} -> R

g(1) = 3.98, g(2) = 4.0 etc...
```

Sequences can have positive or negative indexes.

They can be infinite or finite

For a sequence to be considered increasing or decreasing, every indices must be
larger or smaller than the previous one, respectfully.

## Formula

Sequences can be defined as a formula:

```
d(k) = 2^k where k = 0,1,2,3...
```

## Geometric sequence

A sequence of real numbers where each element is obtained by multiplying the
previous element by some common ratio.

```
a, ar, ar^2, ar^3, ar^4,...,ar^n
```

Compound interest is a geometric sequence

```
base_amount(1+rate)^years
```

## Arithmetic sequence

A sequence of real numbers where each element is obtained by adding a constant
to the previous element.

```
a, a+d, a+2d,..., a+nd
```

## Summation notation

```
t (upper limit)
∑ a[i]              = a[s] + a[s + 1] + a[s + 2] + ... + a[t]
i = s (lower limit)
```

Sums can also sometimes be expressed without summation notation, this is called
closed form:

```
Sum of terms in a geometric sequence for any real number r != 1 and any integer
n >= 1:

n-1
∑ (a*r^k) = [a(r^n - 1)]/(r - 1)
k=0
```

## Recurrence relation

When you cannot create a general formula for a sequence and need to refer to the
previous terms of the sequence

example: fibonacci sequence

```
f[0] = 0
f[1] = 1
f[n] = f[n-1] + f[n-2] for n >= 2
```

This is an example of a dynamical system where state changes over time and a
discrete time dynamical system where time is divided into intervals and the
state of the system is fixed during each interval and is a function of the
previous time interval.

## Limits

The limit of an infinite sequence is just where the sequence approaches as you
use sequence elements close to the limit. Just think of it as a function of n.
If you do not see a clear single grouping, the limit is not defined.
