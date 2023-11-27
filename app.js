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
const setupFlexBottom = document.querySelector('.setup-flex-bottom');
const setupFlexs = document.querySelectorAll('.setup-flex');
// Event Listerners
selectClose.addEventListener('click', function (e) {
  e.preventDefault();
  e.target.closest('.select-a-plan').classList.add('invisible');
  // console.log('Clicked');
});

setupDropdowns.forEach(function (setupDropdown, i, arr) {
  setupDropdown.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.closest('.setup-flex').contains('active')) {
      console.log('Contains ACTIVE');
      // setupFlex.classList.remove('active');
      // setupFlexBottom.classList.toggle('hidden');
      // setupFlexBottom.classList.toggle('visible-flex');
    } else {
      console.log('Does NOT contain ACTIVE');
      // setupFlex.classList.add('active');
      // setupFlexBottom.classList.toggle('hidden');
      // setupFlexBottom.classList.toggle('visible-flex');
    }
  });
});

setupAccordion.addEventListener('click', function (e) {
  e.preventDefault();
  setupContent.classList.toggle('hidden');
  accordionTop.classList.toggle('hidden');
  accordionBottom.classList.toggle('hidden');

});

