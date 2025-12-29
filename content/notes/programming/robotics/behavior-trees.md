+++
title = "Behavior Trees"

[extra]
navname = "notes"
+++

# Behavior Trees

Behavior trees are less formal than [finite state machines](./state-machines.md), they are more of a software engineering tool that expands on finite state machines.

They are setup like a tree, the root node is the highest level goal and you
traverse leafs.

Many game engines have replaced state machines with behavior tree
implementations.

Ex: `pyTrees`.

## Sequence Nodes

A sequence node has multiple sequential leaf nodes. You walk the sequence, and
if one leaf node fails the whole sequence node goes to a failed state. If they
all succeed the sequence node succeeds.

## Selector Nodes

Executes leaves from left to right until the first one succeeds - try different
things in decreasing priority.

## Parallel Node

Execute tasks in parallel, only succeed if all children succeed.

## Decorators

Nodes with special behavior that apply to any child or children, such as
"repeat".

## Blackboards

- Shared memory
- Controlled read and write behavior

## Real-time Execution Model

- Introduce new state RUNNING
- Return to last RUNNING state after each tick
- We can now implement real-time reactive behaviors

## Advantages

- Forces engineers to consider failures early in the process
- Composability (because SUCCESS, FAILURE, and RUNNING gives a high level
  general interface for all nodes)
