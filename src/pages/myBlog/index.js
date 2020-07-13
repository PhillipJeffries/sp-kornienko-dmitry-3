//show/hide  function------------

function showModal(modal){
  modal.classList.remove('hidden')
};

function hideModal(modal){
modal.classList.add('hidden')
};



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


call('GET', '/api/tags', function(res) {
  let response = JSON.parse(res.response);
  if(response.success) {
    const tags = response.data;
    for(let i=0; i < tags.length; i++) {
     
      let tagHtml = createTag(tags[i]);
      tagsBox.insertAdjacentHTML('beforeend', tagHtml)
    }
    console.log('tags', tags);
  } else {
      alert('WTF?!');
  }
});





//CARDS (posts) XMLHttpRequest 


call('GET', '/api/posts', function(res) {
  let response = JSON.parse(res.response);
  if(response.success) {
    const cards = response.data;
    let cardsHTML = '';
    for(let i=0; i < cards.length; i++) {
      cardsHTML += createCard(cards[i]);
    }
    cardBox.innerHTML = cardsHTML
    console.log('cards', cards);
  } else {
      alert('WTF?!');
  }
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


//get values filter form---------------------
filterForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('filterSubmitPush', getValuesForm(event.target));
  localStorage.setItem('filterForm', filterForm);
  setValuesUrl(getValuesForm(event.target));
  let filterValues = getValuesForm(event.target);
  return filterValues
})



//set values filter form--------------
setAllValuesForm(filterForm, localStorage.getItem('filterForm', filterForm))

setAllValuesForm(filterForm, getValuesUrl());