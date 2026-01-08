+++
title = "Data Understanding"
+++

# Data Understanding

A data set is a collection of data objects, each described by a number of
attributes.

Attribute types can be categorical (nominal, binary, ordinal), numeric (discrete
or continuous), and more.

Figure out how big your data set is, the distribution of each attribute's values
(% of each category, numeric: central tendency, dispersion), compare across
attributes & data sets (similarity).

Central tendency: typical numeric value or the norm (mean, median, mode,
midrange, `(max - min)/2`)

Dispersion: how the values are spread out in your distribution (stretch and
squeeze). Range `max-min`, quartiles, IQR `Q3-Q1`, variance, standard deviation.

## Quick visualization

- Boxplot (show outliers)
- Histogram
- Quantile Plot (percentile comparison)
- Quantile-Quantile Plot (comparison of two quantiles)
- Scatter Plot (comparison of two attributes)

## Similarity

Dissimilarity matrix `i,j` is the distance between two objects. Can be binary or
a gradient.

### Binary

Symmetric - equal chance of Y or N
Asymmetric - more likely to be Y or N

Hamming distance - bits that are different

```
Two binary records, A and B.

q = count of attributes where Ai == Bi == true
r = count of attributes where Ai == true and Bi == false
s = count of attributes where Ai == false and Bi == true
t = count of attributes where Ai == Bi == false

Symmetric variables:

d(i,j) = (r+s)/(q+r+s+t)

Asymmetric variables (assuming t is the norm in this example):

d(i,j) = (r+s)/(q+r+s)

Jaccard coefficient:

sim(i,j) = q/(q+r+s) = 1 - d(i,j)
```

Jaccard is useful for sparse data

### Ordinal

Map values to ranks:

```
rif in {1,...,Mf}

zif = (rif - 1)/(Mf - 1)

Dissimilarity is the distance between the mapped values.
```

### Numeric

Measured by distance, like Minkowski distance (l_p norm)

```
p = 1: Manhattan distance
p = 2: Euclidean distance

d(i,j) = (|xi1-xj1|^p + ... + |xin - xjn|^p)^(1/p)
```

Useful for dense continuous data

Properties

```
d(i,i) = 0
d(i,j) >= 0
d(i,j) = d(j,i) # not always true with weights
d(i,j) <= d(i,k) + d(k,j)
triangular inequality (z < x + y when looking at triangle)
```

#### Cosine Similarity

Ex: text documents

Angular similarity of high dimensional and sparse data.

```
cos(x) = cos(A,B) = (A dot B) / (||A||||B||) = sumi Ai Bi / (sqrt(sumiA^2i))(sqrt(sumiB^2i))
```

Useful for sparse data

### Sequential Data, Time Series

- Euclidean distance
- Dynamic time warping
- Minimum jump cost

### Mixed Attribute Types

Weighted sum across attributes
