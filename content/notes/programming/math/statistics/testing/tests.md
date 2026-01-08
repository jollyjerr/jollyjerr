+++
title = "Hypothesis Tests"
+++

# Tests

## One-Tailed Tests

Let `X[1],...,X[n]` be a random sample from the normal distribution with mean u
and known variance `o^2`.

Consider testing the simple versus composite hypotheses.

```
H[0]: u = u[0]
H[1]: u < u[0]

(where u[0] is fixed and known)
```

1. Step One: Choose an estimator for u.

For example, the sample mean.

`u_hat = X_bar`

2. Step Two: Give the "form" of the test.

```
Reject H[0], in favor of H[1] if X_bar < c,
where c is to be determined.
```

3. Step Three: Find c.

Alpha is the maximum probability of making a type 1 error.

```
a = maxP(Type I Error) where u=u[0]
  = P(Reject H[0]: u[0])
  = P(X_bar < c: u[0])

X_bar is normal because it is a linear combination of normals.
We are assuming the true mean is u[0]
Therefore: X_bar ~ N(u[0], o^2/n)

  = P([(X_bar-u[0])/(o/sqrt(n))] < [(c-u[0])/(o/sqrt(n))]: u[0])
  = P(Z < [(c-u[0])/(o/sqrt(n))])

Critical value = Z[1-a]

c = u[0] + Z[1-a](o/sqrt(n))
```

If the null hypotheses is composite:

You have to reason your way to define the critical value, in general you will
need to use calculus for this. In straightforward problems, the result is the same as the
simple case.

4. Step Four: Conclusion

```
Reject H[0], in favor of H[1], if

X_bar < u[0] + Z[1-a](o/sqrt(n))
```

Finding the probability of this last statement is the "power function" and shows you the
probability that you reject the null hypotheses if it is false and the
probability that you fail to reject the null hypotheses if it is true.

### P Values

In 2019 the average health care annual premium for a family of 4 in the US was
reported to be $6,015. In a more recent survey, 100 randomly sampled families of
4 reported an average annual health care premium of $6,537. Can we say that the
true average is currently greater than $6,015 for all families of 4?

`o = 814`

Our size `0.10` test said to reject `H[0] if X_bar > 6119.19`. Our observed
sample mean was `x_bar = 6537`.

P value is an area in the tail based on where your critical value is.

```
P(Z > 634127)
```

Small P value means you reject the null hypotheses, and super tiny p values give
you a lot of confidence. Compare the p value to your value for alpha.

## Two Tailed Tests

Let `X[1],...,X[n]` be a random sample from the normal distribution with mean u
and known variance `o^2`.

Derive a hypothesis test of size a for testing:

```
H[0] : u = u[0]
H[1] : u != u[0]
```

We look at sample mean and reject if it is either too high or too low.

Form of test:

```
Reject H[0] in favor of H[1] if either X_bar < c or X_bar > d for some c and d
to be determined.

Easier to make it symmetric:

Reject H[0] in favor of H[1] if either X_bar > u[0] + c or X_bar < u[0] - c for
some c to be determined
```

Find c.

```
a = max(P(Type I Error))
  = P(Reject H[0]; u[0])
  = P(X_bar < u[0] - c or X_bar > u[0] + x; u[0])
  = 1 - P(u[0] - c <= X_bar <= u[0] + c; u[0])
1 - a = P(-c/(o/sqrt(n)) <= Z <= c/(o/sqrt(n)))

c = Z[a/2](o/(sqrt(n)))
```

## T Tests

Let `X[1],...,X[n]` be a random sample from the normal distribution with mean u
and _unknown_ variance `o^2`.

Consider testing:

```
H0: u = u[0]
H1: u < u[0]
```

Idea: use the sample standard deviation in place of sigma?

```
S - sqrt(S^2)
```

Define a T random variable by taking a standard normal independent over a chi
squared distribution over it's degrees of freedom:

```
X_bar - u / o/sqrt(n)
/
sqrt(
    (n-1)S^2 /o^2
    /
    n-1
)
```

So:

```
X_bar - u / S/sqrt(n) ~ t(n-1)
```

Reject H[0] in favor of H[1] if:

```
X_bar < u[0] + t[1-a,n-1](S/sqrt(n))

In R use qt(1-a, n-1) for t critical value
```

In practice you do this for small samples because t approaches normal.

## Exponential Examples

Suppose that sample size n is a random sample from the exponential distribution
with rate `y>0`.

Derive a hypothesis test of size a for:

```
H[0]: y = y[0]
H[1]: y > y[0]
```

What statistic should we use? We can try the sample mean and also the sample
minimum.

Sample mean form of test:

```
Reject H[0] if X_bar < c for some c.

Less than because of the effect a larger lambda has on the distribution mean.
```

Find c:

```
a = P(type 1 error)
  = P(reject H[0]; y[0])
  = P(X_bar < c; y[0])

X_bar has chi squared distribution (see notes on exponential distributions)

a = P(W < 2ny[0]c)

2ny[0]c = X^2[1-a,2n] critical value
```

Conclusion

```
Reject if X_bar < (X^2[1-a,2n]) / 2n[y[0]]

X^2[a,n] = qchisq(area_to_left, degree_freedom)
```

## Neyman-Pearson Lemma

Gives you the statistic you should use for the "best test" or "most powerful test". Minimizes the
probability that you make type errors.

## Uniformly Most Powerful

You can use Neyman-Pearson Lemma to find the uniformly most powerful test. The
math is too much for these notes, but for example:

```
For any y[1] != y[0]

The best test if y[1] > y[0] is to reject H[0] if:

X_bar < (X^2[1-a,2n])/(2ny[0])

The best test if y[1] < y[0] is to reject H[0] if:

X_bar > (X^2[a,2n])/(2ny[0])

There is no one best test for all y[1] != y[0].
```

## Ratio of Variances

Suppose that S[1] and X[2] are independent random variables with `X1 ~ X^2(n1)`
and `X2 ~ X^2(n2)`. Define a new random variable:

```
F = X1/n1 / X2/n2

F ~ F(n1, n2)
```

## GLRT

Generalized Likelihood Ratio Test

If a UMP test does not exist, or if it is difficult, and if the common sense
tests are not workable.

Suppose you have a random sample of size n that is from any distribution with a
PDF `f(x;theta)`. Let `theta` be the parameter space.

Consider testing:

```
theta_not = some subset of the parameter space

H[0]: theta is in theta_not
H[1]: theta is in the rest of the space (theta \ theta_not) # set minus notation

Let theta_hat be the maximum likelihood estimator of theta.

Let theta_not_hat be a restricted MLE. (The MLE for theta if we assume that H[0]
is true).

Let L(theta) be a likelihood function

The generalized likelihood ratio (GLR) is:

lambda(X_vector) = L(theta_not_hat) / L(theta_hat)
```

The generalized likelihood ratio test (GLRT) says to reject `H[0]` if:

```
lambda(X_vector) <= c
```

So it gives you the thing to test with and the direction of the test.

### Wilks' Theorem

Under the assumption that `H[0]` is true:

```
-2lny(X_vec) converges_in_distribution-> X^2(1) # X^2 is chi squared
```

(does not work in uniform distribution and similar parameter defines support scenario)

So:

```
a = P(y(X_vec) <= c; theta_not)
  = P(-2lny(X_vec) >= c; theta_not)
  = P(W >= c; theta_not) # where W is chi squared with 1 deg freedom

c = X^2[a, 1]
```

Can prove Wilks' theorem in a mathematical statistics course - out of scope here.

## Chi-Squared Goodness of Fit Test

Null hypotheses: a sample comes from a particular, specified distribution.

Not going to walk through it here, just look it up. More useful when finding if
discrete data fits a distribution.

## Chi-Squared Test For Independence

- Two Categorical Variables: test if they are related/independent
- One Categorical variable: test if distribution is the same for different populations
