+++
title = "Greedy Algorithms"
+++

# Greedy Algorithms

Dynamic programming is typically expensive (pseudo polynomial) so greedy
algorithms can solve many of the same problems faster.

Also called Myopic algorithm

1. Identify greedy criterion to make an optimal choice at each step of a
   decision sequence

There is no future look ahead

For example - in the rod cutting problem you could prioritize the price per cm
of rod. This generates an approximate solution, but runs in linear time.

In some cases, greedy does provide the most optimal solution. These are
important cases where you get the best of both worlds - speed and accuracy.

### Coin changing

Amount X made up of coins {c1,c2,...,cn}

1. Find largest amount ci <= X
2. Give ci
3. Solve for X - ci

This is how you normally distribute change - and turns out to actually be the
optimal solution if minimizing for the number of coins **if you use normal US
coin denominations** up to 50

Also see: https://cs.uwaterloo.ca/~shallit/Papers/change2.pdf
