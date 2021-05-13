const { matches: enableMotion } = window.matchMedia(
  '(min-width: 1100px)'
);

if (enableMotion) {
  const splitTargets = document.querySelectorAll('[split-by]');
  console.log(splitTargets);

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