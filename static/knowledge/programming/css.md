# CSS

> From Josh Comeau's talk "CSS for JavaScript Developers"

CSS is an _implicit_ system, so if your mental model is slightly off you will just get a result which you do not expect... with no error message.

Key take away: Forget everything you know and start from first principles. Build an accurate mental model.

## Layout modes

Every elemnt is rendered within a specific **layout mode**. Each layout has it's own set of rules.

1. Flow layout (default)

2. Positioned layout

3. Flexible Box layout

Also: Grid, Multi-Column, Table, Float

There are also different writing modes for right-left and top-bottom languages

### Flow layout

Rendered first in the document

Based on physical documents.

**block** elements grow to fill as much of the parents space as it can, changing the layout if it needs

**inline** elements will not change the pages layout and are placed freely (ability to line wrap)

**inline-block** placed in the page like an inline element but can change the layout to fit it's needs (no line wrap)

Width and Height are fundamentally different in how they operate. Documents have a fixed width, but not a fixed height.
If you add min-height: 100% to the html document you then get a reference point and height of block elements starts to act the same as width.

Z index means nothing in flow layout

### Positioned layout

Rendered after flow

Anchor your element to something else

`position: relative` Position relative to parent and then respect flow

`position: absolute` Anchor to closest ancestor in position layout mode

Z index is not global - it only matters for siblings created in the same **stacking context**

Stacking contexts can be created by combining z index and a non static position

```
<header z-index=2>over</header>
<main z-index=1> <!-- this creates a stacking context that will always be under the header's 2 -->
  <div z-index=99999999999>under</div>
</main>
```

### Flexbox layout

Width in a flexbox context is the "hypothetical size", not a fixed rule. flex-basis does the same thing

The flex algorithm distributes space to all children and considers the hypothetical size (width/height)

flex-basis: 0 distributes _all_ space, while flex-basis: auto distributes the _extra_ space

## Debugging css

Make a prediction, if your prediction is wrong then learn the system because your mental model is wrong
