import React from 'react';
import {
  space,
  themeGet,
} from 'styled-system';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Label from './Label';

const checkedLabelBorder = props => {
  const color = themeGet(`colors.${props.color}`)(props);

  return css`
    border: 2px solid ${color || props.color};
  `;
}
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
  height: ${props => props.theme.space[props.size] + 4}px;
  min-width: ${props => props.theme.space[props.size] + 4}px;

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
      box-sizing: content-box;

      border: 2px solid ${props => props.theme.colors.grayscale[7]};
      background-color: ${props => props.theme.colors.grayscale[7]};
    }

    &::after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 0;
      top: 0;
      width: ${props => props.theme.space[props.size] + 4}px;
      height: ${props => props.theme.space[props.size] + 4}px;

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
      ${checkedLabelBorder}
      ${checkedLabelBackground}
    }

    &:focus + label::before {
      outline: 0;
      opacity: 1;
      border: 2px solid ${props => props.theme.colors.guidance.focus};
    }
    
    &:disabled + label::before {
      opacity: 0.2;
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
  onChange,
  disabled,
  checked,
  required,
  name,
  size,
  invalid,
  children,
  ...props
}) => {
  const label = React.cloneElement(children, { htmlFor: id, ml: size });
  return (
    <RadioContainer size={size} disabled={disabled} invalid={invalid} {...props}>
      <input
        type="radio"
        id={id}
        onChange={onChange}
        disabled={disabled}
        required={required}
        checked={checked}
        name={name}
        aria-invalid={invalid} />
      {label}
    </RadioContainer>
  );
};

Radio.displayName = 'Radio';

Radio.propTypes = {
  ...space.propTypes,

  /** Id, required for accessibility */
  id: PropTypes.string.isRequired,

  /** Children must be a Label */
  children: PropTypes.instanceOf(Label).isRequired,
  
  /** Colour of the radio */
  color: PropTypes.string,

  /** Sizing based on theme space values */
  size: PropTypes.number,

  /** Whether the field is valid, or not */
  invalid: PropTypes.bool,
};

Radio.defaultProps = {
  color: 'accent.5',
  size: 3,
  invalid: false,
};

export default Radio;
