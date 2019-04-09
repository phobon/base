import styled from 'styled-components';
import Box from './Box';

const Flex = styled(Box)({
  flex: '1',
});

Flex.displayName = 'Flex';

export default Flex;
