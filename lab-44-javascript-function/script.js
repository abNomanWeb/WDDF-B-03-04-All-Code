// function 
// function for reuse of coding 
// function for code reducing

// buildin Function
// alert();
// console.log("I am a Building Function.!");

// user defined function declaration
function anything(){
    console.log("I am a Function.!");
}

// function calling
anything();

// Expression Function declaration
let anything1 = function(){
    console.log("I am an Expression Function.!");
}

// function calling
anything1();

// Arrow Function
let anything2 = () => {
    console.log("I am an Arrow Function.!");
}

// function calling
anything2();

//function parameter & function argument
function anything4(fname = "Mr", lname = "X"){
    // console.log(`My Name is ${fname} ${lname}`);
    return(`My Name is ${fname} ${lname}`);
}

// let firstName = "Mohammad";
// let lastName = "Chowdhury";

let firstName = prompt("Type Your First Name:");
let lastName = prompt("Type Your Last Name:");

// function calling
// anything4("Hello", "World"); // static value
// anything4(firstName, lastName);
console.log(anything4(firstName, lastName));