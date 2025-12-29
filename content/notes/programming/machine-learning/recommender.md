+++
+++

# Recommender System

- Popularity: recommend most popular to everyone
- Content based: use hand engineered attributes to associate similar content

Music genome project from Pandora: https://www.pandora.com/about/mgp

- Collaborative filtering: recommend items chosen by similar users

Can suffer from _cold start_ problem, need some info about the user to recommend
anything. Scales with latent factor modeling and supervised models.

## Similarity Measures

Data given in utility matrix - normally sparse. You can impute with the average
rating for each user.

Get data: buy or not buy, explicit ratings.

User-user similarity: users are similar if they buy the same items.

Item-item similarity: items are similar if they are bought by similar users.

- Cosine similarity

```
a and b are vectors with buy or rating info for each item

cos_sim(a, b) = a @ b / ||a|| ||b||

||a|| = sqrt(sum a[i]^2) # the magnitude

result: -1 to 1
```

- Jaccard similarity

Good for binary data like buy or not buy.

```
jaccard(a, b) = S[a] intersect S[b] / S[a] union S[b]
```

- Distance based: Manhattan, Euclidean, Minkowski
- Pearson Correlation

## Scale

Data is often very large and very sparse, so time complexity of these operations
can become a huge problem at scale.

It can be helpful to reduce the dimensions of data first or cluster multiple
items into one "item" that represents a cluster.

## Matrix Factorization

```
m*n = m*d x d*n
```

Factor a utility matrix into smaller matrices. This is useful for getting
smaller relationships out of a large data feature set - discovering "trends".
Typically do two or three matrices.

Another great use case is text mining - extracting topics from documents of
text.

### Singular Value Decomposition

Decompose `A` into `U Sigma V^T`. `m*n => m*d,d*d,d*n`.

Related to Eigen Value Decomposition (EVD is a special case of SVD).

```
Av = lambda*I*V

v(A-lambda*I) = 0

V=0

|A-lambda*I| = 0
```

If `A` is symmetric, you get singular value decomposition as defined above.
Eigen Value Decomposition requires square shaped matrix, but SVD is a
generalization that handles any matrix.

```python
np.linalg.svd
sklearn.decomposition.TruncatedSVD
```

#### Power Iteration Method

Look this operation up, basically use this to do SVD if you have a computer.

Obtains each Eigen vector one at a time via convergence.

Initialize `V` to any random value except the null value.

For every iteration `k`, update `V[k+1]` to `AV[k]/||AV[k]||`.

### Non-negative Matrix Factorization

Things to consider:

- Latent dimension: number of topics or genres
- Objective/Loss function
- Regularization and optimization

```
X[ij] = W[i] * H[j] + (some error E)

X[ij] is random variable

Minimize loss function
```

L1 and L2 loss are useful for data with lots of positive values like images.

KL loss is useful for data with lots of zeros.

If the error (noise) is gamma distribution, use IS Loss (Itakura-Saito).
