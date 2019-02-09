import styled from 'styled-components';
import TextInput from './TextInput';

const Select = styled(TextInput).attrs(props => ({ as: 'select' }))``;

Select.displayName = 'Select';

export default Select;
 