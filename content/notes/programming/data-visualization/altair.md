+++
title = "Altair"
+++

# Altair

This is the basic idea:

```python
import pandas as pd
import altair as als

data = pd.read_csv()

alt.bind(data).mark_circle().encode(
    x = "Col Name",
    Y = "Col Name"
)
```
