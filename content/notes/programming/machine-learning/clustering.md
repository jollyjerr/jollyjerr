+++
title = "Clustering"
+++

# Clustering

- Find subgroups among observations.
- Get insights or run predictions.

Clustering is used to find groups to target adds. Also used in genomic research.

## K means clustering

- Centroid: average position of a cluster
- Distortion: the mean of square distance
- Inertia: the sum of the square distance

K is a hyper-parameter - the number of clusters. Plot elbow plot to find what
value of k reduces distortion the most (but use lowest possible).

Vulnerable to curse of dimensionality. PCA preprocessing helps.

Given enough time, K-means will always converge (centroids stop moving per
iteration)

## Hierarchical clustering

- Does not need to know K in advance
- Use (di)similarity or distance metric
- Use Dendrogram
- Deterministic
- Greedy

Choice of linkage type influences how clusters are formed.

- complete
- single
- average
- centroid
- ward

Measure distance between clusters and merge if shorter than a threshold.
