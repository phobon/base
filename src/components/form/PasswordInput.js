import styled from 'styled-components';
import TextInput from './TextInput';

const PasswordInput = styled(TextInput).attrs(() => ({ type: 'password' }))``;

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
