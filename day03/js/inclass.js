var userNameArray = [];
var userNames = '';


function getUser(){
  userNames = prompt('please enter another username');
  userNameArray.push(userNames);
  console.log(userNameArray);
}

function removeUser(){
  userNameArray.shift();
  console.log(userNameArray);
}
