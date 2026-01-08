+++
title = "Data Warehousing"
+++

# Data Warehousing

Read snowflake docs

Read only data separate from operational data - not updated in place.

Historically longer than operational data - 5 to 10 years or whatever

- OLTP: Online Transactional Processing (transaction oriented tasks for daily CRUD)
- OLAP: Online Analytical Processing (complex queries on historical data)

## Fact vs Dimension

Fact is something concrete like sales, dimension is something adjacent like
customer or time.

Star schema: one fact table, multiple dimension tables

Snowflake schema: one fact table, multiple levels of dimension tables

Constellation schema: multiple fact tables linked together by multiple levels of
dimension tables

## Data Cube Operations

- drill up
- roll up
- slice
- dice
- drill down
- pivot

Make n-d lattice of cuboids to analyze data at a certain granularity.

```
ex: 3d

year, item, color

a = (2010, bikes, red)
b = (210, bikes, *) // one dimension up via aggregation (roll up)
```

Data cube materialization: pre-computing cuboids is expensive, on-demand is
slow when you need data. Partial materialization is ideal but have to chose what
cuboids and cells to pre-compute (heuristics for decision).

Iceberg cube: minimum support for frequent queries

- Multi way Array Aggregation (base cuboid, bottom-up, simultaneously aggregate
  multiple dimensions)
- Bottom Up Computation (start from 1 all and divide dimensions into partitions
  while > threshold - iceberg pruning)
- Star Cubing (bottom up and top down expansion of shared dimensions)
