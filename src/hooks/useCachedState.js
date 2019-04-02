import { useState, useCallback } from 'react';

const stateKey = 'base__cachedState';

const useCachedState = (key, initialValue = null) => {
  const [state, setState] = useState(window.localStorage.getItem(stateKey) || { key: initialValue });

  const setCachedState = useCallback((value) => {
    state[key] = value;
    setState(state);
    window.localStorage.setItem(stateKey, state);
  }, [key])

  return [state.key, setCachedState];
};

export default useCachedState;
