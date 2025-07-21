// 2) Print all arguments using a loop
function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printArgs(1, "hello", true, 42);

// 3) Count how many arguments were passed
function countArgs() {
    console.log("Count:", arguments.length);
}
countArgs(10, 20, 30);

// 4) Add all numeric arguments and print total
function sumNumbers() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            total += arguments[i];
        }
    }
    console.log("Sum:", total);
}
sumNumbers(1, 2, "hello", 3);

// 5) Stop printing arguments when value 0 is found
function printUntilZero() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === 0) break;
        console.log(arguments[i]);
    }
}
printUntilZero(5, 3, 0, 7);

// 6) Skip string arguments, only print numeric ones
function printNumbersOnly() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string") continue;
        console.log(arguments[i]);
    }
}
printNumbersOnly(1, "hello", 3, "world", 5);

// 7) Assign anonymous function to variable (multiply)
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); // 12

// 8) Anonymous function in setInterval (runs every 2 seconds)
setInterval(function() {
    console.log("This runs every 2 seconds");
}, 2000);

// 9) Anonymous function as event listener
// (requires browser DOM; use this in HTML file)
/*
<button id="myBtn">Click me</button>
<script>
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});
</script>
*/

// 10) IIFE that prints "Hello, world!"
(function() {
    console.log("Hello, world!");
})();

// 11) IIFE that calculates the square of a number
(function(n) {
    console.log("Square:", n * n);
})(5);

// 12) IIFE that sums array elements
(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of array:", sum);
})([1, 2, 3, 4]);

// 13) Local variable can't be accessed outside function
function testScope() {
    let localVar = "I'm local";
}
// console.log(localVar); // ReferenceError: localVar is not defined

// 14) Nested functions modifying outer variable
function outer() {
    let count = 0;

    function inner() {
        count += 1;
        console.log("Inner updated count:", count);
    }

    console.log("Before inner call:", count);
    inner();
    console.log("After inner call:", count);
}
outer();

// 15) Difference between var, let, and const
function testScopes() {
    if (true) {
        var x = 1;       // function scoped
        let y = 2;       // block scoped
        const z = 3;     // block scoped
    }

    console.log(x); // 1
    // console.log(y); // ReferenceError
    // console.log(z); // ReferenceError
}
testScopes();