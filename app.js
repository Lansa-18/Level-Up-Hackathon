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
const checkerSvgs = document.querySelectorAll('.hover-effect');
const progressBar = document.querySelector('#file');
const progressLabel = document.querySelector('.progress-label');

// Event Listerners
selectClose.addEventListener('click', function (e) {
  e.preventDefault();
  e.target.closest('.select-a-plan').classList.add('invisible');
});

// Implementing the Setup Dropdowns functionality

document.addEventListener('DOMContentLoaded', event => {
  setupDropdowns.forEach(setupDropdown => {
    setupDropdown.addEventListener('click', e => {
      e.preventDefault();

      const setupFlex = e.target.closest('.setup-flex');
      const setupContentFlex = e.target.closest('.setup-content-flex');
      const setupFlexBottom = setupFlex.querySelector('.setup-flex-bottom');
      // console.log(setupFlexBottom);

      if (setupFlex.classList.contains('active')) {
        return;
      }

      const parentHasSetupFlexActive =
        setupContentFlex.querySelector('.setup-flex.active');
      const parentHasSetupFlexBottomActive = setupContentFlex.querySelector(
        '.setup-flex-bottom.visible-flex'
      );

      if (!parentHasSetupFlexActive) return;

      parentHasSetupFlexActive.classList.remove('active');
      parentHasSetupFlexBottomActive.classList.toggle('visible-flex');
      parentHasSetupFlexBottomActive.classList.toggle('hidden');

      setupFlex.classList.add('active');
      setupFlexBottom.classList.toggle('hidden');
      setupFlexBottom.classList.toggle('visible-flex');
    });
  });
});

// setupDropdowns.forEach(function (setupDropdown, i, arr) {
//   setupDropdown.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (e.target.closest('.setup-flex').classList.contains('active')) {
//       console.log('Contains ACTIVE');
//     } else {
//       console.log('Does NOT contain ACTIVE');
//       const parentHasSetupFlexActive = e.target
//         .closest('.setup-content-flex')
//         .querySelector('.setup-flex.active');
//       const parentHasSetupFlexBottomActive = e.target
//         .closest('.setup-content-flex')
//         .querySelector('.setup-flex-bottom.visible-flex');
//       if (parentHasSetupFlexActive) {
//         console.log('Found a container that Contains ACTIVE');
//         parentHasSetupFlexActive.classList.remove('active');
//         parentHasSetupFlexBottomActive.classList.toggle('visible-flex');
//         parentHasSetupFlexBottomActive.classList.toggle('hidden');
//         e.target.closest('.setup-flex').classList.add('active');
//         e.target
//           .closest('.setup-flex')
//           .querySelector('.setup-flex-bottom')
//           .classList.toggle('hidden');
//         e.target
//           .closest('.setup-flex')
//           .querySelector('.setup-flex-bottom')
//           .classList.toggle('visible-flex');
//       }
//     }
//   });
// });

setupAccordion.addEventListener('click', function (e) {
  e.preventDefault();
  setupContent.classList.toggle('hidden');
  accordionTop.classList.toggle('hidden');
  accordionBottom.classList.toggle('hidden');
});

// Implementing the Checker-Svg functionality

const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 28 28" fill="none">
<path
  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
  stroke="#1C181D"
  stroke-width="2.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
</svg>`;

const svg2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9995 2C13.9773 2 15.9107 2.58649 17.5552 3.6853C19.1997 4.78412 20.4814 6.3459 21.2383 8.17316C21.9952 10.0004 22.1932 12.0111 21.8074 13.9509C21.4215 15.8907 20.4691 17.6725 19.0706 19.0711C17.6721 20.4696 15.8902 21.422 13.9504 21.8079C12.0106 22.1937 9.99994 21.9957 8.17268 21.2388C6.34542 20.4819 4.78363 19.2002 3.68482 17.5557C2.586 15.9112 1.99951 13.9778 1.99951 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svg3 = `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#303030"></circle>
<path
  d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
  fill="#fff"
></path>
</svg>`;

const orginalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 32" fill="none">
<circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
</svg>`;

// let counter = 0;
// checkerSvgs.forEach((checkerSvg, index) => {
//   let isOriginal = true;
//   checkerSvg.addEventListener('click', function (e) {
//     if (isOriginal) {
//       // Immediately display the first image
//       checkerSvg.innerHTML = svg1;

//       //After a short delay, display the second image
//       setTimeout(() => {
//         checkerSvg.innerHTML = svg2;

//         setTimeout(() => {
//           checkerSvg.innerHTML = svg3;
//         }, 100);
//       }, 100);

//       isOriginal = false;
//       progressBar.value += 20;
//       counter++;
//       progressLabel.textContent = `${counter}/5 Completed`;

//       // Close the current dropdow
//       const setupFlex = checkerSvg.closest('.setup-flex');
//       console.log(setupFlex);
//       const setupFlexBottom = setupFlex.querySelector('.setup-flex-bottom');
//       setupFlex.classList.toggle('active');
//       console.log(setupFlexBottom);
//       setupFlexBottom.classList.toggle('visible-flex');
//       setupFlexBottom.classList.toggle('hidden');

//       // Open the next dropdown
//       const nextSetupFlex = setupDropdowns[index + 1].closest('.setup-flex');
//       console.log(nextSetupFlex);
//       if (nextSetupFlex) {
//         const nextSetupFlexBottom =
//           nextSetupFlex.querySelector('.setup-flex-bottom');
//           console.log(nextSetupFlexBottom);
//         nextSetupFlex.classList.add('active');
//         nextSetupFlexBottom.classList.toggle('hidden');
//         nextSetupFlexBottom.classList.toggle('visible-flex');
//       }
//     } else {
//       checkerSvg.innerHTML = orginalSvg;
//       isOriginal = true;
//       counter--;
//       progressBar.value -= 20;
//       progressLabel.textContent = `${counter}/5 Completed`;
//     }
//   });
// });

let counter = 0;
async function processCheckerSvg(checkerSvg, index) {
  return new Promise(resolve => {
    let isOriginal = true;

    checkerSvg.addEventListener('click', async function (e) {
      if (isOriginal) {
        // Immediately display the first image
        checkerSvg.innerHTML = svg1;

        // After a short delay, display the second image
        await delay(100);
        checkerSvg.innerHTML = svg2;

        // After another short delay, display the third image
        await delay(100);
        checkerSvg.innerHTML = svg3;

        isOriginal = false;
        counter++;
        progressBar.value += 20;
        progressLabel.textContent = `${counter}/5 Completed`;

        // Close the current dropdown
        closeDropdown(checkerSvg);

        // Open the next dropdown
        const nextSetupFlex = setupDropdowns[index + 1]?.closest('.setup-flex');
        if (nextSetupFlex) {
          openDropdown(nextSetupFlex);
        }

        resolve();
      } else {
        checkerSvg.innerHTML = orginalSvg;
        isOriginal = true;
        counter--;
        progressBar.value -= 20;
        progressLabel.textContent = `${counter}/5 Completed`;
        closeDropdown(checkerSvg);
        resolve();
      }
    });
  });
}

async function closeDropdown(checkerSvg) {
  const setupFlex = checkerSvg.closest('.setup-flex');
  const setupFlexBottom = setupFlex.querySelector('.setup-flex-bottom');
  setupFlex.classList.remove('active');
  setupFlexBottom.classList.remove('visible-flex');
  setupFlexBottom.classList.add('hidden');
}

async function openDropdown(setupFlex) {
  const setupFlexBottom = setupFlex.querySelector('.setup-flex-bottom');
  setupFlex.classList.add('active');
  setupFlexBottom.classList.remove('hidden');
  setupFlexBottom.classList.add('visible-flex');
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const checkerSvgPromises = Array.from(checkerSvgs).map((checkerSvg, index) =>
  processCheckerSvg(checkerSvg, index)
);

Promise.all(checkerSvgPromises).then(() => {
  console.log('All SVGs processed');
});
