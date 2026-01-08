+++
title = "Fast Fourier Transforms"
+++

# Fast fourier transforms

Signals: values over time (EX: stock price)
Discrete signals: value over time measured at a specific interval
Periodic signal: pattern repeats over time

A Fourier transform breaks a signal into the frequency components that make it
up. It's used in all time series data, image data, audio data, etc. It allows
you to smooth/de-noise signals and inspect data.

## Discrete Fourier Transforms

All complex roots of unity are generated as powers of the generator root:

```
ɷ = omega

ɷn = e^[(2pi/n)j]

ɷn^n = 1 because e^(2pij)

kth root = e^((2pi/n * k)j) or ɷn^j
```

ɷn is a vector such that it takes n rotations to come back to 1

So using that:

Discrete Fourier Transform of the signal `[a0, a1, a2, ... , an-1]` <- n real numbers cycle

Think of the polynomial a(x) = your series

The Fourier transform is when you evaluate the polynomial for various roots of
unity.

```
a(ɷn^0), a(ɷn^1), ...
```

EX:

```
[+1, -1, +1, -1] <- sequence

[ɷ4^0, ɷ4^1, ɷ4^2, ɷ4^3] <- roots of unity
= [1, j, -1, -j]

A0 = 1+(-1)+1+(-1) = 0
A1 = 1+(-1)j+... = 0
A2 = 4
A3 = 0

[0, 0, 4, 0] <- Discrete Fourier transform
```

You can invert this with an inverse Fourier transform to get the original
sequence.

## Computing Fourier Transforms

FT and inv FT are Θ(n^2) if you implement the math naively.

```python
def compute_fourier_coeffs_naive(seq):
    n = len(seq)
    fft_seq = []
    w = 1.0
    # This is the generator of all the nth roots of unity.
    wn = math.cos(2.0 * math.pi /n) + math.sin(2.0 * math.pi/n)*1j
    # Compute each coefficient
    for j in range(n):
        Aj = 0
        wj = 1.0
        # Compute the summation
        for k in range(n):
            Aj = Aj + wj*seq[k]
            wj = wj * w
        fft_seq.append(Aj)
        w = w * wn
    #The overall procedure takes n^2 time.
    return fft_seq
```

You can do better by splitting the polynomial into even and odd parts by
coefficient.

```
aeven(x^2) + x * aodd(x)

The ith Fourier coefficient is:

aeven((ɷn/2)^i) + ɷn^i aodd((ɷn/2)^i)
```

So if you compute the even sequences and the odd sequences you can combine them
using the equation above to merge and compute the initial sequence.

Base case is when N is 1 - this algo is for if N is even, FFTW(est) can handle N
being odd.

Θ(nlogn)

```python
def fft(seq):
    # this code only works when the length of sequence is a power of two.
    # for arbitrary sequence lengths, we need a more carefully designed divide and conquer
    # scheme such as the so called "FFTW" (fast fourier transform in the West) scheme
    # proposed by Cooley and Tukey.
    # base case when seq has single element
    if len(seq) == 1:
        return seq
    else:
        n = len(seq)
        assert n%2 == 0
        # Split the sequence into odd add even elements
        seq_even = [seq[2*j] for j in range(n//2)] # even
        seq_odd = [seq[2*j+1] for j in range(n//2)] # odd
        s1 = fft(seq_even) # recursively call fft
        s2 = fft(seq_odd) # recursively call fft
        # prepare the result array
        fft_ret = [0]*n
        w = 1.0
        wn = (math.cos(2.0 * math.pi /n) + math.sin(2.0 * math.pi/n)*1j)
        # combine the fft for odd and even into
        # fft for the original sequence.
        # See CLRS for explanation.
        for k in range(n//2):
            fft_ret[k] = (s1[k] + w * s2[k])
            fft_ret[k+n//2] = (s1[k] - w * s2[k])
            w = w * wn
        return fft_ret

seq = [1.0, -1.0, -1.0, 1.0, -1.0, -1.0,1.0, -1.0]
fft_seq = fft(seq)
```
