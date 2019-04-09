import styled, { css } from 'styled-components';
import {
  color,
  space,
  borderRadius,
  borders,
  fontSize,
  width,
} from 'styled-system';
import PropTypes from 'prop-types';

import { informationDensity, fullWidth } from '../../utils';

const isError = props => props.error && css`
  border: 2px solid ${props.theme.colors.reds[3]};
  color: ${props.theme.colors.guidance.error[0]};
  background-color: ${props.theme.colors.guidance.error[1]};

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.guidance.error[0]};
  }

  &:hover {
    border: 2px solid ${props.theme.colors.reds[3]};
  }
`;

const TextInput = styled.input`
  box-sizing: border-box;
  position: relative;

  ${color}
  ${space}
  ${fontSize}
  ${width}

  ${borderRadius}

  ${borders}

  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  line-height: ${props => props.theme.fontSizes[props.fontSize]}px;

  ${fullWidth}
  height: ${props => informationDensity(props.density)}px;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.grayscale[5]};
  }

  &:focus {
    outline: 0;
    border: 2px solid ${props => props.theme.colors.guidance.focus};
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
    background-color: ${props => props.theme.colors.grayscale[6]};
    border: 2px solid ${props => props.theme.colors.grayscale[6]};
  }

  ${isError}
`;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...width.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,

  /** Optional error message to display */
  error: PropTypes.any,

  /** Whether the input field should take up all available horizontal space, or not */
  fullWidth: PropTypes.bool,

  /** Information density for this field */
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),
};

TextInput.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: 'grayscale.7',
  border: '2px solid',
  color: 'foreground',
  borderColor: 'grayscale.7',
  density: 'normal',
};

export default TextInput;
