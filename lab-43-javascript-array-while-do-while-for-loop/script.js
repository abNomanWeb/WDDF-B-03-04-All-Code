// let countries = ["Bangladesh", "Mayanmar", "Nepal", "Bhutan", "Maldives"];

// const employee = new Array("Tutul", "Rownok", "Mukit", "Tamanna", "Taiyeba", "Rakib");

// alert(employee);
// document.write(employee);
// console.log(employee);

// console.log(employee[1] = "Shihab");
// console.log(employee);

// console.log(employee.length);
// console.log(employee[employee.length] = "Farhad");
// console.log(employee);

// push
// console.log(employee.push("Shojib", "Naim"));
// console.log(employee);

//pop
// console.log(employee.pop());
// console.log(employee);

//unshift
// console.log(employee);
// console.log(employee.unshift("Shojib", "Naim"));
// console.log(employee);

//shift
// console.log(employee);
// console.log(employee.shift());
// console.log(employee);

//Empty Array
// let countries = [];

// countries.unshift("Japan", "China", "South Korea", "KSA");
// countries.push("Bangladesh", "USA", "UK", "Germany");

// console.log(countries);

//Array Conact/Merge
// let countriesOne = ["Japan", "China", "South Korea", "KSA"];
// let countriesTwo = ["Bangladesh", "USA", "UK", "Germany"];
// console.log(countriesOne.concat(countriesTwo));

// array sorting and reverse
// let mergeArray = countriesOne.concat(countriesTwo);
// console.log(mergeArray.sort());
// console.log(mergeArray.reverse());

//String Split, Array Split
//String
// let messages = "Bangladesh is a Beautiful Country";
// console.log(messages);

//to Array
// let convertArray = messages.split(" ");
// console.log(convertArray);

//to String
// let convertString = convertArray.toString();
// let convertString = String(convertArray);
// console.log(convertString);

//to String without Comma
// let commaRemove = convertArray.join(" ");
// console.log(commaRemove);

// while loop

// let i = 1;

// while(i <= 10){
//     console.log(`Output of I is: ${i}`);
//     i++;
// }

// do while loop

// let i = 1;

// do{
//     console.log(`Output of I is: ${i}`);
//     i++;
// }while(i <= 10);

//for loop
let x = null;

for(x=1; x <= 10; x++){
    if(x == 5){
        console.log("Yahoo..!");
    }
    console.log(`Output of X is: ${x}`);
}

//break

// for(x=1; x <= 10; x++){
//     if(x == 5){
//         // console.log("Yahoo..!");
//         break;
//     }
//     console.log(`Output of X is: ${x}`);
// }

//continue //skip

// for(x=1; x <= 10; x++){
//     if(x == 5){
//         // console.log("Yahoo..!");
//         continue;
//     }
//     console.log(`Output of X is: ${x}`);
// }

console.log("You are out of Loop.!");