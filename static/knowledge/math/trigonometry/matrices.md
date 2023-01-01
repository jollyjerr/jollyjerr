# Matrices

Recall: scalar = constant scale factor

Matrix dimensions are always given "rows x columns" and are usually named with a capital:

```
A 3 x 2 matrix would be:

K = |a b|
    |c d|
    |e f|
```

You access different entries like `K2,2 == d`

## Augmented Matrix

You can use a matrix to represent a system of equations

```
3x + 2y = 7  |3  2  7|
x - 6y = 0   |1  -6 0|
```

Just make sure to line up the coefficients and everything

## Row operations

You can switch two rows without changing the value of a matrix. Notation: `R2 <--> R3`

You can also multiply any row by a constant.

You can also add rows together `R1 + R2 -> R1` (replace R1 with the sum of R1 and R2)

## Row-echelon and reduced row-echelon forms

An augmented matrix is in row-echelon form if

1. All rows consisting of only 0s are at the bottom
2. The first non-zero entries of each row sit in a staircase pattern

```
|4 1 0
|0 2 5
|0 0 3
```

The first non-zero entry in each row is called a **pivot**.

If every pivot is equal to 1 and all non-pivots are equal to 0, the matrix is in **reduced row-echelon form**.

```
|1 0 0 0 = C1|
|0 1 0 0 = C2|
|0 0 1 0 = C3|
|0 0 0 1 = C4|
```

If you can put an augmented matix into reduced row-echelon form, you can
reverse the process to find the solution to the system.

```
1x + 0y = C1
0x + 1y = C2

C1 = x
C2 = y
etc...
```

**Gauss-Jordan elimination** is an algorithm to reduce matricies to row-echelon form.

1. Pull out any scalars from each row
2. If the first entry is 0, swap it with another row that has a non-zero entry in it's first column
3. Multiply through the first row by a scalar to make the leading entry 1
4. add scaled multiples of the first row to every other row in the matrix until every entry in the first column, other than the 1 in this row, is a 0
5. Go back to step 2 and repeat until finished (down a row and over a column)

## Addition and subtraction

Matricies must have the same dimensions to be added or subtracted.

Add and/or subtract the elements that overlap by row and column

## Scalar multiplication

You can multiply all elements in a matrix by a constant scalar factor

```
3 * |1 2| = |3  6|
    |3 4|   |9 12|
```

## Matrix multiplication

Dimensions and order matter. `A * B != B * A`! (matrix multiplication is not commutative)

To multiply two matricies you need the same number of columns in the first matrix as
you have rows in the second matrix.

When you multiply, you multiply each row by each column using the **dot product**,
so adding each ordered pair formed by each pair of entries:

```
2 6 = R1
3 1 = R2

C1 C2
4  2
1  0

product = R1C1 R1C2
          R2C1 R2C2

result = 4(4) + 6(1)   2(2) + 6(0)
         3(4) + 1(1)   3(2) + 1(0)

=> 22 4
   13 6
```

Find the dimensions of the product by taking the rows of the first and columns of the second:

```
2 x 3 * 3 x 6 = 2 x 6
```

#### Zero matrix

A matrix filled with 0s that does what you would expect

#### Identity matrix

A square matrix that looks like reduced row-echelon that does not change the value of any other matrix it is multiplied with

Notation `In for any int n where In = I(n x n)`

## Inverses

Recall:

`k * 1/k = 1`

1/k is the "inverse" of k and can be written as `k^-1`

So `kk^-1 = 1`

k multiplied by the inverse of k is 1.

This is also true for matricies:

`KK^-1 = I // the identity matrix`

You can find the inverse of a matrix with:

```
M^-1 = (1/determinant) * adjugate
```

The **adjugate** is just a copy of M with:

1. The first and last elements swapped
2. The last element of the first row and first element of the last row multiplied by -1

```
M      Adjugate of M
a b -> d  -b
c d    -c  a
```

The **determinant** is:

```
(first * last) - (lowerleft * upperright)

a b -> (ad) - (cb)
c d
```

Notice that if the determinant is 0 the inverse matrix is undefined.

A matrix with no inverse is a **singular matrix** rather than **invertible**.

### Solving systems with inverse matrices

Take this generic system for example:

```
ax + by = f
cx + dy = g
```

This can be represented as the coefficient matrix (M) multiplied by the column vector (x,y) set equal to the column vector (f, g)

```
a b * x = f
c d   y   g
```

New notation for same system:

```
 ->    ->
Ma   = b
```

(The arrows are there but I'm just going to use `Ma = b` for notes)

You can then solve for `a` by multipling M by it's inverse:

```
M^-1 * Ma = M^-1 * b

Ia = M^-1 * b

a = M^-1 * b
```

Remember `a` represents the column vector (x,y) which is the solution set to the system.
