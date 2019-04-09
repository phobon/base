import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Select from './Select';

const TestSelect = props => (
  <Select {...props}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

storiesOf('Form/Select', module)
  .add('With different paddings', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <TestSelect value={null} mb={3} placeholder="default width" />
      <TestSelect value={null} mb={3} fullWidth placeholder="fullWidth" />
      <TestSelect value={null} mb={3} width={1 / 2} placeholder="width: 1/2" />
      <TestSelect value={null} width={400} placeholder="width: 400px" />
    </Box>
  ))
  .add('With different states', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <TestSelect value={null} mb={3} placeholder="error" error />
      <TestSelect value={null} mb={3} fullWidth placeholder="disabled" disabled />
    </Box>
  ));
