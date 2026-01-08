+++
title = "Visualization Tasks"
+++

# Visualization Tasks

https://tildeweb.au.dk/au597509/pdfs/taskds.pdf

When people explore data the learn new things and get motivated to explore in
different ways. It's important to predict these different visualization tasks.

Tasks: the reason why the vis tool is being used

Tasks let us separate what we want to do with data from its domain

Key questions when forming tasks:

- why is a task pursued (explore, confirm, present, enjoy)
- how is a task conducted (navigation, organizing, relation)
- what does a task seek to learn
- where does the task operate
- when is the task performed
- who is executing the task

## Design study methodology

Brainstorm -> Iterate x3 -> high fidelity mockup

Learn (explore literature)
Winnow (find strong collaborators)
Cast (identify collaborator roles)
Discover (identify tasks)
Design (mock up)
Implement (high fidelity mockup)
Deploy (iterate)

https://www.cs.ubc.ca/labs/imager/tr/2012/dsm/dsm.pdf
https://openaccess.city.ac.uk/id/eprint/22644/1/Criteria%20for%20Rigor%20in%20Visualization%20Design%20Study.pdf

## Stages of visualization perception

### Pre-attention

The gist: featural and semantic information gathered at a glance

- spatial envelop: overall structure
- ensemble codes: statistic properties of the visual scene

Can be approximated by blurring an image.

Gestalt Principles: detecting spatial properties, a whole is different from the
sum of it's parts

- law of similarity: similar items are interpreted as part of the same group
- law of proximity: items that are close together are part of the same group
- law of enclosure: items contained in the same shape are part of the same group

Pop-Out: objects can attract attention immediately, harder to design when you
have more noise.

### Attention and search

After 250-500ms attention starts at the pop-out element.

- bottom up: features guide what I look at
- top down: knowledge guides what I look at/for

How we represent data effects what conclusions people make.

Change Blindness: bar chart races rely on working memory which you cannot trust
is constant and we can only focus on a few things.

Visual Search: scan image to find items of interest

- salience: how much something visually stand out
- separability: how easy to separate channels
- visual clutter: hard to perform tasks, minimized with aggregation and
  organization

## Uncertainty and Decision Making

You can add error bars to show areas of unknown in the data.

- variance in how data was collected
- effects of transformations performed on the data
- the data's suitability for the intended application

Sources of uncertainty:

- measurement uncertainty
- model uncertainty
- decision uncertainty

Standard error, confidence interval, standard deviation, etc...

Within the bar bias: people assume data points in shaded areas are more likely
even if that is not mathematically true because the shaded area is average or
whatever. You can use gradient plots or violin plots or fuzziness/lightness/hand-drawn
to show uncertain data.

Semantics and context need to be considered because data has bias and can be
harmful depending on how it is interpreted.

Design friction: force people to slow down and interrogate conclusions they draw

Implicit Uncertainty - have user predict and show how they were incorrect.

Feel how visualization mirages imply biased conclusions.

https://arxiv.org/abs/1908.01697
