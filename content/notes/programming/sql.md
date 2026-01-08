+++
title = "sql"
+++

# SQL

> Not an overview but here are some hot tips:

Select a table twice to make comparisons

```sql
select one.id from Weather one, Weather two
where dateDiff(one.recordDate, two.recordDate) = 1
and one.temperature > two.temperature;
```

Use round/count/sum and order by the result. Also you can order primarily in one direction and then
specify the fallback in another direction.

```sql
select
    contest_id,
    round(count(user_id)*100.00/(select count(*) from users),2) as percentage
from register
group by contest_id
order by percentage desc, contest_id
```
