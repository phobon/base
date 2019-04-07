import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const spinButtons = props => props.hideSpinButtons && css`
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
  }
  -moz-appearance:textfield;
`;

const NumberInput = styled(TextInput)`
  ${spinButtons}
`;

NumberInput.displayName = 'NumberInput';

NumberInput.propTypes = {
  hideSpinButtons: PropTypes.bool,
};

NumberInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
  hideSpinButtons: false,
});

export default NumberInput;