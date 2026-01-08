+++
title = "Knapsack Problem"
+++

# Knapsack Problem

A thief has a knapsack, but it has a weight capacity w. The sum of the weight of
the goods must be under w.

Consider the items: [1..n] with weight [W1..Wn] and value [V1..Vn]

Maximize the dollar value of the stolen goods without tearing the knapsack.

Approach: consider each item and decide to take it or leave it.

## Approach

For each item i, take it or leave it.

If you take it, adjust value with Vi and weight with w - Wi. What remains is a
subproblem that looks like the original problem but with different values.

recurrence:

```
maxValue(j, W (capacity limit)) {
    0 if W is 0
    -inf if W is < 0
    0 j == n + 1
    max {
        Vj + maxValue(j+1, W - wj) <- take it
        maxValue(j+1, W) <- leave it
    }
}
```

How to memoize?

Design a table with width and height of n. The first row and column will be all
zeros. Each sub problem is looking at one row below and either w or w - Wj. Fill
up each row left to right from bottom to top.

Running time: Θ(nW0)

W0 is the actual magnitude, so if W0 = 10,000 then n^5

Called pseudo polynomial, exponential time referenced to the magnitude defined
by W.

Rebuilding solution: at each j record if you took or left, then trace back
through your table.

```python
def maxSteal_memo(W, weights, values):
    # Initialize the tables
    T = [0]* (W+1)
    S = [-1]* (W+1)
    k = len(weights)
    assert len(values) == k
    for w in range(1, W+1):
        opts =  [  ( (values[i]+ T[ w - weights[i] ]), i )  for i in range(k) if w - weights[i] >= 0 ]
        opts.append( (-float('inf'), -1) ) # In case opts was empty from the previous step.
        T[w], S[w] = max(opts)
    # This finishes the computation
    stolen_item_ids = []
    weight_remaining = W
    while weight_remaining >= 0:
        item_id = S[weight_remaining]
        if item_id >= 0:
            stolen_item_ids.append('Steal Item ID %d: weight = %d, value = %f' % (item_id, weights[item_id], values[item_id]) )
            weight_remaining = weight_remaining - weights[item_id]
        else:
            break
    return T[W], stolen_item_ids
```
