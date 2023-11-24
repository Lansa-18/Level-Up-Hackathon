'use strict';
console.log('Hello World');

// Elements
const selectClose = document.querySelector('.select-close');
const selectAPlanContainer = document.querySelector('.select-a-plan');
const setupDropdowns = document.querySelectorAll('#setup-dropdown');


// Event Listerners
selectClose.addEventListener('click', function(e){
    e.preventDefault();
    e.target.closest('.select-a-plan').classList.add('invisible');
    // console.log('Clicked');
})

setupDropdowns.forEach(function(setupDropdown){
    setupDropdown.addEventListener('click', function(e){
        e.preventDefault();
        // console.log('Clicked');
        if (e.target.classList.contains('setup-dropdown')) {
            e.target.closest('.setup-dropdown').querySelector('.setup-dropdown-content').classList.toggle('invisible');
            
        }
    })
});
