+++
+++

# Service Availability

> Hope is not a strategy

Services should aim for high velocity feature development with aggressive SLOs
(service level objectives) for availability and responsiveness. Almost all
services should aim for the 4 nines (99.99) or 5 nines (99.999) percentage
availability because there are enough complications around your service that
users will not tell a difference between 4 nines or 100% while 100% will be way
more work for your team. Some systems like rockets and pacemakers need 100%.

99.99% availability allows for one 20-30 min outage with a few small partial
outages per year.

Services malfunction in two situations:

1. The service itself malfunctions
2. One of the services critical dependencies malfunctions

Availability is a function of the frequency and duration of outages:

1. MTTF mean time to failure
2. MTTR mean time to repair
3. Availability = MTTF / (MTTF + MTTR)

### Rule of the extra 9

If you are aiming for 99.99% availability, all your critical dependencies should
offer 99.999% availability. If they do not, you need to use some strategy to
increase the effective availability of your dependency (capacity cache, failing
open, graceful degradation, etc...)

Every service should that has dependents should publish the math behind their
availability metrics and be conservative on what you are really prepared to
offer other services.

### Error budgets

Once you have an availability goal, you can do the math backward to determine
your error and response time budgets. You can then break those budgets over a
month or quarterly sliding window, and if you have spent your budget for the
month (say, 6min of partial outage) you freeze new feature development until the
budget resets.

### Strategies

1. If you can make a critical dependency non critical in any way - do that
2. Reduce shared infrastructure, including open source libraries that may be a
   critical dependency
3. Distribute and duplicate workloads geographically so some nodes can fail
4. Automate fail over and rollback so no humans need pinged even when things go
   wrong
5. Design systems to be async so waiting on a response is not a critical
   dependency
6. Make troubleshooting as easy as possible with monitoring tools, but automate
   the system to be mostly available while someone is looking into the issue
7. Test how your system degrades when it is overloaded. Overload tests
8. Design systems to scale 10x the initial capacity expectations without
   significant changes
9. Treat batch data jobs as their own system, and validate them in canary
   environments first

All batch operations can be solved with event driven architecture and vice versa

- consider both if you are considering one.

## Resources

https://storage.googleapis.com/pub-tools-public-publication-data/pdf/1eaece8509a9596255024b293cf0cba76ebd5534.pdf

https://static.googleusercontent.com/media/sre.google/en//static/pdf/reliable_data_processing_with_minimal_toil.pdf
