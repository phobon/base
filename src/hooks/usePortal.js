import { useState } from 'react';
import { createPortal } from 'react-dom';

const selector = '#base__portal';

const usePortal = (child) => {
  const [container, setContainer] = useState(null);

  if (!container) {
    const c = document.createElement('div');
    c.setAttribute('id', selector);
    c.style.cssText = 'left:24px;top:24px;right:24px;bottom:24px;position:fixed;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;';
    document.querySelector('body').appendChild(c);

    setContainer(c);
  }

  return createPortal(child, container);
};

export default usePortal;