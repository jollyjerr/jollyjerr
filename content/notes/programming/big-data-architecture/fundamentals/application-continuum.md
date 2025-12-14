+++
+++

# Application Continuum

https://www.appcontinuum.io/

Many systems evolve from a single application to multiple independent services.
New applications can start anywhere along this continuum depending on how much
information is known about the problem. A greenfield mvp will likely be a single
service while an enterprise rewrite can dive fully into services.

Structuring your project early into [bounded contexts](https://martinfowler.com/bliki/BoundedContext.html) will improve readability, isolate
the impact of changes, and make it easier to work out where the boundary between
services may actually be in the future.

These contexts can slowly be split to their own process/application and then
eventually get their own data store. Add versioning to cross application
communication right away.

Once each service is scaling, add dynamic service discovery and circuit breakers
to ensure each service can struggle or thrive independent to what any other app
is doing.
