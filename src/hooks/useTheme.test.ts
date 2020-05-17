import 'jest-localstorage-mock';
import { renderHook, cleanup, act } from '@testing-library/react-hooks';

import { useTheme } from './useTheme';
import { ThemeType } from '../tokens/palettes';

afterEach(() => cleanup);

test('useTheme with light and dark themes', () => {
  const { result } = renderHook(() => useTheme());

  expect(result.current[0]).toBe('light');

  const setTheme = result.current[1] as (value: ThemeType) => void;
  act(() => setTheme('dark'));
  expect(result.current[0]).toBe('dark');
});