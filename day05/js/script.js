// if
// == equal to
// === strict equal to
// ! not
//!= not equal to
// !== not strict equal
// && and
// || or

// var age = parseInt(prompt("How old are you?"));

// if(age > 21){
//   console.log("Welcome!");
// }
// if (age === 21){
//   console.log("Exactly!");
// }
// if (age < 21){
//   console.log("Scram kid!");
// }

// shorter than that -->
/*
var age = parseInt( prompt("What is your age?"));
var gender = prompt("Are you male or female?");

if (age > 21 && gender == "female"){
  console.log("Welcome!");
}else if(age < 21){
  console.log("Scram Kid!");
}else{
  // console.log("Exactly!");
}

if(!age){
  console.log("enter your age");
}*/

// switch statement
/*
var today = new Date().getDay();
switch(today){
  case 0:
    console.log("its still the weekend!");
    break;
  case 1:
    console.log("bad case of the mondays.");
    break;
  default:
    console.log("well, at least its not monday.");
}
*/

// ternary operator
/*
var age = prompt('What is your age?');

age >= 21 ? console.log('welcome!') : console.log('nope');
*/

/*
console.log(myname);
 var myname = 'bradley'; //function scope
 console.log(myname);
 let mymiddlename = 'curran'; //block scope
 console.log(mymiddlename);
 const mylastname = 'Norris'; //block scope
 console.log(mylastname);

var dog = 2;

if(dog > 1){
  let dogyears = 7;
  console.log(dogyears * dog);
}
*/

// Javascript functions

/*
// Function Declaration
function myName(name, age){ // parameters go here inside ()
  // alert(name + ' is ' + age + ' years old.');
  alert(`${name} is ${age} years old`)
  // temlate literals
  // $ = interpolation
}
myName('chuck', 29); // arguements go inside () & comma separate

// Function Expression
var myCar = function(car, year){ //parameters go here
  alert(`my car is a ${year} subaru ${car}`);
}('outback', 2016); //invoke the alert w/o separate line
// myCar();
*/

// var fname = prompt('What is your first name?');
// var lname = prompt('Okay, what is your last name?');

// var yourName = function (f, l){
//   alert(`Your name is ${f} ${l}`);
// }('Bradley', 'Norris');

// function yourName(fname, lname){
//   alert(`Your name is ${fname} ${lname}`);
// };


// The user clicks the button
// user is prompted to enter their first name
// save user's name and account for extra spaces
// ensure first character is capped
// remaining are drop capped
// pass into another function
// alert welcome message to user
// minumum 2 functions
// lines 111-113 is one function
//save "extra spaces/capped/uncapped till last"






// end page
