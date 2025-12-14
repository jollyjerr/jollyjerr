+++
+++

# Data Preprocessing

Data quality metrics:

- Relevance
- Accessibility
- Interpretability
- Reliability
- Timeliness
- Accuracy
- Consistency
- Precision
- Granularity
- Completeness

## Cleaning

### Incomplete Data

- remove missing attributes
- manually fill in missing values
- automate a best guess (global constant, attribute mean, class mean)
- estimated value (regression, kNN, probabilistic)

### Noisy Data

- fit data with regression functions (linear, polynomial, logistic, ...)
- clustering (group data into clusters and detect outliers)

### Inconsistent Data

- Semantic-based checking (metadata, attribute relationships)
- Data understanding (statistical analysis and visualization)

## Integration

Combine data from multiple sources and develop strategies for entity
identification while removing redundant data.

### Correlation Analysis

Correlation _does not_ imply causality.

Numerical attributes: correlation coefficient

Nominal attributes: chi-square test

## Data Transformation

- smoothing: noise removal and reduction
- aggregation: cities => state (n to 1)
- generalization: city => state (1 to 1)
- normalization: feature scaling
- discretization: continuous => intervals
- attribute construction from existing ones

### Normalization

- Rescaling (min-max normalization)

```
v' = [(v-min)/(max-min)](max'-min')+min'

Ex: map [50k, 200k] to [0, 1]

v' = [(v-50k)/(200k-50k)](1-0)+0
```

- Mean normalization

```
v' = (v-mean)/(max-min)
```

- Standardization (z-score normalization)

```
v' = (v-mean)/stdev
```

### Discretization

Split or merge points into intervals. Use supervised or unsupervised class
labels.

#### Unsupervised

- Binning
- Histogram analysis

Equal width or equal frequency

- clustering analysis
- intuitive partitioning

#### Supervised

- pre determined class labels
- entropy-based interval splitting (lower entropy means purer class distribution)
- `X^2` analysis-based interval merging (lower `X^2` value means class is
  independent of interval)

### Data Reduction

- Dimensionality reduction (attributes)
- Numerical reduction (objects)
- Feature engineering (domain knowledge, decision tree induction)

Use forward selection (add the most informative attributes) and backward elimination
(remove the least informative attribute) for automated dimensionality reduction.

### Principle Component Analysis (PCA)

- n dimensional data
- use first few orthogonal vectors (principle components)

Wavelet Transformation: linear signal processing to store a small fraction of
the strongest wavelet coefficients. Remove resolutions with least information.

### Numerical reduction

Parametric: assume the data fits a certain model and estimate the model
parameters.

Non-parametric: do not assume model.

- Aggregation
- Histogram
- Clustering
- Sampling

#### Sampling

- Select a representative subset of data points
- Different sampling methods for different scenarios

EX:

- Random sampling (w/wo replacement to pool)
- Cluster sampling (focus on single class)
- Stratified sampling (gather from every class)
