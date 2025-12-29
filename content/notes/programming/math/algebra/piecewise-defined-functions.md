+++
+++

A piecewise defined function is just a fancy name for an some if statements that check the domain and run different operations depending on the domain.

```
f(x) = {
    x^2  if x<3
    8    if x=3
    2x+4 if x>3
}
```

## Tips for writing |f(x)| as a piecewise defined function

1. Determine the roots of f(x). Do this by setting what is inside the absolute val to 0 to split into pieces.
2. Use -f(x) on each piece that is < 0
3. Verify graphically - it should be a reflection for all negative sections.

Example:

```
f(x) = |2 - x|

2 - x = 0 -> x = 2

f(x) = {
    -(2-x) if x<2
    2-x if x<=2
}
```
