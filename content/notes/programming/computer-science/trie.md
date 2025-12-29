+++
+++

# Trie

Very useful data structure for operations with strings.

Standard use case is O(1) auto-complete.

Root node has nothing, and then link together full words as children of the preceding
letter. On the last letter of a word, add an `isWord: true` or some sort of signal.

If someone types a letter, lookup all options down the branch of the tree that starts with
the letter they typed [DFS or BFS](./trees.md) and then traverse down the branches
as they type more letters.

You can also score the nodes as users select options so that over time the high score options
can be ordered first.

```
insertion(str) {
    curr = head
    for (c in str) {
        if (curr[c]) {
            curr = curr[c]
        } else {
            node = createNode();
            curr[c] = node;
            curr = node;
        }
    }
    curr.isWord = true;
}
```

For deletion, recursively find the end of a word and then delete your way back up in a post
recursion step.

Space:

```
O(number of nodes * size of alphabet)
```

## Lexicographical sorting

Typical sort algorithms would take `O(nlogn * m)` to sort words in a dictionary
where `m` is the length of the longest string. This slowdown also impacts
pattern matching (searching) for partial strings and genome sequences etc....

## Suffix Tries

A "suffix tree" is referring to the same thing.

A "suffix" is:

```python
string = "abracadabra$" # $ is termination character
n = len(string)
suffixes = []

for i in range(n):
   suffixes.append(string[i:n])
```

So you create all suffixes from all strings and add them to the tree.

Every suffix takes you from the root to a leaf (as long as you have the
termination character).

You can search if a string contains a sub string and can do basic regex matching.

### Compressed Suffix Tries

If you have a branch that does not split, compress it into the branching node.

```
b - a - nana
      - z
```

Number of nodes is at most twice the length of the string.

This is super handy for finding longest matching pattern between strings.
