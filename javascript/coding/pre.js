//==================================
// Callback Functions in JavaScript
//==================================

function greet(name) {
  console.log(`your name is: ${name}`);
}

// a function that takes another function as an argument or return a function called Higher-Order Function
function HigherOrderFunction(callback) {
  var name = "Sharif";
  callback(name);
}

// pass greet as an argument to HigherOrderFunction function, passing only reference, not invoking it
HigherOrderFunction(greet);

// --- Callback -> Promise -> async/await examples + explanations ---

// 1) Callback-style async (simulated)
function fetchNameCallback(callback) {
  setTimeout(() => {
    // callback(err, result)
    callback(null, "Sharif");
  }, 200);
}

fetchNameCallback((err, name) => {
  if (err) return console.error("callback error:", err);
  console.log("callback:", name);
});

// 2) Convert the callback-based API into a Promise-based API
function fetchNamePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve on success, reject on failure
      resolve("Sharif");
    }, 200);
  });
}

fetchNamePromise()
  .then((name) => console.log("promise:", name))
  .catch((err) => console.error("promise error:", err));

// 3) Use async/await (consumes the Promise API)
async function showName() {
  try {
    const name = await fetchNamePromise();
    console.log("async/await:", name);
  } catch (err) {
    console.error("async error:", err);
  }
}
showName();

// --- Demonstrate Promise.all and Promise.race ---

function delayResult(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

Promise.all([delayResult(300, "A"), delayResult(100, "B")]).then((results) =>
  console.log("Promise.all results:", results)
); // waits for all

Promise.race([delayResult(300, "slow"), delayResult(100, "fast")]).then(
  (winner) => console.log("Promise.race winner:", winner)
); // first settled

// --- Show a simple race condition example ---
// Race condition: two async operations update shared state and final result depends on timing.
let shared = 0;
function addAfter(delay, amount) {
  return new Promise((resolve) =>
    setTimeout(() => {
      shared += amount;
      resolve(shared);
    }, delay)
  );
}
addAfter(300, 1); // slower increment
addAfter(100, 10); // faster increment
setTimeout(() => {
  console.log("shared (race outcome):", shared);
}, 500);

// --- Callback hell example (deep nesting) ---
// Callback hell: deeply nested callbacks that are hard to read/maintain.
function nestedCallbacks(cb) {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        cb("done");
      }, 50);
    }, 50);
  }, 50);
}

nestedCallbacks((result) => console.log("callback hell result:", result));

// Comments summary:
// - Callback hell: results from many nested callbacks; leads to unreadable code and error-handling duplication.
// - Converting to Promises flattens chaining (.then/.catch) and centralizes error handling.
// - async/await makes Promise-based code look synchronous and easier to follow.
// - Race conditions occur when multiple async operations interact with shared state and the order of completion affects correctness; avoid by coordinating (locks, sequencing, atomic updates, or using immutability).

// --- setImmediate (Node.js) explanation + examples ---
// setImmediate schedules a callback to run on the "check" phase of Node's event loop,
// i.e. after I/O callbacks. It's Node-specific (not available in browsers).
// process.nextTick() runs before setImmediate and setTimeout.
// The ordering between setImmediate and setTimeout(..., 0) can vary:
// - When scheduled from the main module, setTimeout(..., 0) often runs before setImmediate.
// - When scheduled from an I/O callback, setImmediate will run before setTimeout(..., 0).

// Simple demo showing nextTick -> (setTimeout / setImmediate ordering may vary)
function demoImmediateSimple() {
  console.log("demoImmediateSimple: start");

  setTimeout(() => console.log("demoImmediateSimple: setTimeout 0"), 0);

  setImmediate(() => console.log("demoImmediateSimple: setImmediate"));

  process.nextTick(() => console.log("demoImmediateSimple: process.nextTick"));

  console.log("demoImmediateSimple: end");
}
demoImmediateSimple();

// Demo showing deterministic ordering when invoked from an I/O callback
// (setImmediate runs before setTimeout(0) when scheduled inside an I/O callback)
const fs = require("fs");
function demoImmediateInIO() {
  fs.readFile(__filename, () => {
    console.log("\ndemoImmediateInIO: inside I/O callback");

    setTimeout(() => console.log("demoImmediateInIO: setTimeout 0"), 0);

    setImmediate(() => console.log("demoImmediateInIO: setImmediate"));

    process.nextTick(() => console.log("demoImmediateInIO: process.nextTick"));
  });
}
demoImmediateInIO();

// Notes:
// - Use setImmediate when you want a callback to run asynchronously after I/O events.
// - Avoid relying on a specific ordering between setTimeout(..., 0) and setImmediate in general code.
