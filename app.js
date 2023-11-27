'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');
const setupDropdowns = document.querySelectorAll('#setup-dropdown');
const setupAccordion = document.querySelector('.setup-div-flex-right');
const accordionTop = document.querySelector('.accordion-top');
const accordionBottom = document.querySelector('.accordion-bottom');
const setupContent = document.querySelector('.setup-content-flex');

// Event Listerners
selectClose.addEventListener('click', function (e) {
  e.preventDefault();
  e.target.closest('.select-a-plan').classList.add('invisible');
  // console.log('Clicked');
});

setupDropdowns.forEach(function (setupDropdown) {
  setupDropdown.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Clicked');
    // if (e.target.classList.contains('setup-flex-top')) {
    //   e.target
    //     .closest('#setup-dropdown')
    //     .querySelector('.setup-flex-bottom')
    //     .classList.toggle('visible-flex')
    //     .classList.toggle('hidden');
    // }
  });
});

setupAccordion.addEventListener('click', function (e) {
  e.preventDefault();
  setupContent.classList.toggle('hidden');
  accordionTop.classList.toggle('hidden');
  accordionBottom.classList.toggle('hidden');

});
