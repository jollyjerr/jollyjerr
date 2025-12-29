+++
+++

# Interval Scheduling

Idea: reserving a conference room.

Every reservation is in an interval from start to end. There are time overlaps
where reservations conflict with each other.

```
request = [[start, end],[],[],[],[]]
```

You have to maximize the number of meetings that takes place by selecting which
requests you approve. No overlapping meetings can be scheduled.

This is one example of a large category called **contention issues** that are
solved by scheduling.

## Approach

Being greedy on the smallest meeting is an obvious greedy approach but it is
non-optimal

Optimal approach:

1. Sort all requests by ending time
2. Schedule the one that ends the earliest
3. Delete all requests that conflict with the scheduled one
4. Repeat
