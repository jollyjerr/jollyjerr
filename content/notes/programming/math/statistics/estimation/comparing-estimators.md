+++
+++

# Comparing Estimators

Estimators normally are a trade off between variance and biased predictions.

## Mean Squared Error

Let `theta_hat` be an estimator of a parameter theta. The mean squared error of
`theta_hat` is denoted and defined by:

```
MSE(theta_hat) = E[(theta_hat - theta)^2]
```

If `theta_hat` is an unbiased estimator of theta its mean squared error is the
variance of theta.

The bias of `theta_hat` is denoted and defined by:

```
B(theta_hat) = E[theta_hat] - theta
```

## Relative efficiency

Let `theta_hat_1` and `theta_hat_2` be two unbiased estimators of a parameter theta.

`theta_hat_1` is more efficient that `theta_hat_2` if:

```
Var[theta_hat_1] < Var[theta_hat_2]
```

The relative efficiency of `theta_hat_1` to `theta_hat_2` is denoted as:

```
Eff(theta_hat_1, theta_hat_2) = Var[theta_hat_2] / Var[theta_hat_1]
```

## Cramer-Rao Lower Bound

This is the lower bound on the variance of all unbiased estimators (restrictions
exist on distributions this applies to).

Depends on information theory. Proof is based on Cauchy-Schwartz inequality. I
don't understand this at all tbh.

```
Var[tao_hat(theta)] >= ([tao_prime(theta)]^2) / (I_sub_n(theta))

I_sub_n(theta) := E[((a / a*theta) ln f(X_vec;theta))^2]

# in this context, := means "is defined as"
```

This does not hold if the parameter is in the support, like a uniform
distribution.

A great use for this is find an unbiased estimator and check if it's variance
achieves the lower bound. This means you have best case (uniformly minimum
variance unbiased estimator).

### Computational Simplifications

The math to prove this is totally wack:

```
CRLB = 1/(n/lambda^2)
```

## Weak Law of Large Numbers

Let `X_n` be a sequence of random variables, iid, from any distribution with
mean u and variance `o^2 < inf`.

Then `X_bar p_-> u`. In English "Sample mean always converges in probability to
the true mean of the distribution."
