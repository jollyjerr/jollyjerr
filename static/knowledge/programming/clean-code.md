# Clean Code

By: Robert C. Martin

## Clean code is subjective

I really liked Bjarne Stroustrup's definition:

> I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal. Clean code does one thing well.

Basically everyone seems to agree that code is clean when "there is nothing obvious you can do to make it better". Clean code is an artform and it is easier to label something as messy code than it is to define clean code. You should always leave files better than you found them.

## Names

Name things as clearly as physically possible. Descriptive, distinct and pronounceable names are always the way to go - even if that means they are long. Do not make the reader translate a name into the actual concept - just name the thing the concept.

## Functions

Functions should only do one thing and should do it well. To figure out what "one thing" is, write a "TO" paragraph:

> To draw a cat on screen we make a request to the server for the cats description and parse the JSON it sends back and set the description in the state of the catPresenter and....

Each of these "AND" statements could be refactored to another "TO", which means they should be an individual function. Repeat this process recursively until there are no more "AND"s. Error handling is one thing.

Keep functions simple by keeping argument lists small. Prefer 1 argument.

## Comments

If you have to describe the code with a comment it is a failure of your code to be descriptive enough. _Only_ comment if you can not get around this failure, such as an issue with a dependency or a truly special case. Make sure comments stay attached to the code they are commenting on.

Comments are not documentation. If you have an api, documenting the api is it's own seperate concern and is a very good thing to do.

## Formatting

Take your work seriosly and write exceptionally well formatted code that looks sharp.

## Objects and Data Structures

The Law of Demeter states that an object should not expose it's data but should expose methods to access the data, unless that object was created by the thing accessing the data. An exception to this rule can be DTOs (although some purist still write getters).

## Errors

Error handling should be the first thing you care about. Write your try catch first, and use errors to describe when code leaves the happy path - don't return `null` or something to show something failed. In general.

## Libraries

When learning how to use a library, write tests to verify your learning of the features you will use. This also helps you migrate up major versions.

## Testing

Theoretically untested code is unverifiable and should not go in to production ever in any situation. Following the three laws of TDD is ideal.

1. You may not write production code until you have written a failing unit test.
2. You may not write more of a unit test than is sufficient to fail. Not compiling is failing.
3. You may not write more production code than is sufficient to pass the currently failing test.

Also, your test code should be as clean as your production code.

## Modules and Classes

Should be small and do one thing. Just like functions and methods but one level of abstraction up.

## Emergence

Clean code shows signs of emergent concepts. You should notice that you can call domain specific functions more often than implimentation functions. Your code should scream that it is about something and the level of abstraction for each individual function and class should be clear.

## Concurrency

Concurrency is hard and is not always a good solution. If you do decide to use concurrency, make sure your code works individually first - concurrency is a seperate concern.

Keep synchronization points few and short.

Use an established execution model.

**Producer-Consumer**
One or more producers threads create some work and place it in a bugger or queue. One or more consumers grab the work and complete it. The queue is a _bound resource_. Producers and consumers have to communicate around when they can access the bound resource.

Before writing concurrent code read about the readers-writers problem and dining philosophers problem.
