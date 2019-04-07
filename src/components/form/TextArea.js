import styled from 'styled-components';
import { height } from 'styled-system';
import TextInput from './TextInput';

const TextArea = styled(TextInput).attrs(() => ({ as: 'textarea' }))`
  ${height}
  min-height: ${props => props.theme.space[5]}px;
`;

TextArea.displayName = 'TextArea';

TextArea.defaultProps = Object.assign({}, TextInput.defaultProps, {
  height: 'auto',
  py: 2,
});

export default TextArea;
