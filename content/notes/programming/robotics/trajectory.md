+++
title = "Trajectory"

[extra]
navname = "notes"
+++

# Trajectory

## Two Points

Euclidean distance:

```
p = sqrt((x[g] - x[r])^2 + (y[g] - y[r])^2)
```

## Proportional Control

Compute a output variable from the error of some target and current measured
value.

In 2d, consider a gain constant for distance of 0.1 and for heading of 0.5, the
resulting velocity and speed would be:

```
v = 0.1 * (5m) = 0.5 m/s
w = 0.5 * (10deg) = 5deg
```

For a robot that is 5 meters away and 10 degrees off the desired heading angle.

You can then calculate wheel speeds:

```
vl = v - (w * d/2)
vr  = v + (w * d/2)
```

For desired linear velocity v and angular velocity w.

## PID Control

Proportional controllers can have rough accelerations or motions which can be
improved by adding an integral and derivative component.

The integral term is proportional to the error being added up over time, the
derivative term is proportional to the change of the error between two
consecutive control steps.

This will eliminate steady-state errors.

Use integral windup prevention to hold error to integrate in finite buffer.
