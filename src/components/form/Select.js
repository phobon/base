import styled from 'styled-components';
import TextInput from './TextInput';

const Select = styled(TextInput).attrs(() => ({ as: 'select' }))``;

Select.displayName = 'Select';

export default Select;
 