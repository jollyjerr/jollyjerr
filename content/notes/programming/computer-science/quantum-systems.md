+++
title = "Quantum Systems"
+++

# Quantum Systems

Need to read book by Radhika Vatnan.

## Single Qubit

A qubit is a unit of information; a quantum bit.

We describe states of matter as wave functions.

### Ket Vectors

A vector of all observable states is called a Ket vector, written as `|0>` where
you map 0 to a vector (in the Hilburt space) that describes a particular state
of an electron. Same for 1 `|1>`.

### Superposition

`|0> and |1>` are "pure" states. A quantum system can be in a superposition of
two states:

`a * |0> + b * |1>` where a and b are complex numbers called "amplitudes".

### Measurement

When you make a measurement:

- with probability `|a|^2` it collapses to `|0>`
- with probability `|b|^2` it collapses to `|1>`

Keep in mind that total probability will stay 1.

Once you measure the system, the superposition is gone forever (if you continue
to make the same measurement. In some cases a different axis of measurement
could change the measurement to uncertain again.)

### Operations

Quantum operations (or Unitary operations).

Hit `a` and `b` with a unitary matrix, resulting with a new superposition.

```
a` * |0> + b` * |1> = U(a|0> + b|1>)
```

A Unitary matrix is a 2x2 matrix of complex numbers. The matrix has to be it's
own inverse (it is a little more involved then that but a lot to write down here).

`U^+ * U = I`

### Unitary operators and reversible computation

For any quantum operation, you can apply the inverse matrix and get back to the
original state. The only non reversible operation is measurement.

## Multi Qubit

Two ions of our element that are both isolated in one system from the outside
world - they can influence each other.

```
|a> tensor product |b>
```

Tensor product symbol is circle with an x in it. Tensor product can also be
called direct product.

Both the qubits collapse when you measure the system. You have four bases for
all the possible states `00 01 10 11`.

```
(1/sqrt(2)|0> - 1/sqrt(2)|1> ⨂ |1>)
= (1/sqrt(2)|01> - 1/sqrt(2)|11>)
```

### Entangled States

Measuring one qubit causes a full collapse or partial collapse of other qubits
in a system. This is achieved by working the system into an entangled state,
which is just a special type of multi qubit system.

Bell state `1/sqrt(2)(|00> + |11>)` cannot be written as a tensor product of two
individual quantum states.

If you do a partial measurement of two qubits in a bell state (measure only one)
then you know the value of the other qubit right away - this is quantum
entanglement.

More examples:

```
1/sqrt(3)(|00> + |01> + |11>)

1/2|00> + 1/2|01> + sqrt(3)/2sqrt(2)|10> + 1/2sqrt(2)|11>
```

### Multi Qubit Gates

Apply unitary operations on each respective qubit and take tensor product of them.

```
H = Hadamard gate
I = Identity (noop)
```

Hadamard first, identity second

```
|00> -> H x I -> (1/sqrt(2))(|00> + |10>)
```

Hadamard both

```
|00> -> H x H

(1/sqrt(2))(|0> + |1>) x (1/sqrt(2))(|0> + |1>)

1/2(|00> + |01> + |10> + |11>) # "uniform superposition"
```

If you have an n bit quantum system, then the unitary operator U will result in
a `2^n cross 2^n` matrix in general.

#### Controlled Operations

If Q1 is in `|1>` then apply an operator to Q2. Otherwise do nothing.

You can build controlled X gate, hadamard gate, etc....

## Classical Circuits

To replicate OR and AND, you need an extra qubit as your result register, and
the operation has to return the original qubits and the result register. NOT is
already unitary so you just do a normal not.

### Quantum Parallelism

Your gates all process in parallel, and all gates are in the superposition until
measurement.

#### No cloning theorem

You cannot copy one qubit or quantum state. Cloning is not a unitary operation
and can not even be a linear operator.
