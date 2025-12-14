+++
+++

# Principal Component Analysis

- Curse of dimensionality

It is difficult to fit data well when the dimension of features is large. (In a high-dimensional space, the data might become more and more sparse. With sparse data, there is an increased chance of over fitting.)

PCA can find the interesting features, defined by the features with the most
variance.

PCA helps you choose the axis that is most representative of the data. The new
resulting feature is a linear combination of original features:

```
Z[1] = theta[11]X[1] + theta[12]X[2] + ... + theta[p1]X[p]

Z[1] is the first principal component
X[p] is an original input feature
theta[p1] are the loadings (or weights) vectors
p is the total number of features
```

- method 1: preserve the maximum variance
- method 2: choose axis that minimizes the mean squared distance between the
  original dataset and its projection onto the axis

2nd principal component will be orthogonal to the first one.

## How to find

1. Define covariance matrix

```
C = 1/N-1 X^T*X
```

2. Eigenvectors of the covariance matrix are the principal components

## Explained variance ratio

Shows how much of the information can be explained by a number of components.

## sklearn

```python
from sklearn.decomposition import PCA
```

## PCR

Principal Component Regression combines PCA and linear regression to handle
multicollinearity and reduce over fitting in regression models.

Basically you perform linear regression with Y on the selected principal components.

```python
pca = PCA()
X_train_pca = pca.fit_transform(X_train_scaled)
X_test_pca = pca.transform(X_test_scaled)

n_components = 2
X_train_pca_reduced = X_train_pca[:, :n_components]
X_test_pca_reduced = X_test_pca[:, :n_components]

model = LinearRegression()
model.fit(X_train_pca_reduced, y_train)

y_pred = model.predict(X_test_pca_reduced)
```
