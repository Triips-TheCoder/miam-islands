const { matches: XsAndLDeviceOK } = window.matchMedia(
  '(max-width: 1100px)'
);
const { matches: XLdeviceOK } = window.matchMedia(
  '(min-width: 1100px)'
);
const { matches: motionOK } = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
);
const navBar = document.querySelector('#nav-bar');
const urlWords = ["recipes", "people"];

// Mobile and Tablet
if (motionOK && XsAndLDeviceOK) {
  navBar.classList.add("active");
};

//check the url and add a class to the navbar
if (window.location.href.includes(urlWords[0]) || window.location.href.includes(urlWords[1])) {
  navBar.classList.add("active");
}

// Desktop
if (motionOK && XLdeviceOK) {
  const homePageContainer = document.querySelector('#main-home-page');
  const homePageContent = document.querySelector('#content-home-page');
  const animTitle = document.querySelector('.mi-color');
  const homeLinksContainer = document.querySelector('#home-links-container');
  const homeIllustrationContainer = document.querySelector('#home-illustration-container');

  document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'complete') {
      homePageContainer.classList.add("active");
    } else {
      return;
    }
  });

  animTitle.addEventListener('transitionend', () => {
    homePageContent.classList.add('active');
    navBar.classList.add('active');
    homeLinksContainer.classList.add('active');
    homeIllustrationContainer.classList.add('active');
  });

  // Letter animation
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



