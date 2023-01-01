Logarithms tell us how many times we multiply a variable by itself in order to get a different number.

`2^x = 8` is called an **exponential equation** and can be written as

`log2(8) = x` // x = 3 here

### General log rule

```
Given the exponential equation of a^x = y

the associated logarithmic equation is loga(y) = x

and vice versa
```

##### Product rule

`loga(xy) = loga(x) + loga(y)`

##### Quotient rule

`logb(x/y) = logb(x) - logb(y)`

##### Power rule

`logc(x^n) = n(logc(x))`

#### Common logarithms

`log(y) = x` is a **common logarithm** and has a base of 10.

#### Natural logarithms

`ln(x)` is a **natural logarithm** and has a base of `e`

`e` is Euler's number, and is equal to about 2.72

`e` is calculated as the sum of the infinite series, and arises in the study of compound interest.

```
e = 0
for (n=0; n < Inf; n++) e += 1/n!
```

#### Restricted values

In an expression `loga(y)`:

The base `a` must be positive and not equal to 1

`log1(1) = 0, log1(1) = 1, log1(1) = 2` // leads to impossible statements

The argument y must be positive

### Evaluating logs

Try and equalize the bases and then apply power rules

**If base > argument**

log27(3) = `27^x = 3`

```
27^x = 3
(3^3)^x = 3^1
3^3x = 3^1

3x = 1
x = 1/3
```

**If argument is a fraction**

log8(1/512)

```
8^x = 1/512
8^x = 1/8^3
8^x = 8^-3

x = -3
```

#### Change of base formula

```
loga(b) = logc(b)/logc(a)
```

You can pick any value you want for `c`, typically you would pick 10 or `e`

## Graphing exponential functions

Like `y = 2 * (1/3)^(-x+2) - 4`

1. Plug in a large value (100) and large negative value (-100) to determine the "end behavior"
2. One should result in an infinite-esque value, the other should be the horizontal asymptote
3. Plug in some easy to calculate values to plot
4. Connect the points

Convert graphs of logs and exponential functions by switching x,y pairs (they are inverses of each other)
