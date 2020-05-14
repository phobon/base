import styled from 'styled-components';

import { Stack, StackProps } from './Stack';

const boxShadow = ({ boxShadowSize = 'l', theme }) => {
  const boxShadows = {
    none: 0,
    s: 0,
    m: 1,
    l: 2,
    xl: 3,
    xxl: 4,
  };

  return {
    '&::before': {
      boxShadow: theme.boxShadows[boxShadows[boxShadowSize]],
    },
  };
};

export type BoxShadowSize = 'none' | 's' | 'm' | 'l' | 'xl' | 'xxl';
interface ICardProps {
  boxShadowIntensity?: number;
  boxShadowSize?: BoxShadowSize;
}
export type CardProps = ICardProps & StackProps;

export const Card = styled(Stack)<CardProps>(
  ({ boxShadowIntensity }) => ({
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      opacity: boxShadowIntensity,
      left: 0,
      top: 0,
      transition: 'opacity 180ms ease-out',
    },
  }),
  boxShadow,
);

Card.displayName = 'Card';

const defaultProps: CardProps = {
  boxShadowSize: 'l',
  boxShadowIntensity: 1,
}

Card.defaultProps = defaultProps;