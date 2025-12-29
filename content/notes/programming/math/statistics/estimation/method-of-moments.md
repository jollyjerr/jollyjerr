+++
+++

# Method of moments estimators

Recall:

- "moments" of a distribution are `E[X], E[X^2], E[X^3], ...`, population
  or "distribution" moments.
- `u = E[X]` is a probability weighted average of the values in a population.
- `Xbar` is the average of the values in the sample.

Method of moments estimators (MMEs) equate the population and sample moments and
solve for the unknown parameters.

```
The kth population moment:

u sub k = E[X^k], k > 0

The kth sample moment:

M sub k = 1/n sum(i=1 to n) (X sub i)^k, k > 0
```

## Example

```
X1, X2, ..., Xn iid ~ exp(rate = lambda)

first population moment: E[X] = 1/lambda # if you have multiple params use
                                         # higher order moments

first sample moment: 1/n sum(i=1 to n) Xsubi = Xbar

equate:

1/lambdahat = Xbar
=> lambdahat = 1/Xbar
```

This MME is not unbiased, but you can calculate the difference between it's
expected value and lambda and then update the equation to compensate for that
difference:

```
E[lambdahat] = n/n-1 lambda # not unbiased

E[n-1/n * 1/Xbar] = lambda # unbiased

lambdahat <- n-1/sum(i=1 to n)Xsubi
```
