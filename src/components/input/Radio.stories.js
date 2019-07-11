import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Radio from './Radio';

storiesOf('Input/Radio', module)
  .add('With different sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio label="default (3)" id="1" mb={3} />
      <Radio label="4" size={4} id="2" mb={3} />
      <Radio label="5" size={5} id="3" mb={3} />
      <Radio label="6" size={6} id="4" mb={3} />
      <Radio label="7" size={7} id="5" />
    </Box>
  ))
  .add('With different color', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio label="default" id="1" mb={3} />
      <Radio label="oranges.2" color="oranges.2" id="2" mb={3} />
      <Radio label="blues.2" color="blues.2" id="3" mb={3} />
      <Radio label="purple" color="purple" id="4" mb={3} />
      <Radio label="teal" color="teal" id="5" />
    </Box>
  ))
  .add('With different states', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio label="invalid" id="1" mb={3} invalid />
      <Radio label="disabled" id="2" disabled />
    </Box>
  ));