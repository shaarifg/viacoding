// a s

// getName();
console.log(getName());

var x = 7;
// a s

// getName();
console.log(getName());

var x = 7;

////////////////////////////////////////////////////////
// Demo: function declaration vs var/function expression
////////////////////////////////////////////////////////

console.log("Call getName() (function declaration) after it's been hoisted:");
getName(); // Works because function declarations are hoisted entirely

// Function expression vs declaration
console.log("typeof sayHello before assignment:", typeof sayHello); // 'undefined' because var sayHello is hoisted
try {
  // calling would throw if sayHello is still undefined; show guarded behaviour
  sayHello();
} catch (e) {
  console.log("Calling sayHello before assignment throws:", e.message);
}

var sayHello = function () {
  console.log("Hello from function expression");
};

console.log("typeof sayHello after assignment:", typeof sayHello);
sayHello();

function getName() {
  console.log("Shaarif");
}
function getName() {
  console.log("Shaarif");
}
