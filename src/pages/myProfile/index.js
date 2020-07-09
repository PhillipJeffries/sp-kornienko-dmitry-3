function showModal(modal){
  modal.classList.remove('hidden')
} ;

function hideModal(modal){
  modal.classList.add('hidden')
} ;

//CHANGE PASSWORD MODAL SHOW/HIDE
let changePasswordModal = document.querySelector('.changePasswordModal') ;
let changePasswordButton = document.querySelector('.changePasswordButton') ;
let changePasswordModalClose = document.querySelector('.changePasswordModalClose') ;


changePasswordButton.addEventListener('click', function(evt){evt.preventDefault(); showModal(changePasswordModal)}) ;
changePasswordModalClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(changePasswordModal)}) ;
document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(changePasswordModal)}
}); 


let changeDataModal = document.querySelector('.changeDataModal') ;
let changeDataModalButton = document.querySelector('.changeDataButton') ;
let changeDataModalClose = document.querySelector('.changeDataModalClose') ;

//DATA EDIT MODAL SHOW/HIDE

changeDataModalButton.addEventListener('click', function(evt){evt.preventDefault(); showModal(changeDataModal)}) ;
changeDataModalClose.addEventListener('click', function(evt){evt.preventDefault(); hideModal(changeDataModal)}) ;
document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
      hideModal(changeDataModal)}
}); 


//FILTER-FORM



const filterForm = document.querySelector('.filterForm');

console.log('FILTER', filterForm);