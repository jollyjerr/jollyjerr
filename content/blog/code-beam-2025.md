+++
title = "Code BEAM America"
subtitle = "What I learned"
date = "2025-03-07"
draft = false

[taxonomies]
tags = ["tech", "elixir"]

[extra]
pinned = false
+++

# What I Learned At Code BEAM America

This week the BEAM community proved to me that there is remarkable talent and
energy leading innovation with Elixir, Erlang, and other BEAM based
tools. Not only was every presentation excellent, I was also consistently
impressed with the technical depth of conversations that I had and the general
level of expertise of all attendees. I loved how many presentations used
live prototypes to show off their ideas, it made the energy of the conference
very electric and the benefits of this technology concrete for all to see.

## Main Takeaways

### Working demos are powerful

A real MVP that solves the hard part of a problem well is more valuable than any
document, blog post, idea, or conversation. The most exceptional talks all
leveraged live demos or some form of working code, and they undeniably presented
the benefits of whatever idea they were talking about.

Many talks also mentioned how working demos have changed the direction and
culture of a company because it is so easy for people to make progress after
something is working.

I started to realize that many MVPs fail when they solve the easy part of a
problem and assume the hard part can be solved later. The most successful
demos were very basic but all energy had been focused on the real challenging
technical feat.

### Stand on the shoulders of friendly giants

Many teams struggle to maintain systems over time that depend on too many
packages. Other teams waste valuable time rebuilding complicated subsystems and
end up with second class versions of popular open source libraries.

I learned that the most successful teams over the long term carefully select a
few key dependencies that they are prepared to partner with over the years. This
results in an optimal velocity that limits tech debt while maximizing leverage
of existing technology.

## Other notes

Every talk I attended was incredible and I encourage you to go check out what
sounds interesting from the program when they are made available online. Here
are the notes I felt compelled to write down while I was listening:

### Designing LLM Native Systems

> Sean Majiarity

- LLMs can be integrated best when using structured outputs, this limits the
  exposure to failure.
- Think socially: do not let an LLM break someones trust in your business.
- LLMs negatively shift the burden of "systems thinking" onto the reviewer,
  especially in code review situations. I liked this concept of identifying the
  important work of a developer as systems thinking.
- Engineers should share LLM chat history as context for code changes.
- Do not offload your strengths onto an LLM, offload the unimportant work.

### Investigating Production Issues

> Jenny Bramble and Adrian Dunston

- They mentioned the book `Accelerate` for CD which looked good.
- Development is expansive while debugging is restrictive.

### Phoenix sync with ElectricSQL

> James Arthur

- Honestly need to build some stuff with `Phoenix.Sync`. It solves a lot of
  problems really well.
- He also mentioned `linear project management` which looks like a cool Jira
  alternative.

### Fault-Tolerant Machine Learning Operations

> Chelsea Troy

- Model performance measurement gold standard is user feedback.
- Make sure production data is always similar in distribution to training data
  over time.
- Ask specific and evocative questions for better feedback.
- Telemetry interpretation can be a guessing game.
- Make it as low effort as possible to run experiments and understand your
  impact.
- Classic supervised models can find highly important features which you can
  break down into use cases.

### AI for Worker Collective Action

> Saiph Savage

- An important binary classification problem is "isolated vs systemic" for
  issues.
- Surveillance systems are depressing, combat with empowering users to observe
  the platform.

### The Socio-Technical Elements That Make Good Platforms

> Charity Majors and Fred Hebert

- An RFC should be easy to write because you have _already_ proven the idea.
- Distribute system understanding and have team members present their
  understanding to reach consensus.

### Other random notes

- Look at `Boundaries` lib.
- Break Ecto code into structure/mutation/query
- Look at `Machete` and `Exunitspan`.
- Read The Art of Creativity
