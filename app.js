'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');
const setupDropdowns = document.querySelectorAll('.setup-dropdown');
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

// Method 1
// setupDropdowns.forEach(function (setupDropdown, i, arr) {
//   setupDropdown.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (e.target.closest('.setup-flex').classList.contains('active')) {
//       console.log('Contains ACTIVE');
//     } else {
//       console.log('Does NOT contain ACTIVE');
//       const parentHasSetupFlexActive = e.target.closest('.setup-content-flex').querySelector('.setup-flex.active');
//       const parentHasSetupFlexBottomActive = e.target.closest('.setup-content-flex').querySelector('.setup-flex-bottom.visible-flex');
//       if (parentHasSetupFlexActive) {
//         console.log('Found a container that Contains ACTIVE');
//         parentHasSetupFlexActive.classList.remove('active');
//         parentHasSetupFlexBottomActive.classList.toggle('visible-flex');
//         parentHasSetupFlexBottomActive.classList.toggle('hidden');
//         e.target.closest('.setup-flex').classList.add('active');
//         e.target.closest('.setup-flex').querySelector('.setup-flex-bottom').classList.toggle('hidden');
//         e.target.closest('.setup-flex').querySelector('.setup-flex-bottom').classList.toggle('visible-flex');
//       }
//     }
//   });
// });

setupDropdowns.forEach(setupDropdown => {
  setupDropdown.addEventListener('click', e => {
    e.preventDefault();

    const setupFlex = e.target.closest('.setup-flex');
    const setupContentFlex = e.target.closest('.setup-content-flex');
    const setupFlexBottom = setupFlex.querySelector('.setup-flex-bottom');

    if (setupFlex.classList.contains('active')) {
      console.log('Contains ACTIVE');
      return;
    }

    console.log('Does NOT contain ACTIVE');

    const parentHasSetupFlexActive = setupContentFlex.querySelector('.setup-flex.active');
    const parentHasSetupFlexBottomActive = setupContentFlex.querySelector('.setup-flex-bottom.visible-flex');

    if (!parentHasSetupFlexActive) return;

    console.log('Found a container that Contains ACTIVE');

    parentHasSetupFlexActive.classList.remove('active');
    parentHasSetupFlexBottomActive.classList.toggle('visible-flex');
    parentHasSetupFlexBottomActive.classList.toggle('hidden');

    setupFlex.classList.add('active');
    setupFlexBottom.classList.toggle('hidden');
    setupFlexBottom.classList.toggle('visible-flex');
  });
});



setupAccordion.addEventListener('click', function (e) {
  e.preventDefault();
  setupContent.classList.toggle('hidden');
  accordionTop.classList.toggle('hidden');
  accordionBottom.classList.toggle('hidden');

});

// console.log(setupDropdowns);

