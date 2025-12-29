+++
+++

# Shor's Algorithm

> For factoring simi-prime numbers

At the highest level, factor with order finding.

## Number Theory

Number `N` is the factor of two primes, `p` and `q`.

Choose some random number `a` that is relatively prime with `N`.

Look at the behavior of `a^i mod N`.

At some point `a^i mod N = a^(i+j) mod N`.

The sequence is periodic. (resets at 1)

The `order r` is the smallest where `a^r mod N = 1`.

```
N = 3 x 5 = 15
a = 4
4,1,4,1,4,1,... order is 2
```

Suppose the order of `a` is an even number, then `a^2t mod N = 1`.

```
(a^t + 1)(a^t - 1) mod N = 0
```

Then you know `p` and `q` both divide one of the factors.

So all together:

```
1. Choose a where GCD(a,N) = 1
2. find r such that a^r mod N = 1 # this is the bottleneck - the discrete log problem
3. if (r is even) and ((a^(r/2) + 1) mod N != 0) # probability of > 1/2 that this is true
4. then you can recover one of p or q with GCD(a^(r/2) + 1, N)
```

Notes got complex so moving to Jupyter notebook.

## Quantum Fourier Transform

A unitary operation (Fourier and reverse Fourier) that operates on all `m`
qubits.

You get an exponential speed up over FFT because the divide step is run in the
same circuit.

These notes will also be in Jupyter notebook.
