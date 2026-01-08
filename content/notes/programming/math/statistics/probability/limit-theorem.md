+++
title = "Limit Theorems"
+++

# Limit Theorems

Recall: for a random variable X, we need either the probability mass function
`p(k) = P(X = k)` or a density function `f(x)` to compute a probability or to
find:

```
mue x = E(X) = sum(k) kP(X = k) or ∫(-inf, inf) xf(x) dx

(standard deviation)^2 = V(X) = E[(X - mue x)^2]
= sum(k)(k - mue x)^2 * P(X = k)
or ∫(-inf to inf)(x - mue x)^2 * f(x) dx
```

What if we don't know how a random variable is distributed? What if we don't
know the mean or the variance?

Make statistical inferences about the true mean and true variance of a
population by using sample datasets.

### iid

X1, X2, ..., Xn are a random sample of size n if each variable is independent
and each variable has the same distribution.

We say these Xi's are _iid_, independent and identically distributed.

You can use estimators to summarize an iid sample. Any estimator, like X bar, is
a random variable since it is based on a random sample.

This means that X bar has a distribution of it's own, which is referred to as
the sampling distribution of the sample mean. This sampling distribution depends
on the sample size n, the population distribution of the Xi, and the method of
sampling.

An estimator of mue is denoted by Xbar and Xbar = `1/n * sum(k=1 to n)(X sub k)`

## Law of Large Numbers

In most conditions, if X1,X2,...,Xn is a random sample with E(Xk) = mue, then
Xbar = `1/n * sum(k=1 to n)(X sub k)` converges to mue in the limit as n goes to
infinity.

Given a random sample X1,X2,...,Xn with V(Xi) = o^2

```
V(Xbar) = (o^2)/n
```

Proposition: If each Xi of an iid `~ N(mue, o^2)` then the distribution
of X bar is `N(mue, (o^2)/n)`.

## Central

When the population distribution is non-normal, averaging produces a
distribution that is more bell-shaped than the one being sampled. A reasonable
conjecture is that if n is large, a suitable normal curve will approximate the
actual distribution of the sample mean.

Definition: Let X1,X2,...,Xn be a random sample with `E(X sub i) = mue` and
`V(X sub i) = o^2`. If n is sufficiently large, X bar has approximately a normal
distribution with mean mue and variance `o^2/n`.

Notation: `X bar ≅ N(mue, o^2/n)`

The larger the value of n, the better the approximation. Typical rule of thumb
is `n >= 30`.
