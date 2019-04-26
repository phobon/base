import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text'
import { Flex } from '../containers';

const TruncateText = styled(Text)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});
const TruncateContainer = styled(Flex)({
  minWidth: 0,
  maxWidth: '100%',
});

const Truncate = ({ children, ...props }) => (
  <TruncateContainer justifyContent="flex-start" color="inherit">
    <TruncateText {...props}>{children}</TruncateText>
  </TruncateContainer>
);

Truncate.displayName = 'Truncate';

Truncate.propTypes = {
  children: PropTypes.node,
};

Truncate.defaultProps = {
  children: null,
};

export default Truncate;
