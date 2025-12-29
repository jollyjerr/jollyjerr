+++
+++

# Solving linear programs

## When not to solve

- If not all constraints can be satisfied, then the problem is "infeasible".
- If there are no bounds stopping growth, the problem is "unbounded".

## LP Solvers

Because LP problems are so specific, you can build generic solvers that handle
all LP problems.

Example: (Pulp)[https://coin-or.github.io/pulp/]

Input: `decision variables, objective, constraints`

Output: `infeasible|unbounded|xi,...,xn`

Seems like they are typically polynomial time? Need to look into that more.

```python
from pulp import *

model = LpProblem("AmyGeorgeCakeCuttingProblem", LpMaximize)
x = LpVariable("AmyShare", 0.0, 1.0)
y = LpVariable("GeorgeShare", 0.0, 1.0)

# add the objective function to the model.
model += 10 * x + 20 * y

# adding the constraints.
model += x+y <=1 , "fractions sum up to less than eq to 1"
model += x >= 1/3, "Amy min share"
model += y >= 1/4, "George min share"
model += y <= 1/2, "George diet"

model.solve()

for v in model.variables():
    print(v.name, "=", v.varValue)
print(f'Objective value - money obtained for charity: {value(model.objective)}')
```

## Algorithms

- Simplex: go through each vertex of the convex polyhedron until you cannot
  continue without becoming less optimized.
- Ellipsoidal
- Interior point methods
