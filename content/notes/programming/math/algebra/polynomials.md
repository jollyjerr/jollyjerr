+++
title = "Polynomials"
+++

The sum of multiple power terms, EX: `(-3x^4 + x^2)` leading term = -3x^4 so degree = 4

## Addition/Subtraction

```
(3x^2 + 6x - 8) + (-12x^2 + 1) // remove parens (here with understood 1 multiplied)
3x^2 + 6x - 8 - 12x^2 + 1
3x^2 - 12x^2 + 6x - 8 + 1 // group descending by degree
-9x^2 + 6x - 7
```

## Multiplication

Use the [Distributive property](./operations.md) then combine like terms
In multi variable, remember the rules of [like terms](./like-terms.md)

## Division

Use the first term of the divisor to find a value that you multiply through the divisor to get the next step in long division.
In multi variable polynomials, make sure to fully solve for the first step before bringing down the next step.

```
(x^3 + y^3) / (x + y)

x^3 / x = x^2 <--- solution
x^2 * (x + y) = (x^3 + x^2y)
(x^3 + 0x^2y) - (x^3 + x^2y) = -x^2y
-x^2y / x = -xy <--- solution
-xy * (x + y) = -x^2y - xy^2
(-x^2y + 0xy^2) - (-x^2 - xy^2) = xy^2
xy^2 / x = y^2 <--- solution
y^2 * (x + y) = xy^2 + y^3
xy^2 + y^3(from original problem) - (xy^2 + y^3) = 0 <--- remainder

solution: x^2 - xy + y^2
```
