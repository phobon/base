import styled from 'styled-components';
import { Box } from '../containers';

const BoxListItem = styled(Box).attrs(() => ({ as: 'li' }))``;

BoxListItem.displayName = 'BoxListItem';

export default BoxListItem;
