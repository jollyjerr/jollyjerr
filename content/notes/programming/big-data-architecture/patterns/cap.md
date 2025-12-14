+++
+++

# The CAP Theorem

Any network shared data system can have at most two of the three properties:

1. Consistency: Data across nodes is the same

Each server returns the right response to every request. Also called atomic
consistency: Each operation appears to have been completed in a single instant.
All atomic operations complete exactly together across every node.

2. Availability: Data is highly available for update operations

Each request eventually receives a response

3. Partition Tolerance: The network infrastructure is tolerant to network partitions

The system tolerates communication failure and can handle nodes going down.

Many argue that it is not realistic to sacrifice partition tolerance in modern
applications, so it is a trade off between consistency (CP) and availability (AP)

## Proof

By contradiction.

Assume G1 and G2 have an initial state of 0 and are necessarily partitioned such
that they cannot communicate

Operation alpha writes 0 -> 1, then reads the value

Operation alpha is executed on one or both G1/G2

Because G1 and G2 cannot communicate, alpha on Gn writes 1 but cannot know to return 1
or 2 or 3 or 4... and must guess or fail to reply

## Strategies

#### Remove the partition

IE: have a single database

However, if your db crashes and you are not partitioned then the entire service
is down - aka not tolerant

#### Replicated state machine

Each server agrees on the order operations take place

Agreement has been proven to be impossible and will lead to infinite runtime

#### Synchrony

Every process runs at exactly the same rate

#### Partitioning

Make some parts of your system consistent and some parts available. This has to
fluctuate with the system at hand

## Considerations

The CAP theorem is especially real in mobile networks where packet loss is
frequent and slow messages are common.

## ACID:

Acid properties are geared toward consistency (traditional databases follow this
model):

Atomicity - If the focus is on availability, all partitions should use atomic operations.
Consistency - Transactions pre-serves all the database rules.
Isolation - Isolation requires that operations be performed on one partition at a time.
Durability - Recovery is possible and bad operations can be detected and corrected.

## BASE

BASE = basically available

All systems should always give a response - even if that response is "we failed"

## Resources

https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf
https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf
https://markburgess.org/blog_cap.html
