# Polar Curves

Graphing polar curves is basically the same as graphing other functions but using the polar system:

1. Set the argument of the function to pi/2 and solve the equation for 𝛩.
2. Evaluate the polar curve at multiples of the 𝛩 value, starting with 𝛩 = 0, and plot the points.
3. Connect the points as a smooth curve

### Circles

```
r = a // circle centered at the origin

r = c * sin𝛩
r = c * cos𝛩
```

### Roses

```
r = c * cos(n𝛩)
r = c * sin(n𝛩)
```

The "petals" extend |c| away from the origin.

The rose will have 2n petals if n is even, and n petals if n is odd.

### Cardioids

Sorta look like a heart

```
r = c + (c * cos𝛩)
r = c + (c * sin𝛩)
r = c - (c * cos𝛩)
r = c - (c * sin𝛩)

where c is a positive constant
```

The cardioid's farthest distance from the origin will always be at a distance
of 2c

### Limaçons

French for "snail". Cardioids are a type of limaçon.

```
r = a + (b * cos𝛩)
r = a + (b * sin𝛩)
r = a - (b * cos𝛩)
r = a - (b * sin𝛩)

where a and b are positive numbers and a != b
```

Sine lims are symmetric about the vertical axis, while cosine lims are
symmetric about the horizontal axis.

### Lemniscates

Figure-eight ish type shape that is symmetric around the origin.

```
r^2 = c^2 * sin(2𝛩)
r^2 = -c^2 * sin(2𝛩)
r^2 = c^2 * cos(2𝛩)
r^2 = -c^2 * cos(2𝛩)
```

A lemniscate always has two loops (because the argument is 2𝛩). The loops will be
|c| distance from the origin. sin || cos and +c || -c modify the location of the loops:

```
sin +c => fist and third quadrants
sin -c => second and fourth quadrant
cos +c => horizontal axis
cos -c => vertical axis
```

You can't graph lemniscates exactly as the other polar shapes here because you frequently end up needing to
take the square root of a negative value (for example, graph `𝛩 = pi/2`)

So custom steps for lemniscates are as follows:

1. Identify as sine or cosine
2. Identify as positive or negative
3. Determine the value of c (not c^2)
4. Use those facts to sketh the lemniscate

## Intersection of Polar Curves

You can find the intersection points of two polar curves by setting the equations equal to one another
and simplifying. Then, use trig definitions to figure out half of the intersection points (either sin or cos), and then plug in that
half to the original equations to find the other half (either sin or cosine).

Polar curves can also have "hidden" points of intersection because of coterminal angles and points.
To find these hidden points of intersection, it is best to sketch a graph of the equations and look for where
they are intersecting.

```
Find the points of intersection of r = 3sin𝛳 and r = 1 + sin𝛳

3sin𝛳 = 1 + sin𝛳

2sin𝛳 = 1

sin𝛳 = 1/2

Recall(from unit circle): sine of 1/2 happens at 𝛳 = pi/6 and 𝛳 = 5pi/6

3sin(pi/6) ∧ 3sin(5pi/6) = 3/2 // ∧ == logical and
1+sin(pi/6) ∧ 1 + sin(5pi/6) = 3/2

If you graph the curves you see these two points of intersection that we just found:

1. (3/2, pi/6)
2. (3/2, 5pi/6)

and a third "hidden" point of intersection

3. (0,0)

This is because the circle reaches that point at (0,0) while
the cardiod reaches that point at (0,3pi/2)
```
