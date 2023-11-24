'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');
const setupDropdown = document.querySelector('#setup-dropdown');


// Event Listerners
selectClose.addEventListener('click', function(e){
    e.preventDefault();
    e.target.closest('.select-a-plan').classList.add('invisible');
    // console.log('Clicked');
})

setupDropdown.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Clicked');
})
