import React from 'react';

import { Box } from '../containers';
import Select from './Select';

export default {
  component: Select,
  title: 'Input/Select',
};

const TestSelect = props => (
  <Select {...props}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const withDifferentPaddings = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <TestSelect value={null} mb={3} />
    <TestSelect value={null} mb={3} fullWidth />
    <TestSelect value={null} mb={3} width={1 / 2} />
    <TestSelect value={null} width={400} />
  </Box>
);

export const withDifferentStates = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <TestSelect value={null} mb={3} invalid />
    <TestSelect value={null} mb={3} fullWidth disabled />
  </Box>
);
