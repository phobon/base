import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Radio from './Radio';

storiesOf('Form/Radio', module)
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
  .add('With label styles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio label="fontSize" id="1" mb={3} fontSize="3" />
      <Radio label="fontWeight" id="2" mb={3} fontWeight="bold" />
      <Radio label="textStyle" id="3" mb={3} textStyle="monospace" />
      <Radio label="labelColor" id="4" labelColor="oranges.3" />
    </Box>
  ))
  .add('With different states', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio label="error" id="1" mb={3} error />
      <Radio label="disabled" id="2" disabled />
    </Box>
  ));