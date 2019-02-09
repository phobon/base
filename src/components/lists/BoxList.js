import styled from 'styled-components';
import { Box } from '../containers';

const BoxList = styled(Box).attrs(props => ({ as: props.as ? props.as : 'ul' }))``;

BoxList.displayName = 'BoxList';

export default BoxList;
