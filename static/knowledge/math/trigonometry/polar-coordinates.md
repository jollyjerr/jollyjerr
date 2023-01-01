# Polar coordinates

Rather than plotting a point using (x,y) you can plot a point with (r,𝛳)

Plotted on a graph this looks like the hypotenuse of a tringle created by (r,x,y)
with 𝛳 being the angle from the x plane to r.

```
y = r * sin(𝛳)
x = r * cos(𝛳)

             rectangular      polar
for example: (1, sqt(3)) === (2,pi/3)
```

Convert from polar to rectangular coordinates with:

```
y = r * sin(𝛳)
x = r * cos(𝛳)

also

r^2 = x^2 + y^2
tan𝛳 = y/x
```

And convert from rectangular to polar coordinates with:

```
𝛳 = tan^-1(y/x)
```

You can build these conversions yourself starting from the definitions of cos and sin.

Keep in mind that angles can be coterminal, so `(2, pi/4) == (-2, 29pi/4)`

#### Conversions in equations

In the same way that you convert points, you can convert between coordinates in equations:

```
Convert the polar equation r = 8cos(𝛳) to rectangular coordinates.

Recall: x = rcos𝛳
Which can be transformed to: cos𝛳 = x/r

r = 8(x/r)

r^2 = 8x

Recall: r^2 = x^2 + y^2

x^2 + y^2 = 8x

x^2 - 8x + y^2 = 0
```

```
Convert the rectangular equation y = -6x^2 to polar coordinates.

Recall y = r * sin(𝛳) and x = r * cos(𝛳)

rsin𝛳 = -6(rcos𝛳)^2

rsin𝛳/(rcos𝛳)^2 = -6

rsin𝛳/(rcos𝛳)(rcos𝛳) = -6

(rsin𝛳/rcos𝛳)(1/rcos𝛳) = -6

(sin𝛳/cos𝛳)(1/rcos𝛳) = -6

Recall the quotient identity for tangent

tan𝛳(1/rcos𝛳) = -6

tan𝛳/rcos𝛳 = -6

tan𝛳/cos𝛳 = -6r
```
