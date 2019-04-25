import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import PasswordInput from './PasswordInput';

storiesOf('Form/PasswordInput', module)
  .add('With different paddings', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <PasswordInput value={null} mb={3} placeholder="default width" />
      <PasswordInput value={null} mb={3} fullWidth placeholder="fullWidth" />
      <PasswordInput value={null} mb={3} width={1 / 2} placeholder="width: 1/2" />
      <PasswordInput value={null} width={400} placeholder="width: 400px" />
    </Box>
  ))
  .add('With different states', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <PasswordInput value={null} mb={3} placeholder="invalid" invalid />
      <PasswordInput value={null} mb={3} fullWidth placeholder="disabled" disabled />
    </Box>
  ));
