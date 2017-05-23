/* var myName = "Brad Norris";

console.log(myName);

// .length
console.log(myName.length);

// .carAt() ~zero based~
console.log(myName.charAt(8));

// .indexOf()
console.log(myName.indexOf("d"));
console.log(myName.indexOf("N"));

// .concat()
console.log(myName.concat(" is cool!"));

// .substring()
console.log(myName.substring(0, 4));
console.log(myName.substring(5, 2));

// .substr()
console.log(myName.substr(5, 2));
console.log(myName.substr(1, 6));
console.log(myName.substr(4));

// toUpperCase()
console.log(myName.toUpperCase());

// .toLowerCase()
console.log(myName.toLowerCase());

//
var newUser = '          yoda     ';
console.log(newUser);

// .trim()
console.log(newUser.trim());

// regular expression
*/

// Arrays identified by []

var sodas = ['pepsi', 'coke', 'mountain dew'];
// console.log(sodas);
// console.log(Array.isArray(sodas));

var colors = ['red', 'orange', 'purple'];
var arrLength = colors.push('green');
// console.log("The new array is ", colors);
// console.log("the array length is ", arrLength);

 var arrLength = colors.unshift('pink');
// console.log("The new array is ", colors);

var item = colors.pop();
// console.log("Item is ", item);
// console.log("the new array is ", colors);

item = colors.shift();
// console.log("Item is", item);
// console.log("New array is", colors);

// .indexOf()
// console.log(colors.indexOf('red'));

// .lastIndexOf()
// console.log(colors.lastIndexOf('orange'));

// .splice()
var removeItem = colors.splice(1, 2);
// console.log(colors);
// console.log(removeItem);

var addItems = colors.splice(1, 0, 'green', 'blue');
// console.log(colors);
// console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// console.log(newColors);
var remGreen = newColors.indexOf('green');
// console.log(remGreen);
newColors.splice(remGreen, 1, 'indigo');
// console.log(newColors);

var moreColors = newColors.slice(0, 3);
// console.log(moreColors);
// slice (first number is where to start, second number is 'up to but not including')

// .reverse()
var revColors = newColors.reverse();
// console.log(newColors);
// console.log(revColors);

newColors.sort();

var names = ['Matt', 'matt', 'Higley', 'david', 'higley', 'David'];
names.sort();
// console.log(names);

var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});
// console.log(points);

// for loop
for(var i = 0; i < newColors.length; i++){
  // console.log('My fav color is ', newColors[i]);
}

var modColors = newColors.map(function(e, i){
  // console.log(e);
  // console.log(i);
  console.log('my fav color', e);
});
console.log(modColors);

var modPoints = points.map(function(e){
  return e * 2;
})
console.log(points);
console.log(modPoints);
