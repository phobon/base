import React from 'react';

import { Box } from '../containers';
import TextArea from './TextArea';

export default {
  component: TextArea,
  title: 'Input/TextArea',
};

export const withDifferentHeights = () => (
  <Box alignItems="flex-start">
    <TextArea width={100} value={null} mr={3} placeholder="default height" />
    <TextArea width={100} height={300} value={null} placeholder="height: 300" />
  </Box>
);

export const withDifferentStates = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <TextArea value={null} mb={3} placeholder="invalid" invalid />
    <TextArea value={null} mb={3} fullWidth placeholder="disabled" disabled />
  </Box>
);