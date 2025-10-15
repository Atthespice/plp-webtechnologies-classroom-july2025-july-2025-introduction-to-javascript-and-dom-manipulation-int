// Part 1: Variable declarations and conditionals
let age = 20;
let hasAccess = false;

if (age >= 18) {
    hasAccess = true;
} else {
    hasAccess = false;
}

// DOM Interaction 1: Display access status
document.getElementById("status").textContent = hasAccess ? "Access Granted" : "Access Denied";

// Part 2: Two custom functions
function greetUser(name) {
    return "Welcome, " + name + "!";
}

function calculateSquare(num) {
    return num * num;
}

// DOM Interaction 2: Button to check variables/functions
document.getElementById("checkBtn").addEventListener("click", function() {
    alert(greetUser("PLP Student") + "\nThe square of 5 is: " + calculateSquare(5));
});

// Part 3: Two loops
const results = [];
for (let i = 1; i <= 5; i++) { // Loop 1: Counting numbers
    results.push(i);
}

let sum = 0;
let j = 1;
while (j <= 5) { // Loop 2: Summing numbers
    sum += j;
    j++;
}

// DOM Interaction 3: Display loop results
document.getElementById("loopBtn").addEventListener("click", function() {
    const ul = document.getElementById("loopResults");
    ul.innerHTML = ""; // Clear previous results
    results.forEach(num => {
        const li = document.createElement("li");
        li.textContent = "Number: " + num;
        ul.appendChild(li);
    });
    const liSum = document.createElement("li");
    liSum.textContent = "Sum of 1 to 5: " + sum;
    ul.appendChild(liSum);
});
