// current date and time
// create a new `Date` object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

//console.log(currentDateTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)

document.querySelector('#datetime').textContent = currentDateTime;

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

// alert contact form
// const button = document.getElementById('myButton');
//   button.addEventListener('click', function() {
//     alert('Button clicked!');
// });
