+++
+++

# Generative Models

Generative models offer more approaches for classification problems that can get
great results when logistic regression breaks down (like with large class
separation).

Given `y=k`, model `x` distribution then flip with Bayes.

## Overview

```
y has K >= 2 classes

pi_k prior that a random observation comes from kth class

for kth class, f_k(x) = P(X | y=k)

then P(y=k|X=x) = pi_k * f_k(x) / sum(l=1, K) pi_l * f_l(x)

= P_k(x) (posterior)
```

Finding which one has the highest posterior probability.

## Linear Discriminate Analysis (LDA)

Assume that f_k(x) is normal.

Take a log of the full expression and maximize that.

```
d_k(x) = x * M_k/s^2 - M_k^2/2s^2 + log(pi_k)
```

LDA can also use estimators for mean, standard deviation, and pi sub k. The
general estimators are modified to account for each class.

## Quadratic Discriminate Analysis (QDA)

Assumes each class has its own co-variance matrix.

Same setup as LDA, assign observation to class that maximizes:

```
d_k(x) = -1/2 * x^T * Sigma_k^-1 * x + x^T * Sigma_k^-1 * M_k - 1/2 * M_k^T *
Sigma_k^-1 * M_k - 1/2 * log|Sigma_k| + log(pi_k)
```

QDA is a more flexible model than LDA.

## Naive Bayes

Assume predictors are completely independent of each other.
