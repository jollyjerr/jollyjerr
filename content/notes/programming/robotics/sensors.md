+++
title = "Sensors and Actuators"
+++

# Sensors and Actuators

## Sensors

Sensors are developed for consumer electronics and larger industries - rarely
for robotics itself.

- Type of information
- Physical principle
- Absolute vs. derivative
- Amount of information (bandwidth)
- Low and high reading (dynamic range)
- Accuracy
- Precision
- Resolution

```
Accuracy = 1 - (|m - v|/v)
with m as measurement and v as true value
```

You can combine sensors (sensor fusion) to get a better idea of what is actually
happening.

### Accelerometer

`F = kx = ma`

Measures acceleration by knowing the spring constant `k` and measuring
displacement.

Gives you relative measurement (acceleration - derivative of speed)

- Tell the pose of an object from the direction of gravity
- Tell when robot hits an object

### Gyroscopes

Measure orientation and rate gyroscopes measure rotational speed.

Relative measurement.

- Correct robots heading

### Wheel/Joint encoder

Relative measurement.

- Tell rotation of a wheel or a robot arm.

### Distance from light intensity

Emitter/receiver pair gives you non linear distance measurement.

- structure (xbox connect)
- sound
- phase shift (with laser scanner)

### Laser Scanners

Results in a list of ranges and a list of angles (often implicit)

### 3d Range Finders

aka "depth camera" using spherical and cylindrical projection.

## Actuation

- Locomotion - moving oneself
- Manipulation - moving others

### Electric motors

DC (brushless) change the polarity in the motor quickly.

Direct Drive

Harmonic Drive

### Linear Actuators

Series elastic
