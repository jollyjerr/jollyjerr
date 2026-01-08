+++
title = "Testing"
+++

# Testing

Write tests early, and choose a strategy that encourages consumable code:

## Test driven development

### Outside in

Acceptance tests drive integration tests that drive unit tests

### Inside out

Unit tested lego bricks assembled into integration tested layers fashioned into
acceptance tests

## Red green refactor

Write a test and see it fail, write enough code to get it passing, and refactor
the code towards some existing or new design pattern to make it extensible.

Read books on refactoring and see as many examples as possible.

## Test Doubles

- stub: replace real component with canned answers
- mock: replace real component with pre-programmed expectations
- spy: mock or stub that records
- fake: replace real component with shortcuts
- dummy: placeholder object that may not get called

## Inversion of Control (IoC)

Give the caller the power to control the behavior of your class.

- Dependency Injection

Get handed classes via a method call rather than newing up classes in your
method call.

- Constructor injection
- Setter injection
- Interface injection
