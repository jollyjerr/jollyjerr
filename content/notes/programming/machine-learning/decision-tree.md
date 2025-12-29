+++
+++

# Decision Tree

Non parametric model that uses a tree of question nodes to walk to the correct
prediction.

Split to minimize MSE for regression tasks and minimize entropy or gini for
classification tasks. Minimizing entropy and gini results in maximum information
gain and purity of the nodes.

Gini:

```
G = 1 - sum(p[i]^2)

Where p[i] is the proportion of each class
```

Trees are easy to over fit, which can be combated by stopping the tree growth
early or by pruning branches. Best way is minimal cost-complexity pruning with
complexity parameter a.
