// var btn = document.querySelector('button');
// var nav = document.querySelector('ul');
//
// // Click Event
// btn.addEventListener('click', function(evt){
//   // console.log(this);
//   // console.log(evt.target.innerText);
// });
//
// // mouseenter
// btn.addEventListener('mouseenter', function(evt2){
//   // console.log(evt2);
// });
//
// //mouseleave
// btn.addEventListener('mouseleave', function(evt){
//   evt.target.style.color = 'black';
//   evt.target.style.transition = '.5s';
// });
//
// btn.addEventListener('mouseenter', function(evt){
//   evt.target.style.color = 'red';
//   evt.target.style.transition = '.5s';
// });
//
// // Scrolling
//
// window.addEventListener('scroll', function(evt){
//   // console.clear();
//   // console.log(evt.pageY);
//   if(evt.pageY > 75){
//     nav.classList.add('vis');
//   }else{
//     nav.classList.remove('vis');
//   }
// });

// keydown, keyup, keypress

//Dom Manipulation

// var setDiv = document.querySelector('div#set');
// setDiv.textContent = 'Here is a line.'
//
// var getDiv = document.querySelector('div#get');
// // console.log(getDiv.textContent);
//
// var setDiv = document.querySelector('div#set');
// setDiv.innerHTML = '<p>Here is a line.</p>'
// // console.log(setDiv.innerHTML);

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var inputText = document.querySelector('input[type="text"]');
// var passText = document.querySelector('input[type="password"]');

submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log(form);
  var formVals = [];

  for(var i = 0; i < form.length - 1; i++){
    // console.log(form[i].value);
    formVals.push(form[i].value);
  }

  console.log(formVals);
  // var text = inputText.value;
  // var pass = passText.value;
  // console.log(inputText.value, passText.value);
  // alert(text + ' ' + pass);
});

// "listen" for keypresses;
// grab the keycode
// textcontent or innerHTML to "set" the code to the window
// keycode.info
















// end
