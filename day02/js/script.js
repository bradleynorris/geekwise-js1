// alert('Click okay to self destruct...');

// var confirmInfo = confirm('A difficult road lies ahead. Do you wish to continue?');
// console.log (confirmInfo);

// var userAge= parseInt( prompt('How old are you...in dog years?') );

// String Object
// var myString = 'this is a string'; // string literal
// var myStringObj = new String('this is also a string');

//Number Object

// var num = 7
// var numObj = new Number(7);

//typeof


// Float Object

// var float = 5.345678;
// console.log(float);

// boolean

// var bool = true;
// console.log(bool);

//array

// var myArr = ['red', 'orange', 'green'];
// var numArr = [0, 1, 2, 3];
// console.log(numArr[1] + numArr[2]);
// console.log(   myArr[0] + myArr[2]  );

// Object Object

// var myCar = {
//   make: "Subaru",
//   model: "Outback",
//   year: 2016
// };
// console.log(   myCar.year   );

// Math Object

// var num1 = 5.003;
// console.log(  Math.round(num1) );
// console.log(  Math.floor(num1) );
// console.log(  Math.ceil(num1)  );

// var rand = Math.random();
// rand = rand*10;
// rand = Math.floor(rand);
// console.log(rand);

// console.log(Math.floor( (Math.random() * 11) ));

// Date Object

var theDate = new Date();
// console.log(theDate.getFullYear());

//getDate = day of the month
//getDay = day of the month
// getMonth = month (o based)
//getFullYear = year

// if( theDate.getDay() === 0 ){
//   console.log('sunday');
// }else if ( theDate.getDay() === 1 ){
//   console.log('monday');
// }else if ( theDate.getDay() === 2 ){
//   console.log('tuesday');
// }else if ( theDate.getDay() === 3 ){
//   console.log('wednesday');
// }

// var myBday = new Date( 1999, 9, 02 );
// console.log(myBday);

// var myDate = theDate.toLocaleString( 'en-us', {day: '2-digit'} );
// console.log(myDate);

// var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
// var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
// var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});

// console.log(myBmon + ' ' + myBdate + ', ' + myByear);

// prompt user for three individual items
// ask the user for their birth month
// ask the user for their birth day
// ask the user for their birth year
// save each response as a variable
// parse each response into a Number
// for zero based items subtract 1
// create a new date instance representing user's bday
// var myBday = new Date (1999, 9, 02)
// var someVariableName = new Date(var, var, var);
//take user's bday object and parse to console in the following format:
// Oct 02, 99

var userByear= parseInt( prompt('What year were you born?') );
var userBmon= parseInt( prompt('What month were you born in (use numbers; i.e. October=10)?') ) -1;
var userBday= parseInt( prompt('What day of the month were you born on?') );

var userBirthday = new Date (userByear, userBmon, userBday);

var m = userBirthday.toLocaleString('us-en', {month: 'short'});
var d = userBirthday.toLocaleString('us-en', {day: 'numeric'});
var y = userBirthday.toLocaleString('us-en', {year: 'numeric'});

console.log(m + ' ' + d + ', ' + y);
