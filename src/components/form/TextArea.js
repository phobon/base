import styled from 'styled-components';
import TextInput from './TextInput';

const TextArea = styled(TextInput).attrs(props => ({ as: 'textarea' }))``;

TextArea.displayName = 'TextArea';

TextArea.defaultProps = Object.assign({}, TextInput.defaultProps, {
  py: 2,
});

export default TextArea;
