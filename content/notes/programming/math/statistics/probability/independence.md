+++
title = "Independence"
+++

# Independence

Two events are independent if knowing the outcome of one event does not change
the probability of the other.

```
P(A|B) = P(A) and P(B|A) = P(B)

multiplication rule for independent events

P(A ∩ B) = P(A)P(B)
```

Events are mutually independent if for _every_ subset of events the multiplication
rule applies.

Use these rules to prove components are independent or not, then you can assume
the rules are true and draw conclusions.

If `A ∩ B = {}`, then knowing that one event occurred means that the other event
conclusively did not occur. So even though they may seem independent, they are
actually dependent.

## Joint Distributions

When talking about the probability that two events took place:

```
P(X = x, Y = y)
```

### Discrete

Written as a table with the variables as axis:

```
       x
    1  2  3
  2 .3 .4 .1
y 3 .02
  4
```

To calculate _marginal_ probabilities you sum out the other variable. This can
also be done on higher dimensions (like from 10 vars to 6):

```
fx(x) = sum(y) f(x, y)
fx(y) = sum(x) f(x, y)
```

These are called marginal because the result is written in the margins of the
table.

### Continuous

In two dimensions, a joint PDF gives a surface and the volume under the surface
represents probability.

Marginal probabilities are found by integrating out the other dimension.

You can establish the variables as independent if you are able to factor out
both variables and their indicators from the joint PMF.
