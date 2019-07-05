/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { space, borderRadius } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

import Label from './Label';

const checkedLabelBackground = props => {
  const color = themeGet(`colors.${props.color}`)(props);

  return css`
    background-color: ${color || props.color};
  `;
}

const RadioContainer = styled.div.attrs(props => ({
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
      border-radius: 100%;
      border: ${props => `${props.borderThickness}px ${props.borderStyle} ${themeGet(`colors.${props.borderColor}`)(props)}`};
      background-color: ${props => props.theme.colors.grayscale[7]};
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
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='4' fill='white'/%3E%3C/svg%3E");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      transition: 80ms opacity ease-out;
      pointer-events: none;
      box-sizing: content-box;
    }
  }

  input[type="radio"] {
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

    input[type="radio"] {
      &:checked + label::before {
        border: 2px solid ${props => props.theme.colors.reds[3]};
        background-color: ${props => props.theme.colors.guidance.error[1]};
      }
    }
  }
`;

const Radio = ({
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
  invalid,
  ...props }) => (
    <RadioContainer {...props} size={size} disabled={disabled} invalid={invalid} className={className}>
      <input
        type="radio"
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
    </RadioContainer>
  );

Radio.displayName = 'Radio';

Radio.propTypes = {
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

Radio.defaultProps = {
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

export default Radio;