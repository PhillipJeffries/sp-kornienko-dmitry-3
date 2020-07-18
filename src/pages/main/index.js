

/*let number = 0;

let growSoft = setInterval(function(){
  number+= 3;
  console.log(number)},3000)



setTimeout(function(){clearInterval(growSoft)}, 9000)
*/

//slider (trancition)


let slidePosition = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const avatarSliderWrapper = document.querySelector('.avatar-section__photo-wrapper');
const avatarSlider = document.querySelector('.avatar-section__slider');
// const slide = document.querySelector('.avatar-section__slide');
const prevAvatar = document.querySelector('.avatar-button_left');
const nextAvatar = document.querySelector('.avatar-button_right');
const avatarSlides = document.querySelectorAll('.avatar-section__slide');
const avatarSlidesCount = avatarSlides.length;
const avatarSlideWidth = avatarSliderWrapper.clientWidth / slidesToShow;
const avatarMovePosition = slidesToScroll * avatarSlideWidth;

avatarSlides.forEach((slide) => {
  slide.style.minWidth = `${avatarSlideWidth}px`;
});

nextAvatar.addEventListener('click', () => {
  console.log('1')
  const itemsLeft = avatarSlidesCount - (Math.abs(slidePosition) + slidesToShow * avatarSlideWidth) / avatarSlideWidth;

  slidePosition -= itemsLeft >= slidesToScroll ? avatarMovePosition : itemsLeft * avatarSlideWidth;
  setPosition();
  checkBtns();

});

const setPosition = () => {
  avatarSlider.style.transform = `translateX(${slidePosition}px)`;
};

const checkBtns = () => {
  prevAvatar.disabled = slidePosition ===0;
  nextAvatar.disabled = slidePosition <- -(avatarSlidesCount - slidesToShow) * avatarSlideWidth;
};

checkBtns();







//PAGINATION----------------  video 6 1:45

//server--------------------

const SERVER_URL = 'https://academy.directlinedev.com';

let tagsBox = document.querySelector('.filter-tags');

let cardBox = document.querySelector('.card-box');



//XMLHttpRequest --------------
function call(method, path, fn, onerror) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, SERVER_URL + path);
  xhr.send();
  xhr.onload = function () {
    fn(xhr);
  }
  xhr.onerror = function () {
    if(onerror)
      onerror(xhr);
  }
};

function createTag(tag) {
  return `
  <div>
  <input type="checkbox" id='${tag.id}' name="tags" value="" class="filter-checkbox">
  <label for='${tag.id}' style='color: ${tag.color}'>${tag.name}</label>
  </div>
  `
};


/*<div class="blog-card">
  <img src="${SERVER_URL}${card.desktopPhotoUrl}">
  <p class="blog-card-text">${card.text}</p>
  </div>*/


  
function createCard(card) {
  return `
  <div class="blog-card1">
  <div class="blog-img-wrapper">
    <img src="${SERVER_URL}${card.desktopPhotoUrl}">
  </div>
  <div class="blog-card-info-wrapper">
    <div class="blog-card-tags">
      <div class="blog-card-tag"></div>
    </div>
    <div class="blog-meta-wrapper">
      <span class="blog-card-date">${card.date}</span>
      <span class="blog-card-views">${card.views}</span>
      <span class="blog-card-comments">12345</span>
    </div>
    <h4 class="blog-card-title">${card.title}</h4>
    <p class="blog-card-text">${card.text}</p>
    <a href="#" class="blog-card-link">Go to this post</a>
  </div>
</div>
  `
};



//TAGS XMLHttpRequest 







//CARDS (posts) XMLHttpRequest 








//show/hide modal function------------

function showModal(modal){
  modal.classList.remove('hidden')
} ;

function hideModal(modal){
modal.classList.add('hidden')
} ;



//header-menu show/hide

let headerModal = document.querySelector('.header__modal'),
    headerModalShowButton = document.querySelector('.avatar-section__header-menu-button'),
    headerModalCloseButton = document.querySelector('.header__modal-close');



headerModalShowButton.addEventListener('click', function(event){
  event.preventDefault();
    showModal(headerModal)
  
});


headerModalCloseButton.addEventListener('click', function(event){
  event.preventDefault(); 
  hideModal(headerModal)
});

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(headerModal)}
}); 


//get form values function---------------------


function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll('input');
  const textareas = form.querySelectorAll('textarea');
  /*const l = inputs.length;
  for(let i = 0; i<l; i++){
    const input = inputs[i];
    body[input.id] = input.value;
  }*/
  /*
  for (leti=0; i<inputs.length; i++)
  */
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


//set form values function-------------------

function setAllValuesForm(form, values){
  const inputs = form.querySelectorAll('input');
  const textareas = form.querySelectorAll('textarea');
  for(let i=0; i< inputs.length; i ++){
    let input = inputs[i];
    switch (input.type){
      case 'radio':
        if(values[input.name] && values[input.name] === input.value){
          input.checked = true;
        }
        break;
      case 'checkbox':
        if(values[input.name]){
          if(typeof values[input.name] === 'object'){
            for(let j=0; j< values[input.name].length; j++) {
                let arr = values[input.name];
                if(arr[j] === input.value) {
                  input.checked = true; 
                }
            }
          }else {
            if(values[input.name] === input.value){
                input.checked = true;
            }
          }
        }
        break;
      default:
          input.value = values[input.name];
    }
  }
  for(let textarea of textareas) {
    textarea.value = values[textarea.name];
  }
};
  


//get url values function------------------



function getValuesUrl() {
  
  let params = {};
  if(location.search) {
    let paramsArr = location.search.substring(1).split('&'); //split('$') - &=','
    for(let i=0; i < paramsArr.length; i++) {
      let split = paramsArr[i].split('=');
      let name = split[0];
      let value = split[1];
      if(params[name]) {
        if(typeof params[name] === 'string') {
          params[name] = [params[name], value];
        } else {
          params[name].push(value);
        }
      } else {
          params[name] = value;
    }
    }
  }
  return params;
};

  console.log('urlValues', getValuesUrl());


//SET VALUES TO URL----------------------

function setValuesUrl(values) {
  //Object.keys() - get all keys from object
  let params = [];
  let names = Object.keys(values);
  for(let i=0; i<names.length; i++){
    if(typeof values[names[i]] === 'string') {
      params.push(names[i] + '=' + values[names[i]]);
    } else {
      for(let j=0; j<values[names[i]].length; j++) {
        params.push(names[i]+'='+values[names[i]][j]);
      }
    }
  }
  //window.location.search = '?' + params.join('&'); //[].join('$') - ','=$
  window.history.replaceState({}, document.title, '?' + params.join('&')); //without page reloading
}




//filter-form---------------------

let filterForm = document.querySelector('.filterForm');









//SIGN modal show/hide--------------------
let signModal = document.querySelector('.sign-form-wrapper') ;

let signLink = document.querySelector('.header__link_sign') ;

let signClose = document.querySelector('.signModalClose') ;


signLink.addEventListener('click', function(evt){evt.preventDefault(); showModal(signModal)}) ;

signClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(signModal)}) ;

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(signModal)}
}); 


//mailCheck--------------------

function mailCheck(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i) ;
}





//SIGN-FORM----------------------

let signForm = document.querySelector('.form_sign') ;
console.log('signForm', signForm);




signForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
})

/*signForm.addEventListener('submit', function (event){
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
})*/



//REGISTER modal show/hide------------------
let registerModal = document.querySelector('.register-form-wrapper') ;

let registerLink = document.querySelector('.header__link_register') ;

let registerClose = document.querySelector('.registerModalClose') ;




registerLink.addEventListener('click', function(evt){evt.preventDefault(); showModal(registerModal)}) ;

registerClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(registerModal)}) ;

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(registerModal)}
}); 

 

//registration send--------------

/*functiom sendReq({url, method, body, headers}) {   //set standart values (method='GET', body={},headers={})

}*/

function sendReq({url, method='GET', body={}, headers={}}) {
  const settings = {
    method: method,  //method,
    body: body,      //body,
    headers: headers,//headers,
  };

  return fetch(SERVER_URL + url, settings)
};







//REGISTER-FORM-------------------

let registerForm = document.querySelector('.form_register') ;
console.log('registerForm', registerForm) ;

let emailReg = document.querySelector('.email_reg');

registerForm.addEventListener('submit', function (event){
  event.preventDefault();
  const registerValues = getValuesForm(event.target);
  if(!mailCheck(registerValues.emailRegister)){
    alert('email is invalid')
  }
  if(registerValues.passwordRegister.length <3 || registerValues.passwordRegister.length <20) {
    alert('password is inalid')
  };
  console.log('registerValues', registerValues);
  console.log('target', event.target)
  sendReq({
    url: '/api/users', 
    method: 'POST', 
    body: JSON.stringify(registerValues),
    headers: {
      'content-type': 'aplication/json;charset=utf-8'
    },
  })
  .then(function (res) {
    console.log('res', res);
  });
})











//SLIDER--------------------------------

const wrapper = document.querySelector('.portfolio-section__slider-wrapper'),
      slider = document.querySelector('.portfolio-section__slider'),
      pagination = document.querySelector('.portfolio-section__pagination'),
      previosSlideButton = document.querySelector('.portfolio-section__arrow_left'),
      nextSlideButton = document.querySelector('.portfolio-section__arrow_right'),
      slides = document.querySelectorAll('.portfolio-section__slide');

slider.style.transition = 'margin-left .5s' ;

let shearWidth = +getComputedStyle(wrapper).width.split('px')[0],
    numberSlides = slides.length - 1, //slider.querySelectorAll('.portfolio-section__slide).length-1
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


previosSlideButton.addEventListener('click', function(){
  const index = activeSlide - 1;
  setActiveSlide(index);
});



nextSlideButton.addEventListener('click', function(){
  const index = activeSlide + 1;
  setActiveSlide(index);
});




//BACKEND----------------

if(localStorage.getItem('activeSlide')){
  setActiveSlide(localStorage.getItem('activeSlide'));
};


//date----------------------
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
 
