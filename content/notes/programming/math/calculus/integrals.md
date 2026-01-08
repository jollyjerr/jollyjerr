+++
title = "Integrals"
+++

# Integrals

## Intuition

The [derivative](./derivatives.md) is taking a distance
function (position) and calculating it's velocity over time. Integration is the process of taking a
velocity function and deducing the distance traveled. Hence the nickname
"anti-derivative"

1. Given a position of an object, the derivative represents its velocity.
2. Given the velocity of an object, the area under the curve to the x axis
   represents it's position.

## Distance vs displacement

1. Distance is given by the area above the x-axis **plus** the area below the
   x-axis.
2. Displacement is given by the area above the x-axis **minus** the area below the
   x-axis

Displacement is also sometimes called the "signed area between a graph and the
horizontal axis".

Integration is typically interested in displacement.

When the velocity function dips below the x axis, the area under that negative
portion of the curve should typically be subtracted from your final answer
because it is negative velocity.

Intuitively if you run 3 miles and turn around and run 2 miles your displacement
is only 1 mile.

## Approximation

Let's say we have a velocity function `f(x) = x(8-x)`

### Endpoint Approximation

Remember `distance = velocity * time` and the area of a rectangle is `area = x * y`

We can approximate the distance traveled over an interval by breaking the
interval into rectangle and calculating the distance of each rectangle.

For each rectangle you can pick an approximation of the velocity at any point in the
rectangles width `f(x) where x is inside rectangle`:

left side = left-endpoint approximation
right side = right-endpoint approximation
any point in the middle would also work.

If you calculate the distance (area) of **each** rectangle at left-endpoint and at right
endpoint, you know that the real answer is somewhere between those two
answers.

### Improving the Approximation

If you take endpoint approximation and imagine approaching infinite rectangles
or the width of each rectangle approaching 0 you can calculate the actual area
under the curve.

#### Infinite Rectangles

Define a rectangle as `width: deltax, height: f(n)`

Suppose f(x) is a continuous function on [a,b]. Divide the interval into n
subintervals. The width of each subinterval is `deltax = (b-a)/n` (b-a is length
of full interval and you divide by number of rectangles)

The total area would be `f(x)deltax` for n-1 of n rectangles using left endpoint
approximation. Rewritten as `deltax(...f(n - 1) for each n)`

As an example, estimate the area of f(x) = x^2 on [0, 2] using four rectangles
and left-endpoint approximation:

```
area = deltax(f(x0) + f(x1) + f(x2) + f(x3))

deltax = (b-a)/n = 2-0/4 = 1/2

x0 = 0, x1 = 1/2, x2 = 1, x3 = 3/2

area = 1/2(f(0) + f(1/2) + f(1) + f(3/2))
     = 1/2(0^2 + (1/2)^2 + 1^2 + (3/2)^2)
     = 1.75
```

If we let n approach infinity, we get a formula called a **Riemann Sum**:

```
limn->inf [(b-a)/n][...f(n - 1) for each n]
```

This exact concept can be rewritten with integral notation (I am going to just
write `int` but google to see real symbol like ∫):

The definite integral of f from a to b is `inta-b f(x)dx`

dx tells you what the independent variable is, in this case the width of each
rectangle. It is implied in this notation that dx approaches 0.

This is the exact area under the graph f(x) on [a, b].

f(x) is called the **integrand**

a and b are the **limits of integration**

## Types

### Definite Integral

A definite integral has given limits on the function like [a, b]

The definite integral represents the signed area under the graph of f(x) on [a,
b]

#### Properties of definite integrals

```
∫ac fx dx + ∫cb fx dx = ∫ab fd dx
∫aa fx dx = 0
∫ab fx dx = -(∫ba fx dx)

linearity property
∫[a to b] (f(x) + g(x)) dx = ∫[a to b] f(x) dx + ∫[a to b] g(x) dx
```

#### Units

Definite integrals take rate of change and give you the quantity

If f(x) is miles/hr then F(x) = miles

If f(x) is liters/min then F(x) = liters

### Indefinite Integral

Indefinite integrals have no limits on the input of the function (-inf, inf)

The indefinite integral represents the family of anti derivatives of f(x)

F(x) + C (any constant)

### Improper Integrals

Improper integrals involve infinity.

```
type 1: ∫[1,inf] 1/x^2 dx

type 2: ∫[0,2] 1/sqrt(x) dx
```

You can solve this by writing it as a limit and then solving the limit:

```
lim[m->inf] ∫[1,m] 1/x^2 dx

lim[m->inf] -1/x |1,m

lim[m->inf] -1/m - -1/1

-1/inf + 1 = 1
```

Because the limit is a number, we say this integral converges.

The integral diverges if the limit goes to infinity or is undefined.

You are not allowed to send both bounds to infinity at the same time, so if your
integral is bounded above and below with inf/-inf you need to split it into two
limits and bound 1 side with a number for each.

Remember infinity does not cancel out. So inf - inf just diverges.

In type 2, the limit is set up so m-> the bound that results in undefined. You
might have to split it up if the undefined behavior is in the middle, like
`∫[-1,1] 1/x dx`

You can have combo of part1 and part2. Split it into however many you need and
add them if they result in numbers. If any is inf, the whole thing diverges.

### Factorials

You can write [factorials](../algebra/factorials.md) as an integral with this
formula:

```
n! = ∫[0,inf] x^n e^(-x) dx

(1/2)! = ∫[0,inf] x^(1/2) e^(-x) dx
```

You can prove this with induction using integration by parts. Start at 1!, then
2! works out to 2 _ 1! and 3! works out to 3 _ 2! etc...

```
∫[0, inf] x^3 e^-x dx

integration by parts:

u = x^3
du = 3x^2
dv = e^-x
v = -e^-x

(-x^3e^-x |[0,inf]) + 3∫[0,inf] x^2 e^-x dx

0 + 3∫[0,inf] x^2 e^-x dx

= 3 * 2!
```
