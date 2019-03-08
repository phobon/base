import styled from 'styled-components';
import TextInput from './TextInput';

const TextArea = styled(TextInput).attrs(() => ({ as: 'textarea' }))`
  height: auto;
  min-height: ${props => props.theme.space[5]}px;
`;

TextArea.displayName = 'TextArea';

TextArea.defaultProps = Object.assign({}, TextInput.defaultProps, {
  py: 2,
});

export default TextArea;
