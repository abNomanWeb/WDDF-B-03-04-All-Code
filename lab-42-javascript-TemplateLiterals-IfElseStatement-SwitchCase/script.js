// let fName = "Tutul";
// let age = "55";
// let address = "Khagrachori";

// alert("His Name is " + fName + "\nHis age is " + age + " \nHis Home Address is " + address);

// alert(`His Name is ${fName}
// His age is ${age}
// His Home Address is ${address}`);

//Concept of Switch Case
alert(`Enter an Option 
a. Option 1
b. Option 2
c. Option 3`);

let choice = prompt();
let output;

// if(choice == 'a'){
//     output = "Option A is Selected.";
// }else if(choice == 'b'){
//     output = "Option B is Selected.";
// }else if(choice == 'c'){
//     output = "Option C is Selected.";
// }else{
//     output = "Invalid Option Selected or Null Input Given.!";
// }

switch(choice){
    case "a": 
        output = "Option A is Selected.";
        break;
    case "b": 
        output = "Option B is Selected.";
        break;
    case "c": 
        output = "Option C is Selected.";
        break;
    default:
        output = "Invalid Option Selected or Null Input Given.!";
        break;
}
document.write(`Output is ${output}`);
