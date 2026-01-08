+++
title = "Coin Changing Problem"
+++

# Coin Changing Problem

How do you make change optimally?

Ex: you have 20, 25, 5 cent coins. Make coins for 40 and minimize the number of
coins.

```
Inputs:
types of coins [c1, c2, c3]
target T
minimize combination of c that sum to T
```

```
recurrence

minCoin(T) {
0 if T=0
infinity if T<0

min {
        1 + minCoins(T - Cn)
        ...
        ... all coin types n
    }
}
```
