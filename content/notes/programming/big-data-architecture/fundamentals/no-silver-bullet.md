+++
+++

# No Silver Bullet

> Fred Brooks

All software developed is made up of two types of tasks:

- essential

Fashioning together conceptual structures into an abstract software entity.

- accidental

Mapping the abstract entity into physical constraints of languages and machines.

Most engineers spend the majority of their time on the essential, which implies
there is no longer any order of magnitude improvements available by shrinking
the time of accidental tasks - even to zero.

The hard problems of software development are the essential development of the program's "essence".
Conceptual errors in the abstract specification of a system are a much bigger error than a syntax
error or slow algorithm implementation.

## Essence

A software program's essence is made up of:

- complexity
- conformity
- changeability
- invisibility

### Complexity

The essence of a program is complex because, unlike in all other human
construction, there are no duplicated parts. Ideally all duplicated parts have
been collapsed into one subroutine - so everything that is left is unique.

Also software is complex because the number of states a system can be in grows
above linearly as the system grows and become impossible to enumerate or
understand as a single person.

### Conformity

Physics likely all conforms to some unifying theory or principles. Software, on
the other hand, is forced to conform to a vast ocean of arbitrary past
decisions. This introduces complexity that cannot be simplified in the scope of
the current system.

### Changeability

Software is cheap to change, so it is forced to change faster than any other
engineered product.

### Invisibility

You cannot actually represent the truth of software in any other way but the
code itself, so we can never have true blueprints or diagrams that are accurate
and complete. This makes communication especially hard.

## Accidental breakthroughs

Past breakthroughs have improved productivity by reducing the accidental tasks
associated with programming.

- High level programming languages removed system complexity that was never
  inherent in the program in the first place
- Time sharing at the cpu level allowed immediacy on systems running multiple
  tasks, reducing the time waiting or idle time
- Unified programming environments (Unix) provide consistent and integrated
  platforms to make progress on

## New breakthroughs

The author dislikes many ideas, here are some:

### AI

The author argues that AI fundamentally cannot give us order of magnitude
gains in productivity because their power, in the case of inference systems,
grow with the scale of input data - not the algorithm itself. All in all the
hard part of software is deciding what to say, not saying it. AI _will_ help
communicate expert knowledge to less experienced programmers.

Similarly, the author argues that automatic programming only works for
problems with favorable properties and are characterized by few parameters.
Also if a solution is known already and many examples are available.

### Program verification

Program visualization and verification adds more work rather than speeding up
the process. Perfect verification just proves a program meets a specification,
but the hard work is still coming up with the specification in the first place!

## Promising Essence improvements

time of a task = SUM(frequency \* time)

- buy vs build
- rapid prototyping and requirement refinement (you cannot plan products, you
  must test specific changes vs the market/need)
- grow, not build, software (like biology, grow to fit the exact environment
  with small changes over time)
- great designers (engineers) produce order of magnitude more functionality with
  less work
