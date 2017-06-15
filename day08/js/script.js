// 1 target the entire form
// when go is pressed, run a function
// this function will get all input values (loop),
// push each value into a new array (create empty array in function)
// c-log array

// var form = document.querySelector('form#nav');
//
// form[2].addEventListener('click', getInputs);
//
// function getInputs(evt){
//   evt.preventDefault();
//   /*
//   var inputArr = [];
//   for(let i = 0; i < form.elements.length -1; i++){
//     inputArr.push(form.elements[i].value);
//   }console.log(inputArr); */
//   document.body.innerHTML += sticky;
//   stickySetup();
// }
//
// var sForm = document.createElement('form'),
//     sBtn = document.createElement('button'),
//     sInput = document.createElement('input');
//
// sForm.id = 'sticky';
// sBtn.id = 'add'
// sBtn.textContent = '+';
// sInput.type = 'text';
// sInput.placeholder = 'todo';
// // sForm.appendChild(sBtn);
// // sForm.appendChild(sInput);
// sForm.append(sBtn, sInput);
// document.body.appendChild(sForm);
//
// sBtn.addEventListener('click', addTodo);
//
// function addTodo(evt){
//   evt.preventDefault();
//   var newTodo = document.createElement('input');
//   newTodo.type = 'text';
//   newTodo.placeholder = 'todo';
//   sForm.appendChild(newTodo);
// }

/*var sticky =
`
<form id="sticky">
  <button id="add">+</button>
  <input type="text" placeholder="todo">
</form>
`;

function stickySetup(){
  var todo = document.createElement('input');
  var stickySubmit = document.querySelector('#sticky');
  stickySubmit[0].addEventListener('click', function(evt){
    evt.preventDefault();
    stickySubmit.appendChild(todo);
  });
}
*/

// recreate the nav in JS the same way we did the sticky above.


var lForm = document.createElement('form'),
    lInput1 = document.createElement('input'),
    lInput2 = document.createElement('input'),
    lBtn = document.createElement('button');

lForm.id = 'nav';
lBtn.textContent = 'Go';
lBtn.type = 'submit';
lInput1.type = 'text';
lInput1.placeholder = 'username';
lInput2.type = 'password';
lInput2.placeholder = 'password';
lForm.append(lInput1, lInput2, lBtn);
document.body.appendChild(lForm);










//end
