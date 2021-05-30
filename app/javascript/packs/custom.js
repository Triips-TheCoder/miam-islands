const { matches: deviceOK } = window.matchMedia(
  '(min-width: 1100px)'
);
const { matches: XsDeviceOK } = window.matchMedia(
  '(max-width: 600px)'
);
const { matches: motionOK } = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
);
const homePageContainer = document.querySelector('#main-home-page');
const homePageContent = document.querySelector('#content-home-page');
const animTitle= document.querySelector('.mi-color');
const homeLinksContainer = document.querySelector('#home-links-container');
const body = document.body; 
const homeIllustrationContainer = document.querySelector('#home-illustration-container');

window.addEventListener('load', () => {
  homePageContainer.classList.add("active");
});

animTitle.addEventListener('transitionend', () => {
  homePageContent.classList.add('active')
  body.classList.add('active');
  homeLinksContainer.classList.add('active');
  homeIllustrationContainer.classList.add('active');
})

if (motionOK && deviceOK) {
  const splitTargets = document.querySelectorAll('[split-by]');
  const span = (text, index) => {
    const node = document.createElement('span');

    node.textContent = text;
    node.style.setProperty('--index', index);

    return node;
  };

  const byLetter = text => [...text].map(span);

  const byWord = text => text.split(' ').map(span);

  splitTargets.forEach(node => {
    const type = node.getAttribute('split-by');
    let nodes = null;

    if (type === 'letter') {
      nodes = byLetter(node.innerText);
    }
    else if (type === 'word') {
      nodes = byWord(node.innerText);
    }

    if (nodes) {
      node.firstChild.replaceWith(...nodes);
    }
  });
};

// if (motionOK && XsDeviceOK) {
//   const hamburger = document.querySelector('#hamburger');
//   const fullNav = document.querySelector('#full-nav');

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     fullNav.classList.toggle('active');
//   });
// }


