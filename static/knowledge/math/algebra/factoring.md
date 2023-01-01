Factoring is the act of "un-[distributing](./operations.md)" EX: `6 = 3 * 2` (factored out a 3, 2 is left over)

There are multiple **factoring methods** depending on what you are presented with.

Your goal is either to simplify (EX `(x-8)(x+2)`) or to solve for "the roots" (EX `x = -6 || x = 1`)

Solve for the roots by using the "zero theorem" (set polynomial = 0 first) EX `x^2 + 5x - 6 = 0`

1. Greatest Common Factor

All terms must share a common factor that you can remove

```
3x + 6xy - 15ax
3x(1+2y-5a)
```

2. Quadradic polynomial un-FOILing

```
x^2 - 6x - 16 // Find the factors of -16 that sum to -6
(x-8)(x+2)
```

You can check your work by [multiplying](./polynomials.md) the polynomials

- with coefficients

Take the factors of the coefficient as well so that you can consider all posibilities

```
6x^2 + 10 + 4

factors of 6: 6,1 || 3,2
factors of 4: 4,1 || 2,2

(3x + 2)(2x+2)
```

3. The difference of two squares

Need two squares that can snap together

```
49a^2 - 36x^6y^4
(7a + 6x^3y^2)(7a - 6x^3y^2)
```

Again, you can check your work by multiplying

4. Completing the square

```
x^2 + 10x + 6 = 0 // before you start, make sure the highest term is `+1x^2` and set the equation to 0.
x^2 +10x = -6

// take the coefficient of the second term, devide by 2, square the result
(10/2)^2 = +25
// add the result to both sides

x^2 + 10x + 25 = 19 // now you can factor
(x + 5)(x + 5) = 19
(x + 5)^2 = 19
sqt((x + 5)^2) = +/- sqt(19) // Because you take the square root, your answer will be both + and -
x + 5 = +/- sqt(19)
x = 5 +/- sqt(19)
```

Notes:

When completing the square with complex roots, you may end up in a situation like `+/- sqt(-59/36)`. Take the square root of the top and bottom of the fraction and factor out the square root of -1.

`+/- sqt(-59/36) = +/- (sqt(-1) * sqt(59))/sqt(36) = +/- (i * sqt(59))/6`

5. Difference/sum of two cubes

Difference formula: `a^3 - b^3 = (a - b)(a^2 + ab + b^2)`
Sum formula: `a^3 + b^3 = (a + b)(a^2 - ab + b^2)`

6. The quadratic formula

The quadratic formula can be discovered by completing the square of `ax^2 + bx + c = 0`

Once you have the formula `x = (-b +/- sqt(b^2 - 4ac))/2a` you can just plug in the variables and solve... assuming a > 0

## Other uses

You can factor to find the common denominator of a "rational expression"

```
((x + 3)/(x^2 - x - 6)) - (3/(3 - x))
((x+3) / ((x-3)(x+2))) + (3 / (x-3)) // notice the factoring out of -1 and multiplication of the whole fraction
right side is multiplied by (x + 2) to get greatest common denominator
Fractions are added
= (4x + 9) / (x^2 - x - 6)
```
