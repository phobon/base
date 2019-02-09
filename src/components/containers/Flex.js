import styled from 'styled-components';
import Box from './Box';

const Flex = styled(Box)``;

Flex.defaultProps = Object.assign({}, Box.defaultProps, {
  flex: '1 0 0%',
});

Flex.displayName = 'Flex';

export default Flex;
