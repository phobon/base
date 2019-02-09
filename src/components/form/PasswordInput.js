import styled from 'styled-components';
import TextInput from './TextInput';

const PasswordInput = styled(TextInput).attrs(props => ({ type: 'password' }))``;

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
