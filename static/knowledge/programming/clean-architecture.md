# Clean Architecture

By Robert C. Martin

## Behavior vs Architecture

Getting code to work, once, is not very hard and can be accomplished with sheer brute force of will. The goal of design and architecture is to reduce the amount of resources it takes to produce and maintain a system.

When a project starts, the complexity of each feature is equal to the complexity of the feature itself - but if architecture is not managed, the complexity of each feature becomes higher by some degree until the project grinds to a halt.

Both behavior and architecture are equally important in a system. If you only work on behavior, the project will become ever more costly to develop, and eventually impossible to change.

**Behavior** is not discussed in this book.
This book covers the entire other half, **architecture**.

# TLDR:

1. **Paradigmes** restrict engineers from making mistakes and enable them to write scientifically falsifiable code (or mathmatically provable code in some circumstances). You use paradigmes to code up **modules**.
2. **Modules** are a group of behaviors that are responsible to one actor. You combine modules to create **components**.
3. **Components** are independent .jar files, ruby gems etc. They can also be deployed as services. They balance many concerns to be easy to change and easy to use. Abstract components should be stable and depend on few things, concrete components should be flexible and depend on many abstract things. Multiple components are strung together to create a product or **project**.
4. **Architecture** is the strategy you use to keep a **project** open to development, deployment, operation, and maintenance. This is done best by keeping buisness rules (things your company would do manually if computers did not exist) abstract and knowing nothing about the concrete plug-ins of implementation (ui, frameworks, database, cloud providers, the web at all, etc...). You should write buisness rules to connect with implementation via simple objects and interfaces that the implementation layer can plug in to. You should delay the decision of implementation details as long as possible. Every layer of your project should be testable horizontally and testable vertically.

## Programming Paradigms

There are three paradigms, and it is not likely that there will be any others. Each paradigme _removes_ capabilities from the last, and there is not anything left that the author sees could be removed.

### Structured Programming

_Imposes discipline on direct transfer of control_

Edsger Dijkstra used mathmatical [proofs](../math/proofs/proofs.md) to prove programmatic structures and then tie them together to produce proven systems. He discovered that some uses of `goto` made proofs impossible to write. (Ones that prevented recursive decomposition) Nowdays most modern languages enforce structured programming which limits all programming to **sequence, selection, and iteration**.

Dijkstra also said "Testing shows the presence, not the absence, of bugs". Programming shifted from trying to mathmatically prove programs as correct (because it litterally takes forever), to scientifically prove programs as correct enough for our purposes by using tests to find bugs.

### Object-Oriented Programming

_Imposes discipline on indirect transfer of control_

OOP **did not** give us encapsulation,inheritance or polymorphism. All three of those things are equally possible in a structured language like C. OOP **did** make polymorphism easy and safe by standerdizing the conventions for using pointers to functions and abstracting it away. In this way, OOP imposed discipline on indirect transfer of control - something that was possible but was also messy and unsafe in C.

This discipline makes it practical to use dependancy inversion across projects. For a given _caller_ class and _callee_, the caller can now reference an interface that represents any various implementation of the callee rather than refrencing the callee itself. This inverts the relationship between flow of control and source code dependencies.

The big win from this revolution is that fact that you can point all external concerns (UI, Database, Etc...) to _depend on_ the buisness rules - rahter than the other way around. So buisness rules can stay stable while details of implementation can change freely (ex: a fax program can work with any fax machine, not just be written for one piece of hardware). Changes to the UI or Database can have zero effect on buisness rules - which is super powerfull.

### Functional Programming

_Imposes discipline upon assignment_

Functional programming is based on lambda-calculus invented by Alonzo Church in the 1930s. All (or most) assignment is immutable. This is powerfull for architecture because it eleminates all problems that come from multiple threads and processors (race conditions, deadlock condition, concurrent update problems).

Because machines are not infinitely powerful, you have to use this with care. In one case, _event sourcing_, applications limit operations on disk to Create and Read so that the data is immutable, but if you want to keep track of change over time you would need to recalculate that change from the beginning of time every time you read it, so you may make a compromise by caching some mutable state that can only be touched by a single "mutable component".

## SOLID Design Principles

Solid principles can be applied at any level of the fractal of software design, but they _must_ be applied at the **module** level. **Modules** make up **components** and **components** _could_ be an independent .jar file, npm module, ruby gem, or service.

- **SRP** Single Responsibility Principle
- **OCP** Open-Closed Principle
- **LSP** Liskov Substitution Principle
- **ISP** Interface Segregation Principle
- **DIP** Dependency Inversion Principle

#### Single Responsibility Principle

_A module should be responsible to one actor_

(aka code that changes together should live together). If the CEO and CTO both care about the budget system and make changes at different rates, there should be a module for both rather than one single budget module. Rather, you would have a single budget **component**. (Ex: Report Expenses Module and Group Expenses Module or whatever)

#### Open-Closed Principle

_A module should be open for extension but closed for modification_

It is easier to write new code than it is to change old code. If component A should be protected from changes in component B, then component B should depend on component A. Abstract and stable code should have lots of dependants and few dependencies.

#### Liskov Substitution Principle

_A simple violation of substitutability can cause a system's architecture to be polluted with a significant amount of extra mechanisms_

If something is similar to another thing they should be able to "plug-in" to the same interface without custom changes.

#### Interface Segregation Principle

_Depending on something that carries baggage that you don't need can cause you troubles that you didn't expect_

Instead of depending on something that does a million things, depend on a interface you write that does exactly what you need - and then "plug-in" the thing that does a million things. Then you are only coupled to the functionality that you care about.

#### Dependency Inversion Principle

_The most flexible systems depend on abstractions, not concretions_

Concrete implementation details should always depend on abstract stable code. Basically, buiseness logic should never need to change when the UI changes. Buiseness rules should never need to change when the database or ORM change.

If you find yourself in a situation where the abstract is depending the concrete, you should invert the dependency by creating an interface and then the abstract code and concrete implementation both depend on the interface (which is abstract).

## Component Principles

Gather together logic that changes together, dont depend on things you don't need, and version control your components.

Components exist in a tension between three principals:

```txt
CRP(avoid unneeded releases)
|                          |
|Too many changes          |Hard to reuse
|                          |
|       Your component     |
|                          |
|                          |
|                          |
REP(reusers)--------------CCP(maintenance)
                   |
				   Too many releases
```

- REP - Reuse/Release Equivalence Principle: A component should be releasable together
- CCP - Common Closure Principle: A component should change together for only one reason
- CRP - Common Reuse Principle: Code that is reused together should be in the same component. If you depend on part of a component, you depend on the whole thing - so only depend on stuff you use 100% of.

### Component Coupling

Always draw out your components and the dependencies between them, if there is a cycle use DIP to break the cycle so that you can work on components independently and not force extra releases. Component architecture should be flexible and allowed to change constantly.

## Stable Abstractions Principle

_A component should be as abstract as it is stable_

Components are sespended between the three principles outlined above while _also_ being suspended between **The zone of uselessness** and **The zone of pain**.

A component is in **The zone of uselessness** if it is abstract and nothing depends on it. (Ex: leftover dead abstract classes)
A component is the **The zone of pain** if it is concrete and many things depend on it. (Ex: Database schema)

You should aim to keep components as abstract as they are stable. So something that is depended on greatly should be greatly abstract, while something depended on by nothing can be extreamly concrete and depend on many things itself.

## Architecture

_It's all coming together..._

Basically a project can be split vertically and horizontally: **Components (x), Use Cases (y)**

```txt
y (use cases EX: add order, delete order)
|  |
|  |
|  |
|  |-------------
|  |
|  |-------------
|  |
----------------- x (components EX: The ui, application-specific business rules, application-indebendent business rules, the database)
```

You should be able to add use cases and components without interfearing with old ones. You should be able to pinpoint the exact code that handles a specific use case at a specific layer.

This can all be in a monolith or components can be deployed as services - it does not really matter and is more domain specific.

Consider the "chattyness" between layers. Remember that network requests are slow af, so if two layers are super chatty - having that chatter happen over the network will be slow.

You should be able to test these layers horizontally (unit) and vertically (integration). Huzzah!

### Screaming Architecture

When you look at an apps source code it should scream what it is. Ex: "I AM A LOAN RISK ANALYSIS FINANCE APP CURRENTLY USING NEXTJS TO BE PRESENTED ON THE WEB". rather than: "I AM A CREATE-NEXT-APP."

### Clean Architecture

Using all of the principles we have talked about, a clean architecture should be obvious by now

```txt
| Abstract + Stable

Entities (Enterprise Business Rules)
*knows nothing about*
Use Cases (Application Business Rules)
*knows nothing about*
Controllers + Presenters + Gateways (Interface Adapters)
*knows nothing about*
UI + Web + Devices + DB + External Interfaces (Frameworks & Drivers)

| Concrete + Easy to change
```

Yes, frameworks and databases and the web itself are all at the bottom.

And, as a fractal, you can see this same architecture scaling up and down with each layer while maintaining the clarity of **Use Cases** vs **Components** and testing vertically/horizontally.

Communication between these layers should be **humble objects** so that each layer is interchangable. You should be able to totally change frameworks at any time and only touch the bottom layer.

**Note:** The start script (main) should be and interchangible plugin. You should easily be able to start in production, start in dev, start in qa, etc...
