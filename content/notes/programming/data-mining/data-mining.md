+++
+++

# Data Mining

## Understand the data

1. Volume (how many data points)
2. Variety (what is the mixture of different data types)
3. Velocity (what changes are taking place in the data, how many copies do you
   have, is it temporal or does it show change)
4. Veracity (do you trust each data point)
5. Value (is this a useful way to spend time, is this data set worth it)

### Types of data

- Relational, transactional

Student records, bank accounts, purchases

- Sequential, temporal, streaming

Gene sequences, stock prices, sensor readings

- Spatial, spatial-temporal

Land use, bird migration, traffic condition

- Text, multimedia, web

News articles, audio/video/image, hypertext

- Graph, network data

Social network, power grid, co-authorship

### Define an Application Goal

- Market analysis, target advertisement
- Healthcare, medical research
- Science and engineering
- Security
- Government

Choose if you are trying to be descriptive, predictive, or prescriptive.

### Knowledge View

- Frequent pattern, association, correlation
- Categorization (similarity and differences between groups)
- Anomaly, outliers (fraud and extreme events)
- Changes over time

## Techniques

### Frequent pattern analysis

Identify frequent events, items, sequences, correlation, or structure.

### Classification

Build model to distinguish items into pr-defined classes. Need training data.

### Prediction

Make a numerical prediction (continuous value) like weather or stock price.

### Clustering

Work with no predefined classes, find intra-cluster similarity and inter-cluster
dissimilarity.

### Anomaly Detection

Search for events differing from the norm.

### Trend and evolution analysis

Changes over time with periodical patterns.

## Pipeline

A data mining pipeline exists to take data and turn it into knowledge to be used
in an application.

1. [Data understanding](./data-understanding.md)
2. [Data preprocessing](./data-preprocessing.md)
3. [Data warehousing](./data-warehousing.md)
4. Data modeling
5. Pattern evaluation (also performance evaluation of the model)

- Diverse data = diverse knowledge
- Quality data = quality knowledge

## Technique

- Frequent Pattern Analysis
- Classification
- Prediction
- Clustering
- Anomaly Detection
- Trend Analysis

[outlier analysis](./outlier-analysis.md)
[complex data types](./complex-data-types.md)

### FPA

`Apriori` algorithm used to find frequent sets and patterns using a data set and
mean support threshold.

Mean support multiplied by number of rows is lower bound for threshold number of
occurrences. List individuals, filter with bound, list pairs, filter, etc....

To handle big data, try partitioning, sampling, transaction reduction (skip if
current does not contain known frequent pattern).

Support counting using hash-tree. Use subset function for item specific
branching.

Also consider vertical data format, key is item set and value is transactions
that contain item set.

`FP-growth` algorithm - if `abc` is frequent and d is frequent in set of `abc`, then
`abcd` is frequent.

### Association Rule

- Given a list of transactions, item sets X, Y
- Association rule: `X => Y`
- Support: `P(X U Y)`
- Confidence: `P(Y | X)`

To measure correlation of numerical attributes, use correlation coefficient. To
measure the correlation of nominal attributes, use chi-squared test.

```
lift(A, B) = P(A U B) / P(A)P(B)
```
