import styled from 'styled-components';
import { Box } from '../containers';

const BoxListItem = styled(Box).attrs(props => ({ as: 'li' }))``;

BoxListItem.displayName = 'BoxListItem';

export default BoxListItem;
