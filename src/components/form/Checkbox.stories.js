import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Checkbox from './Checkbox';

storiesOf('Form/Checkbox', module)
  .add('With different sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox label="default (3)" id="1" mb={3} />
      <Checkbox label="4" size={4} id="2" mb={3} />
      <Checkbox label="5" size={5} id="3" mb={3} />
      <Checkbox label="6" size={6} id="4" mb={3} />
      <Checkbox label="7" size={7} id="5" />
    </Box>
  ))
  .add('With different color', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox label="default" id="1" mb={3} />
      <Checkbox label="oranges.2" color="oranges.2" id="2" mb={3} />
      <Checkbox label="blues.2" color="blues.2" id="3" mb={3} />
      <Checkbox label="purple" color="purple" id="4" mb={3} />
      <Checkbox label="teal" color="teal" id="5" />
    </Box>
  ))
  .add('With label styles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox label="fontSize" id="1" mb={3} fontSize="3" />
      <Checkbox label="fontWeight" id="2" mb={3} fontWeight="bold" />
      <Checkbox label="textStyle" id="3" mb={3} textStyle="monospace" />
      <Checkbox label="labelColor" id="4" labelColor="oranges.3" />
    </Box>
  ));