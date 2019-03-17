import styled, { css } from 'styled-components';
import {
  color,
  space,
  borderRadius,
  border,
  borderColor,
  fontSize,
  width,
  gridColumn,
  gridRow,
  gridArea,
} from 'styled-system';
import PropTypes from 'prop-types';

import { informationDensity } from '../../utils';

const isError = props => props.error && css`
  border: 2px solid ${props.theme.colors.reds[3]};

  &:hover {
    border: 2px solid ${props.theme.colors.reds[3]};
  }
`;

const fullWidth = props => props.fullWidth && css`width: 100%;`;

const TextInput = styled.input.attrs(props => ({
  disabled: props.isDisabled,
}))`
  box-sizing: border-box;
  position: relative;
  ${color}
  ${space}
  ${fontSize}
  ${width}

  ${borderRadius}

  ${border}
  ${borderColor}

  ${gridColumn}
  ${gridRow}
  ${gridArea}

  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  line-height: ${props => props.theme.fontSizes[props.fontSize]}px;

  ${fullWidth}
  height: ${props => informationDensity(props.density)}px;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.grayscale[4]};
  }

  &:focus {
    outline: 0;
    border: 2px solid ${props => props.theme.colors.guidance.focus};
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    background-color: ${props => props.theme.colors.grayscale[6]};
    border: 2px solid ${props => props.theme.colors.grayscale[5]};
  }

  ${isError}
`;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...borderRadius.propTypes,
  ...fontSize.propTypes,
  ...width.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,

  /** Whether the input field is disabled, or not */
  isDisabled: PropTypes.bool,

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
  bg: 'background',
  border: '2px solid',
  borderColor: 'grayscale.5',
  density: 'normal',
};

export default TextInput;
