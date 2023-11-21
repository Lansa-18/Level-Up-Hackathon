'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');


// Event Listerners
selectClose.addEventListener('click', function(e){
    e.preventDefault();
    e.target.closest('.select-a-plan').classlist.add(hidden-half)
    // console.log('Clicked');
})