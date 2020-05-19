import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  fontSize as styledFontSize,
  width,
  height,
  HeightProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  density,
  fullWidth,
  fullHeight,
  cover,
} from '../../utils';

import { InputProps } from './Input';

const textAreaSystem = compose(color, space, border, styledFontSize, width, height, fullWidth, fullHeight, cover, density);

export type TextAreaProps = InputProps & HeightProps & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: StyledComponent<'textarea', DefaultTheme, TextAreaProps, never> = 
  styled('textarea')
  .withConfig({ shouldForwardProp })
  .attrs((props: TextAreaProps) => ({
  'aria-invalid': props.invalid ? true : undefined,
  type: props.variant === 'text' ? undefined : props.variant,
}))<TextAreaProps>(
  ({ theme, fontSize }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    padding: theme.space[2],
    minHeight: theme.space[5],
    lineHeight: `${theme.fontSizes[fontSize as number]}px`,
    transition: 'border-color 90ms ease-out',
    '&::-webkit-input-placeholder': {
      color: theme.colors.grayscale[5],
    },  
    '&:focus': {
      outline: 0,
      borderColor: theme.colors.guidance.focus,
    },
    '&:disabled': {
      opacity: 0.2,
      pointerEvents: 'none',
      backgroundColor: theme.colors.grayscale[7],
      borderColor: theme.colors.grayscale[6],
    },
    '&[aria-invalid="true"]': {
      borderColor: theme.colors.reds[5],
      '&:hover': {
        borderColor: theme.colors.reds[7],
      },
    },
  }),
  textAreaSystem,
);

TextArea.displayName = 'TextArea';

const defaultProps: any = {
  height: 'auto',
  py: 2,
};
TextArea.defaultProps = defaultProps;
