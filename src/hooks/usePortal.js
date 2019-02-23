import { useState } from 'react';
import { createPortal } from 'react-dom';

const selector = '#base__portal';

const usePortal = (child) => {
  const [container, setContainer] = useState(null);

  if (typeof window === 'undefined') {
    return null;
  }

  if (!container) {
    let c = document.querySelector(selector);
    if (!c) {
      c = document.createElement('div');
      c.setAttribute('id', selector);
      c.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;';
      document.querySelector('body').appendChild(c);
    }
    
    setContainer(c);
  }

  return container && createPortal(child, container);
};

export default usePortal;