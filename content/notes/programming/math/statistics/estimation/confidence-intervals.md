+++
+++

# Confidence Intervals

When giving a confidence interval, the randomness is in the sampling. Multiple
samples will result in multiple different confidence intervals. The percentage
of confidence is how many intervals from samples will actually contain the real
mean.

## Normal via CLT (large sample size >= 40 ? for use of central limit theorem)

```
Suppose Xn is a random sample from the normal distribution with mean u and
variance o^2.

Assume that o^2 is known.

- X_bar is an estimator of u
- X_bar is N(u, o^2/n)

X_bar-u / o/sqrt(n) ~ N(0, 1)

Suppose that Z ~ N(0, 1)

P(-1.96 < Z < 1.96) = 0.95

Solve for u in the middle

A 95% confidence interval for the mean u of a normal distribution is given by:

(
    X_bar - 1.96(o/sqrt(n)), # pnorm
    X_bar + (o/sqrt(n))      # qnorm
)

This can be written as:

X_bar +- 1.96(o/sqrt(n))

1.96 is called a critical value. z[a] be the # that cuts off area a to the
right.

-Z[a/2] < 1-a < Z[a/2] # -1.96 and 1.96 respectively in above example

So finally:

Suppose that X[1], ..., X[n] is a random sample from the normal distribution
with mean u and variance o^2.

A 100(1-a)% confidence interval for u is given by:

X_bar +- Z[a/2] * o/sqrt(n)
```

The example above assumes you have a normal distribution, so use the CLT to get
there.

```
Suppose that X[1], ..., X[n] is a random sample from any distribution with mean
u and variance o^2 < inf.

For large n, an approximate 100(1-a)% confidence interval for u is given by:

X_bar +- Z[a/2] * o/sqrt(n)
```

If you do not have the value for sigma, you can use the sample variance in place
of the real variance.

## Normal distribution with small sample size

If your sample size is small you must know the distribution.

```
X_bar +- t[a/2, n-1] S/sqrt(n)

t[] -> qt(x, y) in R
```

## Difference between population means

Large sample sizes:

```
X_bar[1] - X_bar[2] +- z[a/2] * sqrt((o[1]^2/n[1]) + (o[2]^2 / n[2]))
```

Small sample sizes:

You have to give more weight to whichever sample has a larger sample size with a
"pooled" variance.

```
S[p]^2 = (n[1] - 1)S[1]^2 + (n[2] - 1)S[2]^2 / n[1]+n[2]-2
```

```
X_bar[1] - X_bar[2] +- t[a/2,n[1]+n[2]-2] * sqrt(S[p]^2 * (1/n[1] + 1/n[2]))
```

## Proportions

Let p be the true proportion of the people in a country who prefer candidate A.

An estimator `p_hat` is number who like A / number questioned

This follows a Bernoulli distribution with parameter p.

By the CLT `p_hat = X_bar` sample mean is the mean of any one of the random
variables.

so:

```
p_hat ~ N(p, p(1-p)/n)
```

99.7% of the area under a N(0,1) curve lies between -3 and 3 (within 3 standard
deviations of the mean).

```
-z[-a/2] < p_hat - p / sqrt(p(1-p)/n) < z[a/2]

isolate p...

(p_hat - p)^2 - z[a/2]^2 p(1-p)/n <0

...

p_hat +- z[a/2] sqrt(p_hat(1-p_hat)/n)

approximate 100(1-a)% confidence interval for p
```

## Confidence Intervals for Variances

Same example but picture `p[2]_hat` from another region of the country.

```
p[1]_hat - p[2]_hat +- z[a/2] sqrt((p[1]_hat(1-p[1]_hat)/n[1]) + (p[2]_hat(2-p[2]_hat)/n[2]))
```

### Ratio of variances

You need a new distribution, F distribution:

```
Suppose that X1 and X2 are independent random variables with
X1 ~ chi_squared(n1) and X2 ~ chi_squared(n2).

define a new random variable

F = X1/n1 / X2/n2
```

Create a 99% confidence interval of the ratio of the means and see if it
contains 1.

## Non Normal Confidence Intervals

```
Suppose that X1, ..., Xn is a random sample from the exponential distribution
with rate y > 0.

Find a 95% confidence interval for y.
```

1. Choose a statistic

Choose one whose distribution you know and is one that depends on the unknown
parameter.

```
For example try the sample mean

X_bar = 1/n sum(i=1 to n) Xi

sum(i=1 to n) Xi ~ gamma(n, y)

so:

X_bar ~ gamma(n, ny)
```

2. Find a function of the statistic and the parameter you are trying to estimate
   whose distribution is known and parameter free

```
yX_bar ~ gamma(n, ny) # pivotal quantity

=> chi_squared(n, 1/2)
```

3. Find the appropriate critical values

Look them up lol

4. Put your statistic from step two between the critical values and solve for
   the unknown parameter in the middle.

```
chi(0.975, 2n)/2nX_bar < y < chi(0.025, 2n)/2nX_bar
```
