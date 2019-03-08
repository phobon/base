import styled from 'styled-components';
import TextInput from './TextInput';

const NumberInput = styled(TextInput).attrs(() => ({ type: 'number' }))``;

NumberInput.displayName = 'NumberInput';

export default NumberInput;
