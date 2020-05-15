import styled from 'styled-components';
import { get, system, ResponsiveValue, ThemeValue, RequiredTheme, ObjectOrArray } from 'styled-system';

import { Box, BoxProps } from './Box';

const isNumber = n => typeof n === 'number' && !isNaN(n);

const getMargin = (n: any, scale: ObjectOrArray<string | number, string | number | symbol>, { flexDirection }): any => {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? `-${value}` : value;
  }

  const r = {};
  const v = value * (isNegative ? -1 : 1);
  r[flexDirection === 'row' ? 'marginLeft': 'marginTop'] = v;
  return r;
};

// Casting this as any to get around styled-system TS definitions not being correct
const space: any = {
  property: '> * + *',
  scale: 'space',
  transform: getMargin,
}
const stackSpace = system({ space });

interface IStackProps {
  space?: ResponsiveValue<ThemeValue<'space', RequiredTheme>>;
}
export type StackProps = IStackProps & BoxProps;

export const Stack = styled(Box)<StackProps>(
  stackSpace,
);

const defaultProps: StackProps = {
  space: 0,
  flexDirection: 'column',
};

Stack.defaultProps = defaultProps;