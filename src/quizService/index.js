const qBank = [
  // Easy Questions
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["a) var", "b) int", "c) string", "d) let"],
    correct: "a) var",
    level: "easy",
    questionId: "1"
  },
  {
    question: "Which of the following is not a data type in JavaScript?",
    answers: ["a) Number", "b) Boolean", "c) Character", "d) String"],
    correct: "c) Character",
    level: "easy",
    questionId: "2"
  },
  {
    question: "Which function is used to display a message box in JavaScript?",
    answers: ["a) alert()", "b) print()", "c) messageBox()", "d) display()"],
    correct: "a) alert()",
    level: "easy",
    questionId: "3"
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answers: ["a) append()", "b) push()", "c) add()", "d) insert()"],
    correct: "b) push()",
    level: "easy",
    questionId: "4"
  },
  {
    question: "How do you declare a function in JavaScript?",
    answers: ["a) func myFunction()", "b) function: myFunction()", "c) def myFunction()", "d) function myFunction()"],
    correct: "d) function myFunction()",
    level: "easy",
    questionId: "5"
  },

  // Medium Questions
  {
    question: "How can you check the type of a variable in JavaScript?",
    answers: ["a) typeof()", "b) type()", "c) instanceof()", "d) typeOf()"],
    correct: "a) typeof()",
    level: "medium",
    questionId: "6"
  },
  {
    question: "What is the purpose of the JSON.parse() method in JavaScript?",
    answers: ["a) To convert a string to a JSON object", "b) To stringify a JSON object", "c) To check if an object is JSON", "d) To remove an element from a JSON object"],
    correct: "a) To convert a string to a JSON object",
    level: "medium",
    questionId: "7"
  },
  {
    question: "What is the concept of 'hoisting' in JavaScript?",
    answers: ["a) Creating a variable inside a function", "b) Moving all declarations to the top of the current scope", "c) Assigning a value to a variable before declaring it", "d) Defining a variable without using the var keyword"],
    correct: "b) Moving all declarations to the top of the current scope",
    level: "medium",
    questionId: "8"
  },
  {
    question: "Which of the following is not a valid way to declare a function in JavaScript?",
    answers: ["a) function myFunction() {}", "b) var myFunction = function() {};", "c) () => {}", "d) function = myFunction() {}"],
    correct: "d) function = myFunction() {}",
    level: "medium",
    questionId: "9"
  },
  {
    question: "What is the purpose of the bind() method in JavaScript?",
    answers: ["a) To create a new array from an existing array", "b) To add an event listener to an element", "c) To set the value of this for a function permanently", "d) To reverse the order of elements in an array"],
    correct: "c) To set the value of this for a function permanently",
    level: "medium",
    questionId: "10"
  },

  // Hard Questions
  {
    question: "In JavaScript, what is a 'closure'?",
    answers: ["a) A function that has access to variables from its parent function even after the parent function has finished executing", "b) A function with no parameters", "c) A function that returns a boolean value", "d) A function defined inside another function"],
    correct: "a) A function that has access to variables from its parent function even after the parent function has finished executing",
    level: "hard",
    questionId: "11"
  },
  {
    question: "What is the purpose of the call() and apply() methods in JavaScript?",
    answers: ["a) To call a function asynchronously", "b) To apply a function to an array", "c) To change the value of this in a function and invoke it immediately", "d) To define a new function"],
    correct: "c) To change the value of this in a function and invoke it immediately",
    level: "hard",
    questionId: "12"
  },
  {
    question: "Which of the following is an example of 'prototypal inheritance' in JavaScript?",
    answers: ["a) Class-based inheritance using the extends keyword", "b) Using the Object.create() method to create objects with shared prototypes", "c) Creating objects with constructors", "d) Using the Object.setPrototypeOf() method to set the prototype of an object"],
    correct: "b) Using the Object.create() method to create objects with shared prototypes",
    level: "hard",
    questionId: "13"
  },
  {
    question: "What is the purpose of the async and await keywords in JavaScript?",
    answers: ["a) To define asynchronous functions", "b) To create synchronous code", "c) To handle errors in promises", "d) To pause the execution of a function"],
    correct: "a) To define asynchronous functions",
    level: "hard",
    questionId: "14"
  },
  {
    question: "What is the purpose of the Map object in JavaScript?",
    answers: ["a) To create key-value pairs and maintain the order of elements", "b) To store multiple values in a single variable", "c) To create and manipulate arrays", "d) To represent mathematical functions"],
    correct: "a) To create key-value pairs and maintain the order of elements",
    level: "hard",
    questionId: "15"
  }
];




export default () => Promise.resolve(qBank.filter((question) => question.level === "easy" || question.level === "medium" || question.level === "hard"));

