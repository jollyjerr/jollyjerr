+++
+++

# Quantum Computing

Classical computers map voltage levels to physical states. This is done in the
CPU and memory. (magnetization/charge). Change is enacted by logic gates.

Classical computing: controlled symphony of electrons

## Classical vs Quantum Physics

Classical: Newton, maxwell's equations, etc.

Physical properties like length, energy, momentum exist in a continuum.

Explains a lot we observe in the macro sphere.

Has discrepancies, like the spectrum of elements like hydrogen or photoelectric
effect both breaking the idea of continuum.

Quantum Hypothesis: energy or light is emitted and absorbed in packets or
quanta. Light behaves like a particle and wave. Waves and particles are a
duality in nature.

Two Slit: if you don't measure what slit a single photon goes through then you
get an interference pattern.

No such thing as passive measurement - to measure is to always change the
measured thing.

Heisenberg: measurement changes the nature of the measured state. Position and
velocity are inherently uncertain. Distribution of possible position and
velocities. Subatomic things "exist" in multiple possible states at the same
time.

Electron "spins" up or down at the same time. Measuring the spin, it collapses
to up or down.

## Principles of Quantum Mechanics (with enough assumptions to build algorithms)

- Quantization: fundamental properties (length, angular momentum) cannot be arbitrary values, they are
  multiples of some fundamental unit

This explains the spectrum of hydrogen atoms, because electrons can only exist
in some discrete orbits.

- Heisenberg Uncertainty Principle: things can exist in multiple states at the
  same time until you measure it

Quantum systems can exist in a superposition of multiple states.
Measurement (any form of interaction - no person needs to observe) can cause a collapse to a single state.

Not the same as lack of knowledge, it actually exists in multiple states at the same
time.

- Entanglement

## Stern, Gerlach

Shoot atoms of silver through a magnetic field. The field will make the diapold
deviate in direction depending on it's spin as it goes through the field. You
would expect to have a distribution across every direction, but in reality you
end up with exactly two states - up and down. This shows the magnetic diapold is
quantized.

If you chain the experiment, so all atoms pointing up go through a device again,
you can be up in the z direction and either left or right in the y direction.
Measuring on y or z direction makes the orientation on the other direction
uncertain.

## Quantum Information

Qubits:

Physical state is electron spin. |0> and |1> are pure states.

bra notation, ket notation

Superposition: unobserved (|0> or |1>). 50% chance of being 0 or 1.

|0> and |1> are physical vectors in a Hilbert Space.

Superposition ɑ1|0> + ɑ2|1> where alpha is a complex number.

Normalize quantum states so the modulus = 1 by adding a normalizing constant.

Quantum Computing - take advantage of quantum parallelism:

1. prepare qubits
2. run quantum operations
3. measurement
4. get output

Algorithm design is about making the right answer most probable when you measure
the system.

Kronecker Product: Combine two qubits into single system:

```
b1 = 1/sqrt(2)(|0> + |1>)
b2 = 1/sqrt(2)(|0> - |1>)

b1 X b2 = 1/2(|00> - |01> + |10> - |11>)
```

Entangled state: when you measure one qubit you know the state of another. You
can also have a measurement that collapses the other qubit to a smaller
normalized system.

### Quantum Operators

Must always be reversible (except measurement) and linear and unitary

- Quantum-Not: invert the qubit (pauli spin matrix)

```
{
    0, 1
    1, 0
}
```

- Hadamard Gate:

```
|0> -> 1/sqrt(2)(|0> + |1>)
|1> -> 1/sqrt(2)(|0> - |1>)
```

- Rotation

```
{
    cos  -sin
    sin  cos
}
```

Operations on multiple qubits: need to specify what to do with all possible pure
states.

#### Bells Inequality

Alice and Bob sent to two planets. They cannot communicate with each other.

Third party sends a bit to Bob and Alice, A and B, and they respond with X and
Y.

If xor(A, B, X, Y) = 0 then they can come back to earth.

Simplest strat: always respond with a zero - win 75% of time

Classical: No matter what strategy they use, the probability of winning is always <= 0.75

Quantum: share two entangled qubit. If you get zero do nothing, if you get 1
then rotate by 22.5 deg in opposite directions. Measure your qubit and send the result back.
Probability of winning is 80%.

```
1/sqrt(2)(|00> + |11>)

cos(pi/8)|0> + sin(pi/8)|1>
```

If they both get a zero they will win for sure (because of the entangled state)

If one gets a 1 then they win `0.85%` of time (ish).

```
1/4 a=b=0 P(w)=1
1/4 a=1,b=0 P(w) ~ 0.85
1/4 a=0,b=1 P(w) ~ 0.85
1/4 a=b=1 P(w)=0.5

P(w) = 0.8
```

This has been proven experimentally as well as mathematically.
