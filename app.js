'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');
const setupDropdowns = document.querySelectorAll('#setup-dropdown');
const setupAccordion = document.querySelector('.setup-div-flex-right');

// Event Listerners
selectClose.addEventListener('click', function (e) {
  e.preventDefault();
  e.target.closest('.select-a-plan').classList.add('invisible');
  // console.log('Clicked');
});

setupDropdowns.forEach(function (setupDropdown) {
  setupDropdown.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('Clicked');
    if (e.target.classList.contains('setup-flex-top')) {
      e.target
        .closest('#setup-dropdown')
        .querySelector('.setup-flex-bottom')
        .classList.toggle('invisible');
    }
  });
});

setupAccordion.addEventListener('click', function(e){
    e.preventDefault();
    
})

<svg
  width="41"
  height="40"
  viewBox="0 0 21 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z"
    fill="#fff"
  />
</svg>;
