+++
title = "Applications of Integrals"
+++

# Applications of Integrals

## Work

One of the main applications of [integration](./integration.md) in engineering and physics is
computing work.

`work = force * distance` if the force is constant. Special case of:

work = ∫force over distance

In real life you always have a variable force.

### Houke's Law (spring extension problems)

```
f = kx

force = (spring constant) * (distance past resting)
```

If you have a 3m spring and you stretch it to 7m, how much work did it take?

k = 1.5

```
integrate from not streatched to distance past resting of 4 (7m-3m)

w = ∫[0,4] 1.5x dx

1.5(x^2/2)

12 jules
```

If the problem does not give you k, you likely have to figure it out from other
information:

"It takes 20N of force to extend 15m"

```
recall f = k * x

so 20 = k * 10

so k = 2
```

### Bucket on a rope problems

A bucket weighs 4N and is hanging at the bottom of a 6m length of rope. The rope
weighs (density) 1.5N/m. How much work does it take to pull up the bucket?

Force is changing because the amount of rope you have to pull is always
changing.

```
w = ∫f

w = ∫[0,6] 4 + 1.5(6-y) dy

break up into bucket and rope

∫[0,6]4dy + 1.5∫[0,6]6-y dy

(4*6) + 1.5(6y-(y^2/2))|[0,6]
```

What about if it is raining and filling up the (initially empty) bucket at 2N/s and the bucket is
being raised at 1m/s and the bucket can hold 8N of water?

```
w = ∫Fbucket + ∫Frope + ∫Fwater before full + ∫Fwater when full

for the integral of force of water, think about how every meter the bucket goes
up there is 2N of water filling the bucket because the rates have the same unit

∫[0,6] 4 dy + ∫[0,6] 1.5(6-y) dy + ∫[0,4] 0 + 2y dy + ∫[4,6] 8 dy

for the upper bound on the water before full limit:

bucket stops filling when 2y = 8

y = 8/2 = 4
```

### Fluid forces

A cylindrical tank is full of fluid which weight at height y is 5 - y. Tank has
height 3 and radius 2. How much work to pump the fluid vertically out of the
tank?

Divide the fluid into discs and integrate `density * height * area of disc`

`∫[0,3] (5-y)(3-y)pi2^2 dy`

If the tank is not full, still use the full container height but only integrate
to how full the tank is.

#### More involved examples

These questions can get challenging but it's normally in a unique way and you
really just have to think about the problem. Here is an example that involves a
changing radius of each disc and some unit conversions:

```
A tank in the shape of an inverted right circular cone has height 6 meters and
radius 3 meters. It is filled with 3 meters of hot chocolate. Find the work
required to empty the tank by pumping the hot chocolate over the top of the
tank. The density of hot chocolate is 1090kg/m^3

Volume of each slice is pir^2 dy, and you can see radius is a ratio of height
and width 3/6 so radius is y/2 so pi(y/2)^2.

Multiply by the density 1090(1.4)piy^2 dy and you get a mass because the
original units are kg. To find the weight of that mass you need to multiply by
gravity, 9.8

Then you can set up the integral as normal:

∫[0,3] (6-y)(1090)(1/4)piy^2(9.8) dy
```

## Surfaces of revolution

### Method of discs

Take a 2d curved region, rotate it 360 degrees, find the volume of the 3d object
you produced.

Compose the 2d region of lines, scan the region and at each line you rotate it
(creating a disc). ∫ area of discs to get the volume of your shape. Bounds of
integration are normally the height of the shape.

Area of disc is pir^2

For example, curve x^2 going up to y=1

y = x^2, so x=sqrt(y)

∫[0,1] pi(sqrt(y))^2 dy

= pi/2

#### Donuts

There might be a hole in the middle of the 3d shape. You can solve this in two
parts: (vol if completely solid) - (vol of gap).

ex:

```
Region between y=x, x=1, y=0 (makes a triangle)
Rotate around x=4 (so there is a gap between x=1 and x=4)

∫[0,1] pi(4-y)^2 dy - ∫[0,1] pi(3)^2 dy
```

The hardest parts of these problems are finding the expression for the length of
the radius of both parts. Especially x^2, |x| etc... because the negative is
lost and you have to re-add it to one side.

You might have to break the shape up into multiple pieces and add the volume
together at the end. Just draw it out and it normally makes sense.

## Method Of Shells / Cylinders / Tubes

If the method of discs is resulting in a super painful integral, try the method
of shells.

Shells are like discs, but you slice the shape in parallel to the axis of
rotation.

If axis is vertical then integral is dx, dy if axis is horizontal.

Integrate the surface area of the resulting cylinders.

`surface areay = 2pirh`

r = radius of disc, h = how tall is the cylinder

Other then that it is super similar to the method of discs - just draw it out
and it normally makes sense. Bounds of integration are the length of the
original shape against whatever your axis of integration is.

You can end up with multiple integrals with shells if the height of your
cylinder changes at some point. Then you need two integrals and add them
together to get the total volume.

### Surface area

Similar to volume problems but a little simpler.

```
Rotating y = e^x , 0 <= x <= 1 around the x-axis, what is the surface area?

Set up a discs problem but integrate the circumference (2pir) and include
account for curvature (more on this in calc III).

∫ circumference (sqrt(1 + (f'(x))^2))

∫[0,1] 2pie^x * sqrt(1 + (e^x)^2) dx
```
