const { matches: deviceOK } = window.matchMedia(
  '(min-width: 1100px)'
);
const { matches: motionOK } = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
);

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



