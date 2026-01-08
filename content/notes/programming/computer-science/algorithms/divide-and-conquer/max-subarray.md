+++
title = "Max Subarray Problem"
+++

# Max subarray problem

If you have a list of integers, what is the maximum difference between two
numbers if you cannot change the order.

Brute force approach:

```python
maxDiff = 0
for i up to n-1:
    for j up to n:
        maxDiff = max(maxDiff, items[j] - items[i])
return maxDiff
```

Runtime of brute force is O(n^2), can you do better?

1. Split the list into two - left and right
2. Solve for left, solve for right
3. In the combination step, do a linear scan of the left for the smallest value
   and the right for the largest value. These values are for the case where your
   optimal solution was split across the two partitions.
4. Result is max(left, right, highest - lowest)

```python
max_sub_array(A, l, u)
    if (l == u):
        return 0
    else len(A) == 2:
       return max(A[u] - A[l], 0)
    else:
        m = (l+u)//2
        left = max_sub_array(A, l, m)
        right = max_sub_array(A, m+1, u)
        straddle = max_element(A, l, m) - min_element(A, m+1, u)
        return max(left, right, straddle)

max_element(A, l, u):
    max = 0
    for i from l to u:
        if A[i] > max:
            max = A[i]
    return max
```

Runtime is the same as mergesort

Recurrence:

```
T(n) = {
    Θ(1)           when n <= 2
    2T(n/2) + Θ(n) otherwise
}

2T(n/2) + Θ(n) = Θ(nlogn)
```
