+++
+++

# Recurrences for divide and conquer algorithms

To process n, divide n into b size sub-parts, process each sub-part recursively,
combine the outputs of each sub-part.

```
Time to process = T

T(n) = {
    Θ(1) for base case
    aT(n/b) + divide_step(n) + combine_step(n)
}
```

## Solving

Example: merge sort

```
T(n) = {
    Θ(1)             if n <= 1
    2T(n/2) + Θ(n)   otherwise
}

Use constants

T(n) = {
    C0 if          n<=1
    2T(n/2) + C1   ow
}
```

Expansion method:

Expand the actual value of the recursive call then simplify. Do this until you
are in a loop where you can generalize to any j'th expansion

```
T(n) = 2T(n/2) + C
     = 2[2T(n/4) + C(n/2)] + C
     = 2^2(T(n/2^2)) + Cn + Cn
     = 2^2[2T(n/2^3) + C(n/2^2)] + 2Cn
     = 2^3(T(n/2^3)) + 2C(n/2^2) + 2Cn
     = 2^3(T(n/2^3)) + 3Cn

T(n) expanded j times = 2^j(T(n/2^j)) + jCn

If j is log2(n), you are at base case:

2^(log2(n))C + (log2(n))Cn
= Cn + Cn(log2(n))
= Θ(nlogn)
```

General case: master method

```
T(n) = {
    Θ(1) n<=1
    aT(n/b) + Θ(n^c)
}


Case 1: logb(a) > c

T(n) = Θ(n^(logb(a)))

Case 2: logb(a) = c

T(n) = Θ(n^(logb(a)))logn

Case 3: logb(a) < c

T(n) = Θ(n^c)
```
