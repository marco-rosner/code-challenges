NodeJS is a runtime environment based on JavaScript that runs on V8 engine (browser)

NodejS uses a non-blocking, event-driven architecture to handle async operations. The Event Loop is at the core of this model, managing callbacks

Pros:
- Fast processing and event-based model
- Uses Javascript
- NPM
- Streamming huge amounts of data and I/O intensive operations

Cons:
- Not suitable for heavy computational tasks (use worker threads to it)
- Using callback is complex and possible to end up with several nested callbacks
- Dealing with relational database is not a good option for NodeJS

Requests -> Event Queue -> Event Loop -> Non-blocking op - I/O polling
Requests -> Event Queue -> Event Loop -> Blocking op -> Thread pool -> External resources (computation, database, file system)

Event Loop handle asynchronous callbacks. Its the foundation of the non-blocking I/O

EventEmmitter is a class that holds all the objects that can emit events

Event-driven programming in NodeJS -> Uses EventEmitter class to handle events and callbacks

Node is single-threaded for async process but use thread pool to sync process (external resources)

Promises over callbacks
- The control flow is more specifed and structured
- Low coupling
- Built-in error handling
- Improved readability

require vs import -> `require` is used for CommonJS modules and `import` is used for ES6 modules

URL -> host, pathname, search and query

parse HTML -> Using Fast HTML Parser module or cheerio

REPL -> Read Eval Print Loop, is an interactive shell for NodeJS

Middlewares in ExpressJS -> Are functions that have access to the request and response objects used to authentication, logging, error handling...

Callback hell (Callback Pyramid) -> Multiple nested callbacks. To avoid it use Promises, async/await or Promise.all

Importance of closures in NodeJS - Maintaining state and encapsulation

process - Global object that provides information and control over the NodeJS process. E.g. process.env, process.argv  

fork - Particular case of spawn() that generates a new instance of a V8 engine, multiple workers run on a single node base for multiple tasks
spawn - Launches a new process with the available set of commands, single copy of the node module is active on the processor

setTimeout - schedule a callback to run after a specified dealy
setImmediate - schedule a callback to run at the end of the current event loop queue

Error handle - To sync code: try/catch and to async code Promise.catch() or error event listeners

Error-Fist Callback - A callback that return an error as first arg and the data in the second

Stream - A way to read/write files and request/responses to stremming the data using pipe function

readfile -> buffered process to read a file, requires a lot of memory and take time
createReadStream -> partially-buffered process, split the file into chunks, process the chunk, remove it from memory and read the next. Make easy to read large files

NPM -> Node Pacakge Manager
- CLI to access online repository for Node packages and modules
- Manage versions and dependencies
- node_modules -> is similar to cache for the external modules
- package.json -> Manage project dependencies, scripts and metadata

Timing features:
- setTimeout/clearTimeout
- setInterval/clearInterval
- setImmediate/clearImmediate
- process.nextTick

etf8 module -> Encode/Decode string

Streams
- Readable streams
- Writeable streams
- Duplex streams - used to both reading and writing
- Transform streams, duplex streams which output is computed

Authentication:
- Building your own mechanism
- Using Passport.js - middleware for NodeJS
- Delegating autentication for third party provider

Test pyramid:
- Unit test
- Integration test to validate models interactions
- Acceptance testing (API contract test)

ExpressJS
- Popular open-source framework based on NodeJS
- Easy to configure, customize and develop applications
- Based in middlewares modules that perform additional tasks

NodeJS vs AngularJS
- Node is a runtime, Angular is open-source web application framework
- To work on Javascript library needs to install NodeJS, to read Angular file, only need to install AngularJS
- Node is used to server-side app, AngularJS is used to build SPA clide-side apps