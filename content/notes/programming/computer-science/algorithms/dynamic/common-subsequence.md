+++
title = "Longest Common Subsequence"
+++

# Longest Common Subsequence

Used in computational biology for aligning gene sequences

Given two strings: S1 and S2

Find the longest possible common sub string. Maximize the length of the string X
such that X is a substring of S1 and S2 (cannot change order of chars).

Sequence of decisions: Find the longest common substring of the remaining
strings. IE as you make decisions you add the remaining strings.
Optimal substructure: Remaining strings + decisions you have made so far.

Recurrence:

```
i and j are pointers in the two strings
lcs(i, j) {
    0 when i >= n + 1
    0 when j >= n + 1
    max {
        1 + lcs(i + 1, j + 1) if i and j match
        lcs(i + 1, j)
        lcs(i, j + 1)
    }
}
```

Memoization:

Table, i is rows and j is columns

Base cases tell you bottom and right is all 0's

From any position, you look right, bottom, or bottom right.

```python
for i = n down to 1:
    for j = n down to 1:
        if s1[i] == s2[j]:
            lcs[i, j] = lcs[i+1, j+1]
        else:
            lcs[i,j] = max(lcs[i+1, j], lcs[i, j+1])
```

Rebuild solution:

Record a matching table of decisions - (1 of three possibilities and move in
respect to the real decision that was made)
