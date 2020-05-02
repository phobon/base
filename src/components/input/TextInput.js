import styled from 'styled-components';
import { compose, color, space, border, fontSize as styledFontSize, width } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { density, fullWidth, fullHeight, cover } from '../../utils';

const textInputSystem = compose(color, space, border, styledFontSize, width);

const TextInput = styled('input').withConfig({
  shouldForwardProp,
}).attrs(props => ({
  'aria-invalid': props.invalid ? true : undefined,
}))(
  ({ theme, fontSize }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    padding: theme.space[2],
    lineHeight: `${theme.fontSizes[fontSize]}px`,
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
  textInputSystem,
  density,
  cover,
  fullWidth,
  fullHeight,
);

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.width,
  ...propTypes.border,
  ...density.propTypes,
  ...cover.propTypes,
  ...fullWidth.propTypes,
  ...fullHeight.propTypes,

  /** If this input is invalid, or not */
  invalid: PropTypes.bool,
};

TextInput.defaultProps = {
  disabled: false,
  invalid: false,
  fullWidth: false,
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: 'grayscale.9',
  border: '2px solid',
  color: 'foreground',
  borderColor: 'grayscale.7',
  density: 'normal',
};

export default TextInput;
