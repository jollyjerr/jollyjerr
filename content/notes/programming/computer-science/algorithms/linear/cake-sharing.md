+++
+++

# Cake Sharing Problem

Alice, Bob + Charlie share a cake.

```
Constraints: [
    alice - at least as much cake as bob,
    bob - at least twice as much cake as charlie,
    charlie - at least 1/10th of the cake,
    bob's doctor - no more than half the cake for bob,
    alice - $10 for the whole cake, 1$ for each 10th,
    bob - $12/cake
    charlie - $15/cake
]
```

Maximize the profit while respecting the constraints.

```
# Decision Variables
xa: alice
xb: bob
xc: charlie

# Objective Function
max: 10xa + 12xb + 15xc

# Constraints
[
    xa >= xb,
    xb <= 2xc,
    xc >= 1/10,
    xb <= 1/2,
    xa+xb+xc = 1,
    xa,xb,xc >= 0
]
```

## For Future

Look into duality and dual solution
