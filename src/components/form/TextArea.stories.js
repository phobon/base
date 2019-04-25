import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import TextArea from './TextArea';

storiesOf('Form/TextArea', module)
  .add('With different heights', () => (
    <Box alignItems="flex-start">
      <TextArea width={100} value={null} mr={3} placeholder="default height" />
      <TextArea width={100} height={300} value={null} placeholder="height: 300" />
    </Box>
  ))
  .add('With different states', () => (
    <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
      <TextArea value={null} mb={3} placeholder="invalid" invalid />
      <TextArea value={null} mb={3} fullWidth placeholder="disabled" disabled />
    </Box>
  ));