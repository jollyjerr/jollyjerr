+++
title = "Visualization Evaluation"
+++

# Evaluation

How to tell if a visualization is working.

1. assess the domain problem (do others agree with assumptions)
2. determine the data and tasks (can people build the knowledge they need)
3. choose the right encodings (can people see the patterns they need correctly)
4. map data to encodings via algorithm (does the algorithm perform correctly)
5. design interactions to explore data (can people quickly and intuitively
   interact with the data)

## Holistic Evaluation

- What new knowledge can my users gain? (insight based evaluation)
- Does my visualization work better than other methods? (experimental evaluation)

### Insight-Based Evaluation

Quantify knowledge gained by a visualization, similar to ethnography.

### Experimental Evaluation

Run a controlled study to measure how quickly and accurately people can complete
tasks by using different visualizations.

## Insight

The fundamental unit of measurement when evaluating data visualizations. Also
the purpose of visualization.

Unit of discovery - what does the tool enable someone to do?

- complex: involve all or large amounts of the data in synergistic ways
- deep: builds up over time, accumulating and building on itself
- qualitative: can be uncertain and subjective and have multiple levels of
  resolution
- unexpected: often unpredictable, serendipitous, and creative
- relevant: deeply embedded in the data domain and connecting to existing
  knowledge

Two types:

- Knowledge-building insight: substance that accumulates over time
- Spontaneous insight: discrete event of discovery

Metrics for Insight-Based Evaluation:

- time to insight
- number of insights
- importance of insights
- depth of insights
- system adoption rate (people electing to use a system)

## Qualitative Evaluation

Collect quotes, use cases, and anecdotes that help illustrate the effectiveness
of your solution.

- systematic surveys: read and assemble knowledge on your target topic and
  existing solutions
- semi structured interviews: conversation with collaborators
- think aloud: work with collaborators while using your solution on their own
  data
- journaling: ask collaborators to use your tool and note their observations

Use insight as key measure during these processes. Document as much as possible,
including metadata about your participants.

#### Systematic Surveys

- understand the problem and prior solutions
- determine what expertise is necessary for a holistic solution
- spec key tasks, datasets and other considerations

#### Semi structured interviews

- figure out the problems that experts see as most impactful
- decide who will best serve in which roles
- verify your understanding of the target problem
- get focused, fluid feedback about what is and isn't working

#### Think aloud Studies

- Establish limits in current solutions and key workflows
- Get direct feedback on low-fi prototypes grounded in design
- Identify strengths and weaknesses of the current design

#### Journaling Studies

- Give your collaborators the tool and let them play with it. Make sure to ask
  them to document things like interesting findings or confusing settings/bugs
  with screenshots

## Experimental Design

More precise than insights, but less about the domain. Measure how people
complete a specific set of tasks under different conditions.

1. Form a specific question
2. Generate a set of falsifiable hypotheses
3. Determine your independent (what you change) and dependent (what you measure)
   variables.
4. Build your stimuli & experimental infrastructure (task framing, how to
   complete task, data collection, etc.)

- experimental tasks: statistical, comparison (which approach is more effective), decision making (choose an approach for a given scenario)
- experimental stimuli: the items people use to complete the tasks (where does data come from?)
- independent variables (each participant can see one, all, or some conditions)
- dependent variables: things to measure (time, accuracy, number of interactions, etc.)
- control variables: things that might affect your result (order, etc.)

### Analyze your data

Descriptive statistics:

Use measures of the data distribution to estimate whether there's differences
between independent variables.

Inferential Tests:

Use statistical tests to estimate the likelihood that your observed differences
reflect true difference.

## Evaluation Trade Offs

Qualitative:

- holistic input
- real-world use
- richer data
- less controlled
- slower
- less precise

Experimental

- highly precise
- more generalizable
- easier to understand
- less specific
- less detailed
- more abstract

### Formative Evaluation

Test our understanding of the problem space and gather insight into the user's
processes. Measure how well different designs optimize for a given set of tasks
or goals.

Area Survey: what are the core tasks and needs of the problem
Preference Mining: what design do people like

### Summative Qualitative Evaluation

Measure how well a given tool supports a domain. Provide a measure of
performance against a target baseline.

Think aloud: what are users' impressions of a tool
Horse race: which design is most efficient for a set of tasks
popular vote: what design do people like best
