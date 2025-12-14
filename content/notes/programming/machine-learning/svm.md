+++
+++

# Support Vector Machine

Non parametric supervised model.

One hyper parameter called the "C" parameter.

Uses a hyper-plane to make a decision boundary. Uses a kernel function. Performs
well in regression and binary classification.

Good choice for complex but small to medium data set.

## Maximum Margin Classifier

Find hyper-plane that has the biggest margin so that it has the lowest probability
of mis-classifying any new data points.

```
yi(B[0] + B[1]x[i,1] + B[2]x[i,2] + B[3]x[i,3] + ...) >= M
```

## Soft Margin Classifier

When you have in-separate data you soften the margin and accept some error.

Introduce a slack variable `>= M(1 - E[i])`

```
E[i] >= 0
sum(i, n)E[i] <= C
```

C is hyper-parameter, so user gets to choose how much error we are okay with.
(lower means tighter margin in book, but sk-learn is the opposite)

## Kernel Trick

Used to create a curved hyper-plane.

Rewriting the function from maximum margin:

```
f(x) = B[0] + sum(i=1, n) a[i]<x, x[i]>
```

Uses dot product (called k kernel) which is a linear kernel. (SVM uses this).
(`N^2 * P run time`).

If data is not linearly separable, add one more dimension to separate the data.

```
K(x[i], x[i]`) = (1 + sum(i=1, p) x[ij]x[i`j])^2

=> f(x) - B[0] + sum( i in S) a[i]K(x, x[i])
```

Well known kernels:

- Polynomial Kernel
- Radial Basis Function Kernel

Choice of kernel strongly depends on the pattern of the data.
