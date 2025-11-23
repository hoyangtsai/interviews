// Problem 1 - Bubble sort
function bubbleSort(sequence) {
  // Write your bubble sort code here
  let n = sequence.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sequence[j] > sequence[j + 1]) {
        // Swap sequence[j] and sequence[j+1]
        let temp = sequence[j];
        sequence[j] = sequence[j + 1];
        sequence[j + 1] = temp;
      }
    }
  }
  return sequence;
}

console.log(bubbleSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5])


// Problem 2 - Find second largest within O(n) complexity.
function findSecondLargest(sequence) {
  // Write your algorithm here with O(n) time complexity.
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > first) {
      second = first;
      first = sequence[i];
    } else if (sequence[i] > second && sequence[i] < first) {
      second = sequence[i];
    }
  }

  return second === -Infinity ? null : second;
}

console.log(findSecondLargest([3, 3, 2, 1]), 2);
console.log(findSecondLargest([3, 3, 4, 2, 1]), 3);


// Problem 3 - Closure
// Write some example(s) about how you take advantage of closure
function makeCounter() {
  let count = 0; // count is a private variable

  return function() {
    count += 1; // Increment the count
    return count; // Return the current count
  };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
// Each time we call counter(), it remembers the value of count from the previous call due to closure.


// Problem 4 - Hoisting
// Write some example(s) to explain the concept of hoisting
console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = 5;
console.log(hoistedVar); // Output: 5

hoistedFunction(); // Output: "This function is hoisted!"
function hoistedFunction() {
  console.log("This function is hoisted!");
}

// In the above example, the variable hoistedVar is hoisted to the top of its scope but not initialized, so it logs undefined.
// The function hoistedFunction is fully hoisted, so we can call it before its declaration.


// Problem 5 - var, let and const
// Write some example(s) showing the difference between the above three.
function varLetConstExample() {
  if (true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
  }

  console.log(varVariable); // Output: "I am a var variable"
  // console.log(letVariable); // Error: letVariable is not defined
  // console.log(constVariable); // Error: constVariable is not defined

  varVariable = "Var variable can be reassigned";
  // letVariable = "Let variable can be reassigned"; // This would work if it were in scope
  // constVariable = "Const variable cannot be reassigned"; // Error: Assignment to constant variable
}

varLetConstExample();

// In the above example, varVariable is function-scoped and can be accessed outside the if block.
// letVariable and constVariable are block-scoped and cannot be accessed outside the if block.
// var can be redeclared and reassigned, let can be reassigned but not redeclared in the same scope, and const cannot be reassigned or redeclared.


// Problem 6 - Handling array
// Given below data, please write code to output all users under 40 years old in below format:
// 1. Mr. Daniel Deng (age 11)
// 2. Mrs. Maria Hanington (age 33)
// ...

const users = [
  {
    firstName: 'Freddie',
    lastName: 'Hong',
    gender: 'male',
    age: 32,
    married: true,
  },
  {
    firstName: 'Shaquille',
    lastName: 'Fang',
    gender: 'male',
    age: 3,
    married: false,
  },
  {
    firstName: 'Justin',
    lastName: 'Fan',
    gender: 'male',
    age: 42,
    married: true,
  },
  {
    firstName: 'Sophia',
    lastName: 'Liu',
    gender: 'female',
    age: 12,
    married: false,
  },
  {
    firstName: 'Maxwell',
    lastName: 'Jeng',
    gender: 'male',
    age: 43,
    married: false,
  },
];
function listUsersUnder40(users) {
  // Write your code here
  const filteredUsers = users.filter(user => user.age < 40);
  filteredUsers.forEach((user, index) => {
    let title = '';
    if (user.gender === 'male') {
      title = 'Mr.';
    } else if (user.gender === 'female') {
      title = 'Mrs.';
    }
    console.log(`${index + 1}. ${title} ${user.firstName} ${user.lastName} (age ${user.age})`);
  });
}

listUsersUnder40(users);
// Expected output:
// 1. Mr. Freddie Hong (age 32)
// 2. Mr. Shaquille Fang (age 3)
// 3. Mrs. Sophia Liu (age 12)


// Problem 7 - Immutability
// Write some example(s) to explain the concept of immutability and what's the benefit of it, especially on performance
// Immutability means that once a data structure is created, it cannot be changed. Instead of modifying the original data, we create a new copy with the changes.
const originalArray = [1, 2, 3];

// Using immutability to add an element
const newArray = [...originalArray, 4];

console.log(originalArray); // Output: [1, 2, 3]
console.log(newArray); // Output: [1, 2, 3, 4]

// Benefits of immutability:
// 1. Predictability: Since data cannot be changed, functions that use immutable data are easier to reason about.
// 2. Performance: In frameworks like React, immutability allows for efficient change detection through shallow comparisons, reducing the need for deep checks and improving rendering performance.
// 3. Debugging: Immutable data structures can help prevent unintended side effects, making it easier to track changes and debug issues in the code.