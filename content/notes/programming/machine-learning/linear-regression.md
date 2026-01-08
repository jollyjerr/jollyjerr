+++
title = "Linear Regression"
+++

# Linear Regression

A simple supervised learning model that makes predictions on linear
relationships.

- Predictive task: real valued numbers
- Parametric
- No hyper parameters
- Features have linear relationship to target variable

You predict a quantitative response Y on the basis of a single predictor
variable X:

```
Y is approximately modeled as B[0] + B[1]X
```

The B values (coefficients or parameters) are two unknown constants that represent the intercept
and slope. `B[0]` basically represents baseline behavior of `Y`.

By estimating the B values you can find an intercept and slope such that the
resulting line is close to your real data. The most common way of doing this is
minimizing the least squares criterion using mean squared error (MSE).

Other measures:

- mean absolute error
- mean percent absolute error
- root mean squared error

## Types of variables

- real valued
- categorical
  - ordinal (grade/age)
  - non-ordinal (gender/race)

To use non-ordinal variables you can encode them into binary or categorical
variables (go as simple as possible).

## Single variable

Let

```
y_hat[i] = B-hat[0] + B_hat[1]x[i]
```

Be the prediction for Y based on the ith value of X. Then `e[i] = y[i] - y_hat[i]`
represents the ith residual, the difference between the ith observed response
value and the ith response value that is predicted.

```
B[1] = Cov(X, Y)/Var(X)

B[0] = E[Y] - Cov(X, Y)/Var(x) E[X]
```

This resulting line is the least squares line which is different from the true
population line that would be produced if you could observe all data. The bias
is the drift between the least squares line and population line like in stats.

Multivariate case

```
MSE = ||y-xB||2

X^t(xB - y)
```

### Model fitness

`R^2` can be a measure of how well your model fits:

```
R^2 = 1 - RSS/TSS
```

### Summary

1. How to determine coefficients

Least squares method to minimize the residual sum of squares. RSS, Mean squared
error.

2. How well does the model fit

(high) R-squared derived with RSS and TSS

Also F statistic `(TSS-RSS)/p / RSS(n-p-1)` to determine if there is a
significant variable in the model.

3. How significant are the coefficients

Standard error of the coefficients. T-score, (low) p-value and hypothesis testing to
find if they are significant. Confidence intervals.

4. How well does the model predict on unseen data

## Multi Linear Regression

Can also add higher order terms: polynomial regression

```
y = a[0] + a[1]x[1] + a[2]x[2] + ...
y = a[0] + a[1]x[1] + a[2]x[1]^2 + ...
```

The `x` values can be functions.

Monitor training and test error as you add terms and increase the complexity of
terms in the model.

### Assumptions

Linear regression works off some fundamental assumptions that are often broken
in real world scenarios.

1. All predictors `X[1] - X[p]` are linear to Y

- In general, predictors might be correlated.
- There may be interactions between predictors.

Predictor correlation comes from:

- redundant information
- underlying effect (confounding/causality)
- correlated in nature

Why it matters

- Correlation over 0.7 is problematic.
- Collinearity in features is problematic

Variance inflation factor detects multicollinearity.

```
VIF(B_hat[i]) = 1 / 1 - R^2[X[i]|X[-i]]
```

### Bias-Variance Trade Off

Bias is if you are correct, variance is the spread of predictions.

As your model complexity increases, bias generally decreases while variability
generally increases

`MSE = Var(f) + bias(f)^2 + Var(Sigma)`

You want to optimize for the minimum MSE value.

### Feature selection

#### Forward selection

Add features one-by-one by maximizing the R^2 value of the model.

#### Backward selection

Start with model with all features and remove the one that has maximum p-value.
Repeat until you reach a tolerance of the p-value.

#### Mixed selection

Add some values to max the R^2 and then remove highest p-value features.

(resembles forward selection but stops at some criteria for the p-value of
features)
