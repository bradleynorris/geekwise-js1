function getUserName(){
   var uName = prompt('What is your name?').trim();
    // if (getUserName = true)
    //   alert(`Congrats on completing your assignment ` + uName);
    uName = uName.charAt(0).toUpperCase() + uName.substr(1).toLowerCase();
    welcome(properCap(uName));
};

function properCap(un){
  un = un.charAt(0).toUpperCase() + un.substr(1).toLowerCase();
  // welcome(un);
  return un;
}

function welcome(un){
  alert(`Welcome ${un}!`)
}

console.log(properCap('kmmndknkkn'));
