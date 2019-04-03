import 'jest-localstorage-mock';
import { renderHook, cleanup, act } from 'react-hooks-testing-library'

import useCachedState from './useCachedState';

afterEach(cleanup);

test('localStorage should work', () => {
  const key = 'testKey';
  const output = 'test';
  window.localStorage.setItem(key, output);
  const returnedOutput = window.localStorage.getItem(key);

  expect(returnedOutput).toBe(output);
});

test('useCachedState', () => {
  const { result } = renderHook(() => useCachedState('testKey', 'test'));

  const [item, setItem] = result.current;

  expect(item).toBe('test');
});