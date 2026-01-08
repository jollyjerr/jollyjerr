+++
title = "Grover's Search"
+++

# Grover's Search

You are given a classical circuit with N inputs and an output. Find an input to make the
output 1.

Classically the best approach is O(2^n) where you just run through the
possibilities.

Quantum you can achieve O(2^(n/2)) but you have to run multiple times. The
probability of repeatedly getting the wrong answer is crazy small.

Take function f and make it a quantum function. Problem, "and" and "or" are not
unitary operations.

To fix this, give yourself a third qubit that is the result qubit. Always zero
but always maps to "and" of first two qubits.

So all classical computing boxes can be implemented in quantum, things shift
over due to calculating the third bit. This leads to a parallelization effect.

```
0,1,...,2^n-1

initialize vector u with all nbit numbers

apply hadamard gate to every bit
```

TODO: need to come back to this when I understand more
