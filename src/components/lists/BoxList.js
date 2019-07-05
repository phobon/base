import styled from 'styled-components';
import { Stack } from '../containers';

const BoxList = styled(Stack).attrs(props => ({ as: props.as ? props.as : 'ul' }))``;

BoxList.displayName = 'BoxList';

export default BoxList;
