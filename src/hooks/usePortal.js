import { createPortal } from 'react-dom';

const selector = '#base__portal';
let container = document.querySelector(selector);

const usePortal = (child) => {
if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', selector);
    container.style.cssText = 'left:24px;top:24px;right:24px;bottom:24px;position:fixed;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;';
    document.querySelector('body').appendChild(container);
  }

  return createPortal(child, container);
};

export default usePortal;