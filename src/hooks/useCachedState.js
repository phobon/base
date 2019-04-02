import { useState, useCallback } from 'react';

const stateKey = 'base__cachedState';

const useCachedState = (key, initialValue = null) => {
  const [state, setState] = useState(window.localStorage.getItem(stateKey));

  // We need to get creative about how we set the initial state here.
  // If there's no localStorage item and the initialValue is not null, set it.
  // Pass in the key as a dep so this doesn't get called again til the key changes.
  useEffect(() => {
    if (!state && initialValue) {
      const s = {};
      s[key] = initialValue;
      setState(state);
      window.localStorage.setItem(stateKey, state);
    };
  }, [key])

  const setCachedState = useCallback((value) => {
    state[key] = value;
    setState(state);
    window.localStorage.setItem(stateKey, state);
  }, [key])

  return [state[key], setCachedState];
};

export default useCachedState;
