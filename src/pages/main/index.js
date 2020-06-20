/*
let fuckYou = "Fuck You";
let man = "and suck my dick";
let space = " ";
let fucker = {
  name: "",
  age: "",
};
alert(fuckYou + space + man);
fucker.name = prompt("What is Your name, bitch?");

fucker.age = prompt("How old are You, bitch&");
console.log(fucker);
*/



/*let number = 0;

number = prompt("write the number, bitch");
for(let i=0; i<=number;i++){
  if(i%4){
    console.log(i)
  }
}
*/

/*let number = 0;

let growSoft = setInterval(function(){
  number+= 3;
  console.log(number)},3000)



setTimeout(function(){clearInterval(growSoft)}, 9000)
*/



function showModal(modal){
  modal.classList.remove('hidden')
} ;

function hideModal(modal){
modal.classList.add('hidden')
} ;


//SIGN modal show/hide
let signModal = document.querySelector('.sign-form-wrapper') ;

let signLink = document.querySelector('.header__link_sign') ;

let signClose = document.querySelector('.signModalClose') ;


signLink.addEventListener('click', function(evt){evt.preventDefault(); showModal(signModal)}) ;

signClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(signModal)}) ;

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(signModal)}
}); 



//REGISTER modal show/hide
let registerModal = document.querySelector('.register-form-wrapper') ;

let registerLink = document.querySelector('.header__link_register') ;

let registerClose = document.querySelector('.registerModalClose') ;




registerLink.addEventListener('click', function(evt){evt.preventDefault(); showModal(registerModal)}) ;

registerClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(registerModal)}) ;

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(registerModal)}
}); 

 


function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll('input');
  const l = inputs.length;
  for(let i = 0; i<l; i++){
    const input = inputs[i];
    body[input.id] = input.value;
  }
  return body;
}


//REGISTER-FORM

let registerForm = document.querySelector('.form_register') ;
console.log('fuckYou', registerForm) ;


registerForm.addEventListener('submit', function (event){
  event.preventDefault();
  const registerValues = getValuesForm(event.target);
  console.log(registerValues);
})






//SIGN-FORM

let signForm = document.querySelector('.form_sign') ;
console.log(signForm)



signForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
})