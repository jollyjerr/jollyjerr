+++
title = "Sample Distributions"
+++

# Sample Distributions

If you take many random samples `X1, X2, X3, ..., Xn` and create a histogram,
you end up with a sample distribution.

All variables are assumed to be independent and identically distributed (iid).
Random sample = iid.

```
Estimator:
theta-hat = a random variable

If X is an estimator and E[X] = mue then X is an unbiased estimator.

Estimate:
theta-hat = an observation or number x
```

The expected value of a sample mean is the same as the expected value of the
distribution itself (one random variable) because expected value of the whole
sample is always an unbiased estimator in any distribution.

Unbiased is a trade off with small variance in a sample distribution. Having
both is the goal.

```
V[sample mean] = o^2/n
```

## Distributions of sums

You can use the moment generating function to uniquely identify distributions,
this is useful when finding the distribution of a new random variable that is
produced by taking the sum of all random variables in a sample distribution.

Not all random variable samples sum to a nice, named, distribution.

```
X1, X2, ..., Xn iid

Y = sum(i=1 to n) Xi

MY(t) = [MX(t)]^n
```

Examples:

Discrete

```
Bernoulli: M(t) = 1 - p + pe^t

sum of bernoulli sample will have binomial distribution:

Binomial: M(t) = (pe^t + 1 - p)^n
```

Continuous

```
Exponential: M(t) = lambda / (lambda - t)

sum of exponential sample will have gama distribution:

Gamma: M(t) = (beta/(beta - t))^a
```
