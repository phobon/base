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
  ));