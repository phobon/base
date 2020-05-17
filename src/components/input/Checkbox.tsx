/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { space, borderRadius } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

import Label from './Label';

const checkedLabelBackground = props => {
  const color = themeGet(`colors.${props.color}`)(props);

  return css`
    background-color: ${color || props.color};
  `;
}

const CheckboxContainer = styled('div').withConfig({
  shouldForwardProp,
}).attrs(props => ({
  'aria-invalid': props.invalid ? true : undefined,
}))`
  display: flex;
  flex: none;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  height: ${props => props.theme.space[props.size] + (props.borderThickness * 2)}px;
  min-width: ${props => props.theme.space[props.size] + (props.borderThickness * 2)}px;

  ${space}

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
      border: ${props => `${props.borderThickness}px ${props.borderStyle} ${themeGet(`colors.${props.borderColor}`)(props)}`};
      ${borderRadius};
      background-color: ${props => props.theme.colors.grayscale[9]};
      box-sizing: content-box;
    }

    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 0;
      top: 0;
      width: ${props => props.theme.space[props.size] + (props.borderThickness * 2)}px;
      height: ${props => props.theme.space[props.size] + (props.borderThickness * 2)}px;
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
      border: ${props => `${props.borderThickness}px ${props.borderStyle} ${themeGet(`colors.${props.color}`)(props)}`};
      ${checkedLabelBackground}
    }

    &:focus + label::before {
      outline: 0;
      opacity: 1;
      border: ${props => `${props.borderThickness}px ${props.borderStyle} ${props.theme.colors.guidance.focus}`};
    }
    
    &:disabled + label::before {
      opacity: 0.5;
      pointer-events: none;
      background-color: ${props => props.theme.colors.grayscale[6]};
      border: ${props => `${props.borderThickness}px ${props.borderStyle} ${props.theme.colors.grayscale[5]}`};
    }
  }

  &:hover {
    label {
      &::before {
        opacity: 1;
      }
    }
  }

  &[aria-invalid="true"] {
    label {
      &::before {
        border: 2px solid ${props => props.theme.colors.reds[3]};
        background-color: ${props => props.theme.colors.guidance.error[1]};
      }
    }

    input[type="checkbox"] {
      &:checked + label::before {
        border: 2px solid ${props => props.theme.colors.reds[3]};
        background-color: ${props => props.theme.colors.guidance.error[1]};
      }
    }
  }
`;

const Checkbox = forwardRef(({
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
  invalid,
  className,
  ...props }, ref) => (
    <CheckboxContainer {...props} size={size} disabled={disabled} invalid={invalid} className={className}>
      <input
        ref={ref}
        type="checkbox"
        id={id}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={className}
        checked={checked}
        name={name} />
      <Label
        alignItems="center"
        color={labelColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textStyle={textStyle}
        htmlFor={id}
        ml={label ? size : 0}>
        {label}
      </Label>
    </CheckboxContainer>
  ));

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...borderRadius.propTypes,

  /** Id, required for accessibility */
  id: PropTypes.string.isRequired,

  label: PropTypes.node,

  labelColor: PropTypes.string,

  /** Sizing based on theme space values */
  size: PropTypes.number,
};

Checkbox.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderRadius: 3,
  borderThickness: 2,
  borderStyle: 'solid',
  borderColor: 'grayscale.7',
  size: 3,
  invalid: false,
};

export default Checkbox;