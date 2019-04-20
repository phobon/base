import 'jest-localstorage-mock';
import { renderHook, cleanup, act } from 'react-hooks-testing-library';

import useTheme from './useTheme';

afterEach(cleanup);

test('useTheme with light and dark themes', () => {
  const { result } = renderHook(() => useTheme());

  expect(result.current[0]).toBe('light');

//   act(() => result.current[1]('something else'));
//   expect(result.current[0]).toBe('something else');

//   act(() => result.current[1](115511));
//   expect(result.current[0]).toBe(115511);
});