+++
title = "Huffman Codes"
+++

# Huffman Codes

What is compression?

Simple Example:

Take an ASCII text - represent text characters as binary

Sort the characters by frequency and then represent them in binary starting at 0
and counting up. This shrinks your file size because your average bits per
character will drop.

You also have to ensure there is a unique way of reading it, so some binary
representations must be skipped. How to avoid this complication?

Use a prefix code - solution to reading binary where each letter has a different
number of bits.

## Prefix codes

No code word can be a proper prefix of another. This can be written out as a
tree:

```
0A  1
  0C  1
     0T  1G

111 = G
10 = C
etc...
```

The leaves of the tree are the things you are representing - the trees can also
have nil, which is a waste of bits that can be optimized out.

Walk the tree as a Trie to decode the binary.

How do we design optimal prefix trees?

Sort by frequency and give most frequent the first 0, then fill out the tree
down. The way you fill out the tree can be calculated by taking the depth times
the weight for every character and that is the number you want to optimize for.

Claude Shannon figured out how to optimize the optimal prefix code - called
Huffman Codes. It is a greedy algorithm.

Find a prefix code such that the value of the tree is minimized.

1. Take the two least frequent characters - break ties arbitrarily
2. Form a composite character by combining them (little treelet)
3. Repeat with the new set (original chars + composite char - two chars you
   combined)

Example:

```
A,T,C,G

A: 0.4
C: 0.1
T: 0.4
G: 0.1

combine C,G

0C  1G (frequency 0.2)

combine T, (CG)

0T  1
  0C  1G

combine A, (TCG)

0A  1
  0T  1
    0C  1G

Value of the tree = 1.8 bits per character
```

Can be proved by the theory of general macros
