+++
+++

# Random Variables

A random variable is a function that maps events from the sample space S to the
real numbers.

They can be discrete or continuous:

- Discrete if its set of possible values is discrete (number of coin flips)
- Continuous if its set of possible values is an entire interval of numbers
  (time between two customers entering a store)

Usually denoted by X or Y, and specific instances of the variable are x or y.

Notation:

```
pmf (probability mass function)

P(X = x) {
     1 - p, if x = 0
     p if x = 1
     0 otherwise
}

indicator function

let A = set of real numbers

I subA (x) = {
    1 if x in A
    0 if x not in A
}

X ~ Bernoulli(p) has pmf

P(X = x) = p^x(1-p)^(1-x) * I sub{0, 1}(x)
```

## Expected Value

The "expected value" of a rv is the average or mean of the random variable.

Notation:

`E(X)` or `u sub x`

The "variance" of a random variable X, denoted V(X) measures how far we expect
our random variable to be from the mean.

```
V(X) = E[(X - E(X))^2]

= E(X^2) - (E(X))^2 <- the "second moment" minus the mean squared
```

The standard deviation is the positive square root of the variance.

Standard deviation is a measure of spread in the units of the problem.

## Discrete

The expected value of a discrete random variable `E(X)` is given by

```
E(X) = sum(k) kP(X = k)
```

So you sum each k and weight each k by P(k).

#### Probability mass function

A probability mass function of a discrete rv, X, is given by

```
P(x) = P(X = x) = P(all x in S | S(s) = x)
```

Each x is P less than 1, and the sum of all x is 1.

#### Cumulative Distribution Function

```
F(y) = P(X <= y) = sum(x<=y)P(X = x)

so

example: 0=.05,1=.10,2=.15

f(y) = {
    0 if y < 0,
    .05 if 0 <= y <= 1,
    .15 if 1 <= y < 2,
    ...
}
```

### Bernoulli

Bernoulli, or binary rvs are any random variable with only two possible
outcomes: 0 or 1.

The probability mass function:

```
P(X = 1) = p
P(X = 0) = 1 - p
```

`p` is the probability that a single trial is a success.

Cdf:

```
F(x) = P(X <= x) = {
    0 if x < 0
    1 - p if 0 <= x < 1
    1 if 1 <= x
}
```

Notation: `X ~ Bern(p)` means X has the distribution of a bernoulli random
variable.

`E(X)` for a bern is `n * p`

`n` is the number of trials

`V(X)` for a bern is `p(1-p)`

### Geometric

This happens when you are finding the probability that some n things will fail
before one succeeds.

Recall [geometric series](./../../calculus/series.md).

```
P(X=1) = p
P(X=2) = (1-p)p
P(X=3) = (1-p)^2 p
P(X=k) = (1-p)^(k-1) p <- probability mass function
```

Consists of independent Bernoulli trials, each with the same probability of
success p, repeated until the first success is obtained. The trials must be
identical and independent.

Sample space `1,01,001,0001,...`

Notation: `X ~ Geom(p)`

`E(X)` for a geom is:

```
sum(1, inf) kp(1-p)^(1-p)

and via some calc magic

= 1/p
```

`V(X)` for a geom is `1-p/p^2` via some mega super calc magic

standard dev is 9.5

## Binomial

- n bernoulli trials (n is fixed in advance)
- trials are identical and result in a success or a failure with P(success) = p
  and P(failure) = 1 - p
- Trials are independent (outcome of one trial does not influence any other)

```
X ~ Bin(n, p)

S = {(x1, x2, ..., xn) | xi = {1 if success on ith trial, 0 if failure}}

# |S| = 2^n but each event is not equally likely

P(X = 0) = P({0..0}) = (1-p)^n
P(X = 1) = P({10...0, 010..0}) = np(1-p)^(n-1)
P(X = k) = P({k 1's and n-k 0's}) = (n choose k)P^k(1-p)^(n-k)

E(X) = np

V(X) = np(1-p)
```

In a _negative binomial_ variable you fix `r` (the number of successes) and
count the number of failed trials before success.

`X ~ NB(r, p)`

```
if Y ~ NB(r, p)

P(Y = k) = ((k+r-1) choose (r-1))p^r(1-p)^k for k = 0,1,2...

E(Y) = (r(1-p)/p)

V(Y) = (r(1-p)/p^2)
```

You can approximate a binomial distribution with a normal distribution if there
is a large n value. This is really helpful if you cannot calculate `choose(n, k)` because n
is too large.

```
n = np and o^2 = np(1-p)
```

### Poisson

The total number of events that happen in a time period.

EX: number of gamma rays hitting a satellite per hour.

A discrete random variable X has Poisson distribution with parameter lambda
(lambda > 0) if the probability mass function of X is:

```
P(X=k) = lambda^k/k! * e^-lambda
```

Notation: `X ~ Poisson(󰘧)`

```
E(X) = lambda

E(X^2) = lambda(lambda + 1)

V(X) = lambda
```

## Continuous

A random variable is continuous if possible values comprise either a single
interval on the number line or a union of disjoint intervals.

Example: W could be the time a customer waits for service, or Y could be the
concentration level of a chemical in a solution.

If a discrete random variable is a bar chart histogram, a continuous random
variable is the integration process eventually giving you the area under a
curve.

```
y = f(x)

the probability density function for the continuous random variable x.

P(a <= X <= b) = ∫(a to b) f(x) dx
```

Probability density will always be >= 0.

`P(-inf < X < inf) = 1` so the prob of sample space will be 1

So note:

```
P(X = a) = ∫(a to a) f(x) dx = 0 for all real numbers a
```

So the probability that X equals any particular value is always zero, even
though when you measure X you will get a particular value.

Expectation and variance:

```
E(X) = ∫(-inf to inf) xf(x) dx

V(X) = E(X^2) - (E(X))^2
```

### Cumulative Distribution Function

```
F(x) = P(X <= x) = ∫(-inf to x) f(t) dt
```

- will always be between 0 and 1
- lim as x approaches -inf will be 0
- lim as x approaches inf will be 1
- F'(x) = f(x) via FTC
- F(x) is always increasing

So you are accumulating probability as you go up.

### Uniform random variable

A random variable X has the uniform distribution on the interval [a, b] if its
density function is given by:

```
f(x) = {
    1/(b-a) if a <= x <= b
    0       else
}
```

Notation `X ~ U[a,b]`

Cumulative distribution function:

```
F(x)
P (x <= x)
= ∫(a to x) 1/b-a dt where a <= x <= b
= {
    0           if x < a
    (x-a)/(b-a) if a <= x <= b
    1           if b < x
}
```

Random number generators select numbers uniformly from a specific interval,
usually [0, 1].

```
E(X) = (b+a)/2

V(X) = (b-a)^2/12
```

### Normal (Gaussian) Random Variable

Most important and widely used distribution in all of probability and
statistics. Examples: height, weight, test scores, error rates, etc.

A continuous random variable X has the normal distribution with parameters a and
b^2 if its density is given by:

```
f(x) = (1/(sqrt(2pi)b))e^(-(x-a)^2/2b^2) for -inf < x < inf
```

Notation: `X~N(a,b^2)`

Properties:

```
f(x) is symmetric about the line x=a

f(x) > 0 and ∫(-inf to inf) f(x) dx = 1

E(X) = ∫(-inf to inf)xf(x) dx = a

V(X) = ∫(-inf to inf)(x-asubx)^2 f(x) dx = b^2

a = standard deviation

b+a and b-a are inflection points for f(x)
```

Note: `smaller a <> more peaked density function`

```
P(a <= X <= b) = ∫(a to b) f(x) dx
```

#### Standard Normal Distribution

`Z ~ N(0,1)`

Where `a = 0 and b^2 = 1`.

pdf:

```
fz(x) = (1/sqrt(2pi))e^(-x^2/2) for -inf < x < inf
```

We use a special notation to denote the cdf of the standard normal curve:

```
F(z) = ⏀(z) = P(Z <= z) = ∫(-inf to z) (pdf above) dx
```

- symmetric about the y access

Critical Values: In statistical inference, we need the z values that give
certain tail areas under the standard normal curve.

Shifting and scaling:

```
If X ~ N(n, o^2), then (x - n) / o ~ N(0, 1)
```

Example:

```
X = reaction time, X ~ N(1.25, (.46)^2) # mean 1.25, standard div .46

What is P(1 <= X <= 1.75) ?

Shift and scale to fit N(0,1)

P(1-1.25/.46 <= x-1.25/.46 <= 1.75-1.25/.46)

P(-.543<=Z<=1.087)

phi(1.087) - phi(-0.543)
= .568
```

You can use a `Q-Q plot` to check if a sample is actually from a normal
distribution.

### Exponential Random Variable

Special case of Gamma distribution.

A continuous random variable X has the exponential distribution with rate
parameter lambda (lambda > 0) if the pdf of X is:

```
f(x) = {
    󰘧e^-2x if x >= 0,
    0           else
}
```

```
cdf

P(X <= || >= x) = e^−λx
```

Notation: `X ~ exp(󰘧)`

```
E(X) = 1/󰘧

E(X^2) = 2/󰘧^2

V(X) = 1/󰘧^2
```

- if the number of events occurring in a unit of time is a Poisson rv with
  parameter 󰘧, then the time between events is exponential.
- exponential is "memoryless" - `P(X > s + t | X > s) = P(X > t) for all s,t >= 0` so if you know an event
  has gone on for s, then calculating s to t is the same as 0 to t. See the
  example for more info.

Example:

```
Suppose the service time at a bank with one teller is modeled by a rv X with X ~
Exp(1/5). Then E(X) = 5 minutes. If there is a customer in service when you
enter the bank, find the probability that the customer is still in service 4
minutes later.

P(X >= 4) = ∫(4 to inf) 󰘧e^-(󰘧x) dx = e^(-4/5) = .449 ish

You can see this is memoryless because the answer is always the same even though
you don't know how long the customer has been in service (could be 30sec or
10min who knows).
```

There are two ways people define the exponential distribution:

##### Rate parameter

```
X ~ exp(rate = lambda)

f(x) = lambda e^(-lambda x) I(0, inf)(x)
E[X] = 1/lambda
```

##### Mean parameter

```
X ~ exp(mean = lambda)

f(x) = 1/lambda e^(-x/lambda) I(0, inf)(x)

E[X] = lambda
```

### Gamma Distribution

```
pdf

f(x) = 1/𝛤(a) b^a x^(a-1) e^(-bx) I(0, inf)(x)

for a > 0 and b > 0
```

Parameter `b` is called the inverse scale parameter, a is the shape parameter.

The gamma function is:

```
𝛤(a) = ∫(0 to inf) x^(a-1) e^-x dx
```

This gamma function just makes the entire pdf integrate to 1.

### Chi-Squared Distribution

```
X ~ 𝓍^2 (n)

Definition: X ~ 𝛤(n/2, 1/2)
```

```
Let X ~ N(0, 1)
Let Y = X^2
Then Y ~ chi^2(1)
```

## More on expectation and variance

Of functions of random variables.

```
E(g(X)) = {
    sum(k) g(k) P(X=k) if x is discrete, # P(X=k) is PMF
    ∫(-inf, inf)g(x) f(x) dx if x is continuous # f(x) is PDF
}

E(aX + b) = aE(x) + b

V(g(X)) = {
    sum(k) (g(k) - E(g(X)))^2 P(X = k) if x discrete,
    ∫(-inf, inf) (g(x)-E(g(x)))^2 f(x) dx if x is continuous
}
```

Variance measures the spread of data, so shifts do not affect the variance
calculation.

Expected value measures the center of the data, so it does change when shifted.

Expectation is a Linear Operator:

```
E[aX + bY] = aE[X] + bE[Y]

And independent:

E[XY] = E[X]E[Y]
```

```
V[aX] = a^2 V[X]
V[X + Y] = V[X] + V[Y] # if X and Y are independent
```

## Jointly Distributed Random Variables

Given two discrete random variables, X and Y:

```
p(x,y) = P(X = x, Y = y) is the joint probability mass function for X and Y
```

Recall: Two events, A and B, are independent if `P(A ∩ B) = P(A)P(B)`.

If X and Y are independent random variables if `P(X=x, Y=y) = P(X=x)P(Y=y)` for
all possible values of x and y.

If X and Y are continuous random variables, then f(x,y) is the joint probability
density function for X and Y if this holds for all possible a, b, c, and d:

```
P(a<=X<=b,c<=Y<=d) = ∫(a to b)∫(c to d) f(x,y) dx dy
```

X and Y are independent random variables if `f(x,y) = f(x)f(y)` for all possible
values of x and y.

## Convergence

A sequence of random variables converges in probability to a random variable X
if, for any `i > 0`:

```
lim(n -> inf) P(|X_n - X| > i) = 0
```

### Chebyshev's Inequality

Let X be a random variable with mean u and variance `o^2 < inf`. Let `k > 0`.

```
P(|X - u| >= ko) <= (1/k^2)
```

The probability that X is within k standard deviations of it's mean.

### Properties of Convergence

Take `{Xn}` and `{Yn}` as sequences of random variables such that their
probabilities converge to X and Y respectively.

```
Xn + Yn -> X + Y
XnYn -> XY
Xn/Yn -> X/Y if P(Y != 0) == 1
g(Xn) -> g(X) for g continuous
```
