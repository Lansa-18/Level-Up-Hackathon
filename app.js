'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');


// Event Listerners
selectClose.addEventListener('click', function(e){
    e.preventDefault();
    e.target.classlist.add('hidden-half')
})