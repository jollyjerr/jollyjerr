+++
title = "Geometry of Linear Programs"
+++

# Geometry of linear programs

## 2D

Every constraint corresponds to a straight line and a shaded area on either side
of the line that indicates the region where the constraint is satisfied.

Together these regions overlap and the lines bound a region called the feasible
region.

Objective function values will be parallel lines, and the optimal value is the
highest possible value that touches the feasible region. The optimal solution is
always at a vertex.

## General

The feasible region forms a convex polyhedron. Each constraint forms a
hyperplane and the acceptable region is one side of that plane (half space).

Convex: a polyhedron where you can divide it with a straight line at any point
and the resulting shapes are polyhedrons. The line lies completely inside the
polyhedron.

## Unbounded

In an unbounded problem, the polyhedron will be unbounded.

## Integer

The entire region is not considered, only whole integer points inside the
feasible region.
