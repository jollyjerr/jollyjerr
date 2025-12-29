+++
+++

# Theory Of Computation

https://math.mit.edu/~sipser/book.html

https://youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY&si=Spd2ENt255uFU6IO

The theory of computation is closely related to algorithms and deals with
determining if a problem is solvable, provably not solvable, or has an unknown
solvability status using computers.

#### Decision Problems

Decision problems are any problem where a function determines a yes/no response.

Some non decision problems are: sorting, factoring a number, etc....

But, for many problems you can create a decision problem version of the problem.

CS is really interested in decision problems because the answer is 1 bit and you
can define a set of all inputs that give the yes answer - the "language" (a
subset of all binary strings)

So an algorithm can be thought as a box that given some string x tells you if x
belongs to some language l. A Turing machine can do exactly that - logic box
reads from a tape and at some point says yes or no.

All RAM based computer actions can be captured by a Turing machine. Same with
lambda calculus, quantum, etc...

Church-Turing thesis: Turing machines are a universal model of computation

Psudo code normally can always be realized on a Turing machine.

So Turing machine defines the boundary of what can be solved on a computer.
(decidable problems)

## Undecidable Problems

Cannot be solved by any physical device (that we have today)

EX: halting program

`input program -> compiler -> does this program have an infinite loop`

- Diophantine Equation Problem

## Decidable Problems

"Large" inputs can be solved in "reasonable" time, grouped somewhat arbitrarily
to algorithms that run in polynomial time in size of input.

### Polynomial Time Problems (P)

A subset of decidable problems.

'O(n^c) for const c'

Most polynomial time algorithms we know of have small exponents.

### Known Exponential Time

Some problems have been proven to have no solution under exponential time.

### Non Deterministic Polynomial Time (NP)

Answer can be checked in polynomial time but no known algorithm can calculate
the answer in polynomial time. (a certificate "hint" with length polynomial to
the length of input x can be added so that x can be checked in polynomial time
(normally the certificate is just the answer if the algorithm had ran on x))

Example: is there a path from S to T on a weighted graph with weight less than
or equal to G?

The yes answer has a "certificate" - because I can provide an example path and you can
easily tell me if the example passes.

"Certificate" - the check itself can be done in polynomial time

Every problem in P belongs to NP. We are not sure if there are problems outside
of P that belong to NP exclusively.

More examples:

- Three coloring problem
- Boolean satisfiability problem
- Traveling salesman problem

#### What is non deterministic?

Give a computer an extra power of clairvoyance so that it can guess the
certificate. This computer is non deterministic, and quantum computers have a
little bit of ability like guessing. Classical computers have to iterate all
possibilities to produce the guess, like running the algorithm in the first
place.

So, these algorithms **are** polynomial time on a non deterministic computer. We
just don't have one.

#### NP Completeness

Based on the concept of "reductions", where you use one algorithm as a
subroutine for another and introduce a "converter" to solve the larger
algorithm.

From this conclusion, you can understand good and bad news. If you know B is
polynomial, then A is polynomial. If you know A is not polynomial, then you know
B is also not polynomial. The direction of provability is tricky so be sure to
think through it before proving a problem can be reduced to another problem.

A problem (A) is NP Complete if

- A is in NP
- Every problem in NP is polynomial time reducible to A (if A is polynomial then
  all NP problems are so P == NP)

So, if we could prove either A is polynomial or is definitely not polynomial we
would know if NP == P right away.

We know of many NP complete problems (computers and intractability has many
examples).

Example: 3-CNF-SAT

#### NP Complete Proofs

- 3-CNF-SAT
- K-Clique
- K Vertex Cover Problem
- 0-1 Integer Linear Problem
- Traveling Salesperson

These can all be reduced to each other but I'm not going to take all the notes
here.
