+++
title = "Non Functional Requirements"
+++

# Non Functional Requirements

If functional requirements describe what a system is supposed to do,
non-functional requirements describe how a system is supposed to be.

Non functional requirements can be split into two types:

1. Execution qualities - like security and usability that are observable at run
   time
2. Evolution qualities - like testability, extensibility, and scalability

Many systems technically "work" but deliver a very poor user experience because
they have no definition of non-functional requirements or goals, so the system
"feels bad" for no specific reason and there is nobody able to improve it.

## Performance budgets

One way to turn non-functional requirements into specific targeted goals is with
performance budgets. Measure how fast something currently operates under load,
or how easily you can add new features, or how scalable the system is, and set
specific targets and specific limits to how poor those things can be before
impacting your ability to move forward.

Non functional requirements should be explicit and testable as part of your ci
system and canary environment.

### Source

https://tangowhisky37.github.io/PracticalPerformanceAnalyst/pages/spe_howtos/howto_define_non_functional_requirements/
