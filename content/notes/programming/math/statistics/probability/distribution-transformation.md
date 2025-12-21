+++
+++

# Transformations of distributions

## Discrete

Discrete transformations are case by case but you can manage them by writing out
everything you know about the starting distribution and what the transformation
is and plugging in all known values and just going for it. It takes practice and
reading examples to get good at.

## Continuous

Use the CDF

```
F(x) = P(X <= x)

cdf: F(x) = ∫(-inf to x) f(u) du
pdf: f(x) = d/dx F(x)
```

### Common Gamma Transformation

If you multiply a gamma distribution by a constant, the constant ends up as a
divisor for b.
