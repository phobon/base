import React from 'react';
import {
  space,
  gridColumn,
  gridRow,
  gridArea,
  themeGet,
} from 'styled-system';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Label from './Label';

const labelBorder = props => {
  const color = props.error
    ? props.theme.colors.reds[3]
    : themeGet(`colors.${props.borderColor}`)(props);

  return css`
    border: 2px solid ${color || props.borderColor};
  `;
};
const labelBackground = props => {
  const color = themeGet(`colors.${props.color}`)(props);

  return css`
    background-color: ${color || props.color};
  `;
};

const CheckboxContainer = styled.div`
  display: flex;
  flex: none;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: ${props => props.theme.space[props.size] + 4}px;
  min-width: ${props => props.theme.space[props.size] + 4}px;
  ${space}

  ${gridColumn}
  ${gridRow}
  ${gridArea}

  label {
    height: 100%;

    &::before {
      content: "";
      opacity: 0.7;
      transition: 80ms opacity ease-out;
      position: absolute;
      left: 0;
      top: 0;
      width: ${props => props.theme.space[props.size]}px;
      height: ${props => props.theme.space[props.size]}px;
      ${labelBorder}
      border-radius: ${props => props.theme.radii[3]}px;
      box-sizing: content-box;
    }

    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 0;
      top: 0;
      width: ${props => props.theme.space[props.size] + 4}px;
      height: ${props => props.theme.space[props.size] + 4}px;

      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' preserveAspectRatio='xMinYMid' stroke-width='2' stroke='white' fill='none' stroke-miterlimit='10' stroke-dashoffset='0' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9.5L5.5 12L13 4.5'/%3E%3C/svg%3E");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      transition: 80ms opacity ease-out;
      pointer-events: none;
      box-sizing: content-box;
    }
  }

  input[type="checkbox"] {
    margin: 0;
    opacity: 0;

    label::after {
      content: none;
    }

    &:checked + label::after {
      opacity: 1;
    }
    &:checked + label::before {
      opacity: 0.9;
      ${labelBorder}
      ${labelBackground}
    }

    &:focus + label::before {
      outline: 0;
      opacity: 1;
      border: 2px solid ${props => props.theme.colors.guidance.focus};
    }
    
    &:disabled + label {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &:hover {
    label {
      &::before {
        opacity: 1;
      }
    }
  }
`;

const Checkbox = ({
  id,
  label,
  labelColor,
  onChange,
  disabled,
  checked,
  required,
  fontSize,
  fontWeight,
  textStyle,
  name,
  size,
  className,
  ...props }) => (
    <CheckboxContainer {...props} size={size} disabled={disabled} className={className}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={className}
        checked={checked}
        name={name} />
      <Label
        color={labelColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textStyle={textStyle}
        htmlFor={id}
        ml={label ? size : 0}>
        {label}
      </Label>      
    </CheckboxContainer>
  );

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  ...space.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,

  /** Id, required for accessibility */
  id: PropTypes.string.isRequired,

  /** Label */
  label: PropTypes.string,

  /** Label colour */
  labelColor: PropTypes.string,
  
  /** Colour */
  color: PropTypes.string,

  /** Border colour */
  borderColor: PropTypes.string,

  /** Sizing based on theme space values */
  size: PropTypes.number,
};

Checkbox.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderColor: 'grayscale.4',
  size: 3,
};

export default Checkbox;
