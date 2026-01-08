+++
title = "Dynamic Programming"
+++

# Dynamic programming

Formulated in 40's to solve a class of optimization problems.

Based on one key idea: optimal substructure

EX: How do I optimally cut 10m rods into 3/4m rods and maximize the
price/payoff?

4 + 4 (2 waste) $4
3 + 3 + 3 (1 waste) $5.40
3 + 3 + 4 $5.60

What about in general case?

Think about each cut as a sequence of decisions.

Find the best solution for each length of rod starting from smallest to largest
size of rod. You then build a table which shows you the optimal way to breakdown
a large rod.

Once you commit to a cut, you are left with an identical subproblem with
different data.

Combine the result of your subproblem with your original problem.

General Steps:

1. Identify the optimal substructure
2. Write down a recurrence for the optimal **value** (called value function or
   cost to go)
3. Memoize the subproblems
4. Recover the solution (store the decisions you make while finding optimal
   value and read them off/backward at the end)

```python
def maxRevenueNew_Memoize(L, sizes, prices):
    k = len(sizes)
    assert len(prices) == k
    # Build a two dimensional tbl in python
    # The entire table is filled with zeros
    tbl = []
    # Also record which option is best to reconstruct solution
    sol = []
    for i in range(L+1):
        tbl.append([0]*(k+1))
        sol.append([-1]* (k+1))

    for l in range(L+1):
        for j in range(k-1, -1, -1): # Iterate from k-1 down to 0
            ki = l // sizes[j]
            valuesToConsider = [ ((i * prices[j] +  tbl[ l-i*sizes[j] ][j+1]), i) for i in range(ki+1) ]
            valuesToConsider.append((0, -1))
            (val, option_id) = max(valuesToConsider)
            tbl[l][j] = val
            sol[l][j] = option_id
    # Now retrieve the solution
    cuts = []
    l = L
    j = 0
    while l > 0 and j < k:
        option_id = sol[l][j]
        if option_id == -1:
            break
        if (option_id > 0):
            cuts.append('Cut length = %d , %d times' % (sizes[j], option_id))
        l = l - option_id * sizes[j]
        j = j + 1
    return tbl[L][0], cuts
```

### What happens when optimal substructure fails?

The way you sequence a decision may not lead to an optimal substructure. This
happens if the local optimal solution means that you have to re-examine the
global problem. For example, if in knapsack you have a tipping point where
taking over L items results in a change to the value of all items.

current_optimal + solution_so_far != optimal
