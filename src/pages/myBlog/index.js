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

//show/hide function

function showModal(modal){
  modal.classList.remove('hidden')
} ;

function hideModal(modal){
modal.classList.add('hidden')
} ;


//get form values function


function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll('input');
  const textareas = form.querySelectorAll('textarea');
  /*const l = inputs.length;
  for(let i = 0; i<l; i++){
    const input = inputs[i];
    body[input.id] = input.value;
  }*/
  for(let input of inputs) {
    switch (input.type) {
      case 'radio':
        if (input.checked)
          body[input.name] = input.value;
        break;
      case 'checkbox':
        if(!body[input.name])
          body[input.name] = [];
        if(input.checked)
          body[input.name].push(input.value);
        break;
      case 'file':
        body[input.name] = input.files;
        break;
      default:
        body[input.name] = input.value;
    }
    for(let textarea of textareas) {
      body[textarea.name] = textarea.value;
    }
  }
  return body;
}


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


//mailCheck

function mailCheck(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i) ;
}





//SIGN-FORM

let signForm = document.querySelector('.form_sign') ;
console.log('signForm', signForm);




signForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
})

signForm.addEventListener('submit', function (event){
  event.preventDefault();
  const signValues = getValuesForm(event.target);
  if(!mailCheck(signValues.emailSign)){
    alert('wtf!')
  }
  if(signValues.passwordSign.length <3 || registerValues.passwordRegister.length <20) {
    alert('fuckYou')
  };
  console.log('signValues', signValues);
  console.log('target', event.target)
})



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

 



//REGISTER-FORM

let registerForm = document.querySelector('.form_register') ;
console.log('registerForm', registerForm) ;

let emailReg = document.querySelector('.email_reg');

registerForm.addEventListener('submit', function (event){
  event.preventDefault();
  const registerValues = getValuesForm(event.target);
  if(!mailCheck(registerValues.emailRegister)){
    alert('wtf!')
  }
  if(registerValues.passwordRegister.length <3 || registerValues.passwordRegister.length <20) {
    alert('fuckYou')
  };
  console.log('registerValues', registerValues);
  console.log('target', event.target)
})







//SLIDER

const wrapper = document.querySelector('.portfolio-section__slider-wrapper'),
      slider = document.querySelector('.portfolio-section__slider'),
      pagination = document.querySelector('.portfolio-section__pagination'),
      previosSlideButton = document.querySelector('.portfolio-section__arrow_left'),
      nextSlideButton = document.querySelector('.portfolio-section__arrow_right'),
      slides = document.querySelectorAll('.portfolio-section__slide');

slider.style.transition = 'margin-left .5s' ;

let shearWidth = +getComputedStyle(wrapper).width.split('px')[0],
    numberSlides = slider.childElementCount - 1, //slider.querySelectorAll('.portfolio-section__slide).length-1
    activeSlide = 0,
    timerID,
    dots = [];

function initWidthSlides(){
  for(let i = 0; i< slides.length; i++){
    slides[i].style.width = shearWidth +'px';
  }
}

initWidthSlides();

function init() {
  for(let i=0; i<slides.length; i++) {
    let dot = document.createElement('button');
    dot.classList.add('portfolio-section__pagination-item');
    if(i === activeSlide) {
      dot.classList.add('portfolio-section__pagination-item_active');
    }
    dot.addEventListener('click', function() {
      setActiveSlide(i);
    })
    //dots[dots.length] = dot;
    dots.push(dot);
    pagination.insertAdjacentElement('beforeend', dot);
  }
};

init();

function setActiveSlide(index) {
  if(index < 0 || index > numberSlides){
    return;
  }
  dots[activeSlide].classList.remove('portfolio-section__pagination-item_active');
  dots[index].classList.add('portfolio-section__pagination-item_active');
  if(index === 0 || index < 0) {
    previosSlideButton.setAttribute('disabled', 'disabled');
  }
  if(index > 0) {
    previosSlideButton.removeAttribute('disabled', 'disabled');
  }
  if(index === numberSlides) {
    nextSlideButton.setAttribute('disabled', 'disabled');
  }
  if(index !== slides.length-1 ) {
    nextSlideButton.removeAttribute('disabled', 'disabled');
  }
  slider.style.marginLeft = '-' + shearWidth * index + 'px';
  activeSlide = index;
  
  localStorage.setItem('activeSlide', activeSlide);
  console.log(index)
}



nextSlideButton.addEventListener('click', function(){
  const index = activeSlide + 1;
  setActiveSlide(index);
});

previosSlideButton.addEventListener('click', function(){
  const index = activeSlide - 1;
  setActiveSlide(index);
});





//BACKEND

if(localStorage.getItem('activeSlide')){
  setActiveSlide(localStorage.getItem('activeSlide'));
};


//date
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

console.log('год' + year + ',' + months[month] + ',' + day);




/*    
const timerLogic = function(){
  if(timerID) clearTimeout(timerID);
  timerID = setTimeout(() => {
    slider.style.transition = '';
  }, 500);
};

function addWidthSlides(){
  for(slide of slides){
    //for(let i=0; i< slides.length; i++){}
    slides[i].style.width = `${shearWidth}px`; //shearWidth + 'px'
  }
};
*/

//60 min video
 
