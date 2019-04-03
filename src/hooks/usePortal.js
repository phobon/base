import { useState } from 'react';
import { createPortal } from 'react-dom';

const usePortal = (child, selector = '#base__portal') => {
  const [container, setContainer] = useState(null);

  if (!container) {
    let c = document.querySelector(selector);
    if (!c) {
      c = document.createElement('div');
      c.setAttribute('id', selector.startsWith('#') ? selector.slice(1) : selector);
      c.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;pointer-events:none;display:flex;';
      document.querySelector('body').appendChild(c);
    }
    
    setContainer(c);
  }

  return container && createPortal(child, container);
};

export default usePortal;