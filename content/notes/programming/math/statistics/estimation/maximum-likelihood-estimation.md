+++
title = "Maximum Likelihood Estimation"
+++

# Maximum Likelihood Estimation

Given data `X1, X2, ..., Xn` a random sample (iid) from a distribution with
unknown parameter Θ, we want to find the value of Θ in the parameter space that
maximizes our probability of observing that data.

If `X1, X2, ..., Xn` are discrete we can look at `P(X1=x1, X2=x2, ..., Xn=xn)`
as a function of Θ and find the Θ that maximizes it.

If continuous we maximize the joint pdf with respect to Θ.

MLE is asymptotically unbiased (approaches unbiased as `n` grows).

## Notation

The pmf/pdf for any one of `X1, X2, ..., Xn` is denoted by `f(x)`. No subscripts
because all X's have the same distribution. You can emphasize the dependence of
f on a parameter Θ by writing it as `f(x;Θ)`.

The joint pmf/pdf for all n of them is `f(x1, x2, ..., xn;Θ) = product(i=1 to n) f(x;Θ)`.

The data (the x's) are fixed and the joint pdf can be thought of as a function
of Θ.

Call this the likelihood function and denote it by `L(Θ)`.

## Example

Discrete example (coin flips)

```
X1, X2, ..., Xn ~ Bernoulli(p) (iid)

the pmf for one of them is:

f(x;p) = p^x (1-p)^(1-x) I{0,1}(x)

the joint pmf for all of them is:

f(vec<x>;p)
    = product(i=1 to n) f(xsubi;p)
    = product(i=1 to n) p^xsubi (1-p)^(1-xsubi) I{0,1}(xsubi)

so a likelihood is:

L(p) = p^(sum(i=1 to n)xsubi) (1-p)^(n-sum(i=1 to n)xsubi)

it is almost always easier to maximize the "log-likelihood"

l(p) = sum(i=1 to n)xsubi*ln(p) + (n-sum(i=1 to n)xsubi)ln(1-p)

you want to max with respect to p, so take derivative with respect to p and set
equal to 0:

a/ap l(p) = [sum(i=1 to n)xsubi]/p - [n-sum(i=1 to n)xsubi]/(1-p) = 0

...solve for p 😅

...switch to capitals to make your estimate an estimator

phat = [sum(i=1, to n)Xsubi]/n = Xbar
```

Continuous example (exponential)

```
X1, X2, ..., Xn ~ exp(rate = l)

pdf for one:

f(x;l) = le^(-lx) I(0,inf)(x)

joint pdf for all:

f(vec<x>;l) = product(i=1, n) le^(-lxsubi) I(0,inf)(xsubi)

a likelihood:

l(l) = n ln(l) - l*sum(i=1, n)*xsubi

take derivative with respect to l and set to 0

lhat = n/(sum(i=1, to n)Xi) = 1/Xbar

same result as method of moments
```

## MLE with multiple parameters

When you get to the derivative step you have to solve for the system of
equations. Solve for each parameter simultaneously.

It's best to look at specific examples to understand the full process.

### Sample Variance

If you calculate an estimator for the population variance then you have a
natural "sample variance". You can correct for bias and make this an unbiased
estimator that is natural because it is unbiased and constant (converges to true
population variance as n grows). This is denoted as `S^2`.

The denominator of `S^2` is called the "degrees of freedom".

### Support parameters

If you cannot drop the PDF indicators because they involve a parameter that you
are solving for, you can define a piece wise function and pull it out to help
you reason about how to maximize for the other parameter. This likely means you
will not be taking the derivative and you have to draw everything out and think
through it like "the max would be if this param is 0 but the param cannot be
lower than the largest xsubn so the MLE is the largest xsubn" in the case of a
uniform distribution.

## The Invariance Property

If you want to estimate a _function_ of a parameter using MLE, you can find the
(unbiased normally) estimator of the parameter and just plug it in the function.

## Large Sample Properties

Let X1, ..., Xn be a random sample from a distribution with pdf `f(x;theta)`.

Let theta_hat be an MLE for theta.

- theta_hat exists and is unique.
- theta_hat converges in probability to theta. We say theta_hat is a consistent
  estimator of theta.
- theta_hat is asymptotically unbiased estimator of theta.
- theta_hat is asymptotically efficient
- theta_hat is asymptotically normal

```
lim(n to inf) E[theta_hat] = theta

lim(n to inf) CRLB_sub_theta / Var[theta_hat] = 1

theta_hat ~ N(theta, CRLB_sub_theta)

theta_hat - theta / sqrt(CRLB_sub_theta) distribution approaches N(0, 1)
```
