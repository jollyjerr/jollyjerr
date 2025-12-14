+++
+++

# RSA

## Euclid's Algorithm

```python
# GCD(m,n) = largest natural number that divides both m and n

# with m >= n
# GCD(m, n) = {
#     m               if n = 0
#     GCD(n, m mod n) otherwise
# }

def gcd(m, n):
    assert m >= n
    while n > 0:
        (m, n) = (n, m % n)
    return m
```

Runs in linear time to the number of bits in m.

## Bezout Coefficients

```
GCD(69, 15) = 3

so

3 = 15 * x + 69 * y

x = 9
y = 2

(9, 2) = GCD
```

so all `(15a + 69b)` must be divisible by the GCD

a and b are called Bezout Coefficients

You can find Bezout Coefficients with the extended Euclid's Algorithm

```python
def extended_gcd(a, b):
  if b == 0:
    return a, 1, 0

  gcd, x1, y1 = extended_gcd(b, a % b)

  x = y1
  y = x1 - (a // b) * y1

  return gcd, x, y
```

## Spec

- Use code (like ASCII) to convert data into a number or sequence of numbers (message).
- Take two large prime numbers and compute their product.
- Choose e, some number that is relatively prime with n.
- Message also has to be relatively prime with n.

Relatively prime is when `gcd(e, n) = 1`

- Public key is (e, n)
- RSA calculates `M^e mod n = EM` called modular exponentiation.
- Find private key d, such that `EM^d mod n = M`

```
gcd(e, phi(n)) = 1

Bezout coefficients

e * d - phi(n) * v = 1

M * M^phi(n) mod n

EM^(e*d) mod n = M
```

RSA depends on the hardness of factoring, finding the initial two large numbers.

### Euler's Totient Theorem

```
n -> phi(n) = # of relatively prime numbers to n
```

Find this manually by starting with set of all numbers up to n and then removing
numbers that are not relatively prime. Then you have cardinality of set.

Given a number n, take any M relatively prime with n, then `M^phi(n) mod n = 1`

If n is the product of two prime numbers (p and q), then `phi(n) = (p-1) * (q-1)`
