+++
title = "Prediction Models"
+++

# Prediction models

Prediction modeling is a statistical analysis process that analyzes patterns in
historical data and attempts to predict future events.

Machine learning != predictive modeling, rather predictive modeling is a statistical
analysis technique that _uses_ machine learning models.

Machine learning models come in two primary types:

- Unsupervised: process unlabeled data and use a large selection of techniques
  like neural networks
- Supervised: require labeled data sets and use traditional statistics

## Key Vocab

- True positives are when you predict an observation belongs to a class and it actually does belong to that class.
- True negatives are when you predict an observation does not belong to a class and it actually does not belong to that class.
- False positives occur when you predict an observation belongs to a class when in reality it does not.
- False negatives occur when you predict an observation does not belong to a class when in fact it does.

## Models are code:

When developing models, use notebooks at the start but quickly get the model
into the software system to integrate it.

1. Create an interface your model will implement
2. Write unit tests for your models (keep them fast)
3. Write reports to test extreme examples on your model
4. Use your model in integration tests

## Model evaluation

See also: https://www.jeremyjordan.me/evaluating-a-machine-learning-model/

Supervised prediction models typically accomplish one of three tasks:

- Regression: Predict an actual value, like gasoline prices
- Classification: Categorize a result, like 'true/false' for binary classification
- Ranking: Classify outcomes in a hierarchy

#### Accuracy

All of these can be evaluated with basic accuracy, but it is not the best technique:

```
number of correct predictions / number of total predictions
```

#### Precision (classification and ranking)

Precision calculates the number of _predicted values_ that are relevant:

```
true positives / (true positives + false positives)
```

#### Recall (classification and ranking)

Recall assesses how well the model was able to find relevant _outcomes_:

```
true positives / (true positives + false negatives)
```

#### F1 Score (classification and ranking)

f1 score is the "harmonic mean" between precision and recall:

```
2 * [(precision * recall) / (precision + recall)]
```

#### Mean Squared Error

Average of how much the predicted values (xi) differ from the true values (yi):

```
1/N * sum[1 to N](xi - yi)^2
```

Sometimes this result is square rooted if it is a large enough value:

```
Root MSE = sqrt(MSE)
```

Or you can reduce the penalty of large prediction errors by finding the Mean
Absolute Error:

```
1/N * sum[1 to N]|xi - yi|^2
```

#### Confusion Matrix (all types)

A helpful matrix is to write out all the types of predictions and have columns
for positive or negative predictions.

## Datasets

It's crucial to have a balanced dataset. If a model is able to overgeneralize
based on structures and relationships in one dataset, it becomes biased. Bias
can be measured as the difference between the average prediction of the model
and the correct prediction.

#### Underfitting

The model makes oversimplified generalizations on the data and does not pay
enough attention to the specifics of new data.

#### Over fitting

The model is specific to the training dataset and cannot generalize to new data.

### The Train/Test/Validation Split
