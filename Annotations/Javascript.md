Types

> Numbers  
> String  
> Boolean  
> Array  
> Object  
> null - represent "nothing", "empty"  
> undefined - "value has not been assigned"  
> Symbol  
> BigInt  

Concepts

First class function
> Accept a function as a variable

First order function
> Dont accept function as param

High order function
> Accept another function as argument and return a function as value

Currying function
> Functional composition -> (a) => (b) => (c) => a + b + c

Pure function
> Same arguments return same values

Event Loop
> Manages async operations by handling events in the queue and executing corresponding code in the correct order

IIFE - Immediately Invoked Function Expression
> Pattern to scope a function and _immediately_ calls it

REPL - Read Eval Print Loop

Memoization
> A function that caches the result

Hoisting
> Put in the top of memory the variables and functions declaration to be able to execute them before their declaration

Temporal Dead Zone
> Access variable before definition  
> `let` and `const` cause `Reference Error` but `var` gives `undefined`

Closures
> Combination of a function and the lexical env. The inner function has access to the outer or enclosing function's variable

```
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
```

Prototypal inheritance
> Every object inherit from Prototype class

Service worker

> Javascript file that runs in the background inside the browser.  
> PostMessage - Way that service worker comunicate with DOM through onmessage event.  
> Server sent events - server push tech enabling browser to receive automatic updates from a server through EventSource  

Storage

> Local Storage - IndexedDB - no expiration date - up to 10MB - accessed any tab in the browser  
> Session Storage - Data lost when tab is closed - up to 5MB  
> Path storage - Information from URL  
> Cookie - Persistent until date expiration  

Strict mode
> Run program or function in the operating context. Returning the real error, not bad syntax error like.

DOM
> Document Object Model (document tree)

Virtual DOM
> A copy of real DOM to run operation in memory before syncronize the changes with real DOM

Shadown DOM
> Special DOM segment to isolate and styling separated from the rest of the page

BOM - Browser Object Model
> Broswer Object Model (history, location...)

> window - browser env
> global - node env
> globalThis (ES11) == window == global - In any env

Polyfill
> JS code that provide modern functions to old browsers

Package-lock.json / yarn.lock
> Version package  
> Integrity hash  
> Registry location  

ES6 new functionalities:
> let and const  
> Arrow functions  
> Default params  
> Spread operator  (`({ var1, var2, ...props})`)
> Destruct  ( `const { var3, var4 } = props` )

ES7
> Exponentiation Operator ( 2 ** 3 // 8)

ES8:
> Async Functions (async ... await)

ES9:
> finally() block in the Promises

ES10:
> Array.flat(_[depth]_) - receives a depth attribute to flat the array
> Array.flatMap((elem) => {}) - combination with map and flat

ES11:
> Optional operator
> Promise.allSettled
> BigInt
> globalThis

ES13:
> await at Top Level instruction in modules
> Error cause - `new Error("Connecting to database failed.", { cause: err })`
> Array.findLast - find the last elenent found or undefined with the condition is not satisfied

Promises

> Async function that could be resolved (`.then((value) => { return value })`), not (`.catch((err) => { return err })`) and finalize (`.finally(() => {})`)  
> States - pending -> fulfilled -> rejected  
> Chaining - Call any times `.then()` and `.catch()` functions  
> Promise all - Resolved async all promises and return an error or all results.  
> Promise.allSettled (ES 11) - Resolve all promises to either fulfill or reject before resolving.
> Promise.any - Returns the first promise resolved and return `AggregateError` with an array of rejection reasons

```
const promises = [
  Promise.resolve('Resolved Promise 1'),
  Promise.reject('Rejected Promise 2'),
  Promise.resolve('Resolved Promise 3'),
];

Promise.allSettled(promises)
  .then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else if (result.status === 'rejected') {
        console.log('Rejected:', result.reason);
      }
    });
  })
  .catch((error) => {
    console.error('Error in Promise.allSettled:', error);
  });
```

Objects

> Native objects - Provided by ECMAScript specification  
> Host objects - Provided by runtime env (Node)  
> User objects - Objects created by the users  

```
// Create objects
new User() // Class
new function userConstructor() { ... } // Construtor function
const user = { ... } // Object literal
Object.create({ ... }) // Create function

// Mainpulating objects
Object.freeze(obj) // Make an object immutable
Object.seal(obj) // Seal the object to additions
Object.isFrozen(obj) // Check if the object was freezed
Object.is(var) // Check is variable is an Object
Object.assign(target, source) // Assign properties to a existent object

// Key exists in an object
if (obj.hasOwnProperty('prop')) { ... }
if (obj.prop) { ... }
if (key in obj) { ... }
```

Window size
``` 
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
```

Loops
> Js labels - name loops and blocks in JS -> loop1: for... { loop2: for... { if... continue loop1 } }  
> continue statement - stop the execution and continue to another loop  
> break statement - breaks the current loop  

Array
> functional methods - map(`(item, i, arr) => { ... }`), filter(`(item, i, arr) => { ... }`) and reduce(`(acc, cur, curIndex, arr) => { ... }`)  
> Array.isArray - Check if the value is an Array  

Regular Expression

> /pattern/modifiers  
> i - case insensitive  
> g - global match  
> m - multi matching -> search and replace functions  

Debug techniques
> console.log  
> debugger statement  
> chrome devtools  

Axios
> Promise based HTTP client  
> Small package with wide support  
> Automatic JSON transformation  
> Pass data in data argument  
> HTTP interceptors/middleware (Authentication, Logging, Metrics...)  

Fetch
> Promise based HTTP client  
> Build in, needs polyfills for modern browsers  
> Manually JSON transformation  
> Pass data in options.body attribute  
> No HTTP interceptors  

Interview questions:

var (ES5) -> functional scope  
let (ES6) -> block scope

div -> block component  
span -> inline element

display: none -> removes the element from the layout entirely
visibility: hidden -> preserves the element space in the layout

functions -> context (this), args argument and ES5  
arrow functions -> Annonymous function and ES6

Function Declaration - Tradicional way (ES5)  
Function Expression - Function assigned to a variable (ES6)

Micro tasks (sync) -> tasks executed in the current event loop (Promise.then(), process.nextTick)  
Macro tasks (async) -> tasks executed after the current event loop (setTimeout, setInterval)

Map -> Uses key-value pairs, similar to Object but can have key of any type  
Set -> Without keys that each value can only appear once.

spread -> Unpack iterable types like string, array and objects ([...arr], { ...obj })  
destruct -> Unpack array and object into multiple variables ([a, b] = arr, { a, b } = obj)

undefined -> Declared but not initialized  
null -> Declared and initialized but with the absence of value (null)  

SessionStorage -> up to 5MB, deleted when tab closed, accessed in the same browser  
LocalStorage -> up to 10MB, is not deleted, accessed any tab in the browser  

Make sync HTTP request -> xmlHttpReq.open("GET", url, true) // false for asynch

Compare two date objects -> date1.getTime() === date3.getTime()

Disabled javascript in the page -> using `<noscript>` tag

modify URL without reloading the page -> window.history.pushState or replaceState

Buffer class is similar to an array of integer but corresponds to a raw memory allocation outside the V8 heap. Javascript pure is not compatible with binary data

Get image size -> On `onload` event, get width and height

Links:
- https://github.com/sudheerj/javascript-interview-questions#table-of-contents
- https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-interview-questions