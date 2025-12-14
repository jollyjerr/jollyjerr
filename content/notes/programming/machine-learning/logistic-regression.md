+++
+++

# Logistic Regression

Supervised learning used for classification and especially binary classification.

Logistic (sigmoid) function for yes/no threshold:

```
P^i = o(z^i)

A(z) = 1/(1+e^-z)

z^i = W * X + b
```

There is also softmax function for multiple categorical. Also SVM and OVR.

You fit logistic regression by maximizing the likelihood function. This means
you are maximizing the probability of classifying all categories correctly. You
can then determine the coefficient values of the parameters.

Use gradient decent to maximize parameters by comparing predicted value to real
value. Learning rate alpha is hyper parameter.

- MSE Loss
- BCE Loss

Newton's method has less iterations for same learning rate, but takes more
memory.

## Binary classification

- True Positive: predicted 1, really 1
- True Negative: predicted 0, really 0
- False Positive: predicted 1, really 0 (type 1 error)
- False Negative: predicted 0, really 1 (type 2 error)

This can be expressed in a table called a confusion matrix.

Can measure accuracy, true positive rate, true negative rate, positive
predictive value, false positive rate, false negative rate, F1: harmonic mean of
precision and recall, AUC/ROC, and cross entropy.
