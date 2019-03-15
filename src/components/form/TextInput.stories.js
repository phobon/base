import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import TextInput from './TextInput';

storiesOf('Form/TextInput', module)
  .add('With different paddings', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <TextInput value={null} mb={3} placeholder="default width"/>
      <TextInput value={null} mb={3} fullWidth placeholder="fullWidth" />
      <TextInput value={null} mb={3} width={1 / 2} placeholder="width: 1/2" />
      <TextInput value={null} width={400} placeholder="width: 400px" />
    </Box>
  ));
