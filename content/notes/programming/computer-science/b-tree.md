+++
+++

# B Tree

A B Tree is not the same as a binary tree.

Each node you store an array of keys (m keys). Each key in the array has two
children, things less than and things greater than. (so m + 1 children for each
node except leaves).

The length of every path from the root to a leaf is always the same (the tree is
completely balanced).

Traditionally used on disk in the memory hierarchy (not cpu, l1-cache, l2-cache, or ram).

```
m keys per node with depth d

O(m^d) keys can be stored
```

Internal nodes are nodes that are not leaves.

Number of keys for any node other than the root is always between `d <= m <= 2d`

For the root, `0 <= m <= 2d`.

## Find

How to find a key in a B tree.

1. Look for it in the root (linear scan or binary search)
2. Find smallest key `ki` where `ki > k`
3. Look in that next node
4. If you reach a leaf and cannot find it, return not found

## Insert

Need to know `m` and `d`.

1. Search for where the key should go until you hit a leaf
2. If the leaf has room, add it there
3. If the leaf is full (2d keys), use median split or another strategy

Median split:

Median becomes the parent and split in two.

```
[4, 14, 18, 22, 31]

      [18]
[4, 14] [22, 31]
```

Then insert the median into the node above. (Recurse the algorithm up if the node
above is also full.)

## Delete

1. Find the key
2. Find the "successor" (first key of leaf to the right)
3. Swap your main key with it's successor
4. Delete your key
5. If the leaf now has less than `d` keys, try and shuffle with one of the right
   or left siblings (you have to take the parent with yourself and take sibling
   to be new parent)
6. If your siblings cannot share, then merge yourself with a sibling. Basically
   create a single node and delete the parent. In worse case this can bubble all
   the way up and you delete the root.
