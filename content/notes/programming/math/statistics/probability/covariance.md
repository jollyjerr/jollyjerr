+++
title = "Covariance and Correlation"
+++

# Covariance and Correlation

When two random variables, X and Y, are not independent.

The covariance between the two is defined by:

```
Cov(X,Y) = E[(X-E(X))(Y-E(Y))]

Descrite: sum(x)sum(y) (x - mue sub x)(y - mue sub y)P(X = x, Y = y)
Continuous: ∫(-inf, inf)∫(-inf, inf)(x- mue sub x)(y- mue sub y)f(x,y)dxdy

mue sub x = sum(x)P(X = x) // the mean

The last bit on those two are the joint density function.
```

If both variables tend to deviate in the same direction, the covariance will be
positive. If the opisite is true, then the covariance will be negative. If they
are not strongly linearly related, the covariance will be near 0.

```
Computational formula for covariance

Cov(X,Y) = E(XY) - E(X)E(Y)
```

```
Other formulas for real numbers a and b:

E(aX + bY) = aE(X) + bE(Y)
V(zX + bY) = a^2V(X) + b^2V(Y)+2abCov(X,Y)
```

## Correlation Coefficient

Scaled covariance - the correlation is always between -1 and 1.

Notation: `Cor(X,Y) or 𝓅X,Y`

```
Cor(X,Y) = Cov(X,Y)/standard_div(x)standard_div(y)
```

If `Y = aX + b`:

```
Cor(X,Y) = {
    1 if a > 0
    -1 if a < 0
}
```

### Independence

Recall, X and Y are independent if `P(X=x, Y=y)=P(X=x)P(Y=y)`

```
If X and Y are independent:

Cov(X,Y) = 0
Cor(X,Y) = 0
```

However if the covariance of two vars is 0, you cannot conclude they are
independent.
