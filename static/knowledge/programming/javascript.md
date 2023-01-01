# Javascript

Javascript is a browser implementation of the **ecmascript** language specification

Node is v8 server side. Node is single threaded

## Variables

```js
let b = 'World'; // a mutable variable
const c = '!'; // a constant
var a = 'Hello'; // older "let", should generally be avoided

// functions are first class
function myFunction() {}
const myFunction = (...args) => {};
```

## Functions

Functions are objects and can have properties and methods.
Functions are first class.

## Promises

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object representing the eventual completion or failure of an asynchronous operation.

States:

- Pending
- Resolved
- Rejected

Once resolved or rejected it can never go back to pending

Callback functions are run after asynchronous code finishes…aka promises resolve

## Context

`this` in a function is the object the represents the functions context.

```js
/** call
 * a method placed on a function that calls the function
 * the first argument passed in is the new execution context (thisArg) */
const addToThis = (anyNumber) => {
	return this.num + anyNumber;
};
let obj = { num: 3 };
addToThis.call(obj, 7); //=> 10
```

## OOP

The class is the context
ES2015 syntactic suger is covering up JS’ actual inheritance model: Prototypal inheritance

```js
class Dog extends Mammal{
	constructor(...args) {}
	static
	set
	get
	//etc...
}
```

##### Great OOP design: SOLID

Liskov’s substitution principle: Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. Child classes can *expand* upon what they inherited, adding methods or extra properties, do not modify what they inherited.

## FP

- Pure functions - deterministic
- Minimize side effects to the end of the application (rendering and such as)
- Higher order functions - functions are a data type that can be passed into things

```txt
gradually building something with currying
someFunction()()() => each function returns a function
```

- memoization
- keep data and behavior seperate
