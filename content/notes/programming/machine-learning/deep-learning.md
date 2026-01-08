+++
title = "Deep Learning"
+++

# Deep Learning

This is "the book" https://www.deeplearningbook.org/

## Perceptron

Deep learning neural networks are loosely based on neurons in biological brains,
but are developed my mathematics and statistics.

A perceptron is on "neuron" with input from others, with weights, and an activation function
to control the output.

### Perceptron rule

```
f(sum_j W_j - X_j + b)
```

Weights are the normal vector for the decision boundary.

1. Cycle through training data
2. Update W on misclassified instances
3. (positive misclassified as negative) `W = W + X_i`
4. (negative misclassified as positive) `W = W - X_i`

### Delta rule (gradient descent)

```
W_j <- W_j + deltaW_j
```

### Linearly inseparable cases

Like `XOR` gate.

Can be solved by combining neurons - making layers.

Decision boundaries draw shapes in the vector space.

Typically the activation function is the same for a full layer of a neural
network.

Called MLP - can approximate any nonlinear function.

### Back propagation

Use chain rule to update inner layers from error.

Real implementations use the "computation graph" with "autodiff".

## Optimization Methods

Find a set of optimized weights which minimize the error (or loss function) at
the output.

Hyper parameter tune the learning rate.

### Stochastic Gradient Descent (SGD)

Use mini batches of data to each weight to update it's calculation. Mini batches
should be reasonable size to achieve best training efficiency.

Estimate gradient with SGD gradient formula from batch and corresponding
targets.

Introduces problem: "learning rate scheduling".

Adding the momentum "moving average" can make it faster. Makes learning converge
on optimum faster.

Read `keras` documentation on SGD for more information on specific
implementation.

Nestrov momentum does early correction on gradient.

Also check out learning rate normalization techniques like Adadelta.

## Convolutional Neural Network

Process 2D data like images, use filters (or kernel matrix) to do operations
across the whole grid. Output is a feature map (locations that strongly activate
the specific filter.)

Pooling (often max pool) reduces number of pixels to identify features and not
over fit. Also convolutions like "stride" can reduce spatial dimension.

Images are a 3D array, depth is the color value. A filter is a 2D array and
assigns a value in the middle of it's area as it scans the image and does matrix
multiplication.

Hyper parameters are:

- size
- number
- padding
- stride

The weights are just parameters and will be found during training.

It's better to layer many filters than have less larger filters.

Successful models:

- VGGNet
- GoogLeNet/InceptionNet
- ResNet

Key tuning parameters in training:

- Optimization method
- Learning rate, momentum
- Number of epochs
- Regularization

Look at validation loss during training, at a certain point the training error
goes down but generalization errors increase, this is when over fitting has
started. Train while validation and training accuracy continue to increase.

Loss should continue to go down as you add more epochs.

### Transfer Learning

`multi GPU + DeepCNN + Large Dataset = (2-3 Weeks Training Time)`

Transfer learning is where you start with a pre-trained model and adapt it or
fine tune it by training on a data set for your specific task.

## Recurrent Neural Networks

Makes it possible to handle sequential data.

RNN cell instead of perception. Take input give output but also allow cell to
input to itself and effect its own state. This behavior was inspired by how
brain cells behave and pass information.

Each time step the weights will be the same, but input and output will be
sequential.

The weights can be updated by aggregate loss function results of all outputs in
time step - called back propagation through time. Use time chunks to handle data
streams. This can lead to vanishing/exploding gradient problem.

Remedy that issue with:

- `ReLU` activation function.
- Truncated BPTT
- Clip gradient
- Learning rate scheduling
- adding residual connection
- change architectures - LSTM, GRU

LSTM cells have two hidden states, short term and long term memory. The short
term memory slowly updates the long term as depended by four gates.

Gated Recurrent Unit handles short term and long term memory with only three
gates.

## Unsupervised Deep Learning

Take advantage of the majority of data (supervised data is expensive).

### Auto encoders

Condense information into a feature space so it can be recreated.

The coding is a latent feature space. You can layer layers of encoding and
decoding space, but only have one coding space.

Variation Auto encoders: produces two latent vectors which represent the mean and
variance of the model. Two points of Gaussian randomness is introduced, so the
generative layers have some randomness - causing "creativity".

Loss function: `VAE Loss = Reconstruction loss + KL loss`

### Generative Adversarial Networks (GANs)

Trained by adversarial training, a discriminator model is trained to judge the
output of the generative model to tell the generative models work is real or
fake. Generative models goal is to trick the discriminator while discriminators
goal is to identify the generative models flaws.

Uses mini-max loss on generator, BCE loss on discriminators. There are many
other approaches.
