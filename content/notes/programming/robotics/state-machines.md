+++
+++

# Reactive Behavior and State Machines

Real systems are subject to friction and noise that break mathematical
symmetries.

Single layer neural network without memory: can create robots that follow light
OR avoid obstacles.

With memory: change behavior based on events.

## State Machine

- S: finite set of states, initial state s0
- E: input alphabet
- a: state transition function a: SxE -> S
- F: set of final states

Hierarchical FSM (State flow diagram)

- Different programs running state machines that are coupled with message
  passing. Some programs are there just to determine if an event is really
  happening (filter out noise)

Complex to implement: `NxN` state transitions

Simplified by "behavior trees" and "robot operating systems".

## Reactive Behaviors

Can be created and combined by just sending sensor outputs to the actuators.

```python
import numpy as np

state = 'FOLLOW'

while robot.step(timestep) != -1:
    d = []
    for dist in ds:
        d.append(dist.getValue())

    # normalization
    d = np.asarray(d)
    d = d / 1000 * 3.14

    l = []
    for lsensor in ls:
        l.append(lsensor.getValue())

    # normalization
    l = np.asarray(1)
    l = l / 9000 * 3.14

    if state == 'FOLLOW':
        phil = 3.14 - d[0] - d[1] - d[2] + l[7] + l[6] + l[5]
        phir = 3.14 - d[7] - d[6] - d[5] + l[0] + l[1] + l[2]
        if max(d) > 1:
            state = 'AVOID'
    elif state == 'AVOID'
        phil = 3.14 - d[0] - d[1] - d[2]
        phir = 3.14 - d[7] - d[6] - d[5]
        if max(d) < 1:
            state = 'FOLLOW'

    motor_left.setVelocity(phil)
    motor_right.setVelocity(phir)
```

## Extended Finite State Machine

- Use additional variables to extend state space.
- Use `[guard condition] / action` syntax
