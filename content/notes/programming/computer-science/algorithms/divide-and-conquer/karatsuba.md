+++
+++

# Karatsuba's Addition and Multiplication

Modern CPUs can add two 64 bit numbers, how can we add arbitrarily large
numbers? This is needed for RSA and is implemented in BigNum or GNU
Multiplication (GMP).

## Grade school add:

```python
def add(a, b):
    c = [] # size n of a or b
    carry = 0
    for (bit, i) in enumerate(b):
        carry, c[i] = sum_of_bits(a, b, i, carry) # like basic long addition
    c[0] = carry
    return c
```

If a and b are not the same size, pad the shorter with zeros.

## Grade school multiplication

```python
mult(a, b):
    result = [] # len(a) + len(b)
    tmp = a
    for j = len(b) down to 1:
        if b[j] = 1:
            addTo(result, tmp) # result += tmp
        shift_left(tmp) # move all bits 1 to left, so append zero to end
```

runtime Θ(n^2) ish depends on length of numbers. Can you do better?

## Divide & Conquer Multiplication

Assume a and b are big numbers of length n which is divisible by 2.

Split each number in the middle, so you have a1 a2 b1 b2

```
a = 2^(n/2)a1 + a2
b = 2^(n/2)b1 + b2

the 2^(n/2) just adds n*2 zeros to the end
```

I did not get all the notes here, but at the end of the day you need four
recursive calls and base case is multiplying 2 bits.

recurrence:

```
T(n) = {
  Θ(1) n = 1
  4T(n/2) + Θ(n)
}

Solved = Θ(n^2)
```

Exactly the same complexity of grade school

## Karatsuba's trick

Reduce four recursive calls to three

https://github.com/jollyjerr/algorithms-specialization-notebook/blob/main/course1/week1/karatsuba/karatsuba.go

recurrence:

```
T(n) = {
  Θ(1) n = 1
  3T(n/2) + Θ(n)
}

Θ(n^log2(3))
```
