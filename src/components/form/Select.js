
import React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';
import { Box } from '../containers';
import { Vector } from '../images';
import { destructureLayoutProps } from '../../utils';

const ExpandMore = props => (
  <Vector {...props} width={24} height={24} color="grayscale.4">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </Vector>
);

const SelectInput = styled(TextInput).attrs(() => ({ as: 'select' }))`
  -webkit-appearance: none;
  padding-right: ${props => props.theme.space[5]}px;
`;

const Select = (props) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);
  return (
    <Box css={{ position: 'relative' }} {...layoutProps}>
      <SelectInput fullWidth {...passthroughProps} />
      <ExpandMore css={{ position: 'absolute', right: 4, zIndex: 1, pointerEvents: 'none' }} />
    </Box>
  );
};

Select.displayName = 'Select';

export default Select;
 