import styled, { css } from 'styled-components';
import {
  color,
  space,
  border,
  fontSize,
  width,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

import { density, cover } from '../../utils';

const inputRadius = props => css`
  border-radius: ${props.theme.radii[props.borderRadius]}px ${props.theme.radii[props.borderRadius]}px 0px 0px;
`;

const TextInput = styled.input.attrs(props => ({
  'aria-invalid': props.invalid ? true : undefined,
}),
  color,
  space,
  fontSize,
  width,
  border,
  inputRadius,
  cover,
  density,
)`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  line-height: ${props => props.theme.fontSizes[props.fontSize]}px;

  box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.grayscale[7]};

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.grayscale[5]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.guidance.focus};
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
    background-color: ${props => props.theme.colors.grayscale[7]};
    box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.grayscale[6]};
  }

  &[aria-invalid="true"] {
    box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.reds[5]};

    &:hover {
      box-shadow: 0px 2px 0px 0px ${props => props.theme.colors.reds[7]};
    }
  }
`;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.width,
  ...propTypes.border,
  ...density.propTypes,

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
  bg: 'grayscale.8',
  border: '2px solid',
  color: 'foreground',
  borderColor: 'grayscale.8',
  density: 'normal',
};

export default TextInput;
