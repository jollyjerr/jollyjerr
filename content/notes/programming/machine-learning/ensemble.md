+++
title = "Ensemble Methods"
+++

# Ensemble Methods

## Bagging

Random sampling of data.

Train many models on different samples from the data set. When using decision
tree this is normally done without pruning. Ensemble the result
(regression:average, classification:vote).

## Random Forest

Random sampling of features (de-correlation).

Rule of thumb, select `sqrt(n)` for n features for each model.

You can use this to order feature importance using MDI.

Use when your data has a lot of features.

## Boosting

Sequential ensemble method.

Grow a small tree (stump) to fit residual. Make one single tree slowly growing
by one or two depths at a time.

Generic boosting algorithm example:

1. Initialize `F(x) = 0, r = y`
2. For `b = 1,2,...,B` repeat:
   a. Fit a tree `F[b](x)` to the training data `(X, r)`
   b. `f(x) <- f(x) + yf[b](x)`
   c. `r <- r - yf[b](x)`
3. Output `sum(b=1 to B) yf[b](x)`

Popular boosting algorithms:

- Ada Boost
- Gradient Boost

### Ada Boost

Developed for classification, but can do regression as well. Uses weights on
data samples. Each stump fits to y. Predicts discrete values -1 or 1. Uses
exponential weight to update the data sample weights.

### Gradient Boost

Rather than feeding the residual at each stage, gradient it out with MSE or RSS
or some other loss function.

This method is the most likely to perform best, but it does depend on the data.
