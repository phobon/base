import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';

import Truncate from './Truncate';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus.';

storiesOf('Typography/Truncate', module)
  .add('With width constraints', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate mb={4} p={0} width={350} color="grayscale.2">
        {text}
      </Truncate>

      <Truncate mb={4} p={0} width={350} color="grayscale.2" textStyle="monospace">
        {text}
      </Truncate>

      <Truncate mb={4} p={0} width={350} color="grayscale.2" textStyle="caps">
        {text}
      </Truncate>
    </Box>
  ))
  .add('Without width constraints', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate mb={4} p={0} color="grayscale.2" fullWidth>
        {text}
      </Truncate>

      <Truncate mb={4} p={0} color="grayscale.2" textStyle="monospace" fullWidth>
        {text}
      </Truncate>

      <Truncate mb={4} p={0} color="grayscale.2" textStyle="caps" fullWidth>
        {text}
      </Truncate>
    </Box>
  ))
  .add('With different numbers of lines', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate bg="background" mb={4} p={0} color="grayscale.2" fullWidth>
        {text}
      </Truncate>

      <Truncate bg="background" mb={4} p={0} color="grayscale.2" textStyle="monospace" fullWidth lines={2}>
        {text}
      </Truncate>

      <Truncate bg="background" mb={4} p={0} color="grayscale.2" textStyle="caps" fullWidth lines={3}>
        {text}
      </Truncate>
    </Box>
  ))
  .add('With different background colours', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate mb={4} p={0} color="reds.0" fullWidth bg="reds.5">
        {text}
      </Truncate>
    
      <Truncate mb={4} p={0} color="greens.0" textStyle="monospace" fullWidth lines={2} bg="greens.6">
        {text}
      </Truncate>

      <Truncate mb={4} p={0} color="oranges.0" textStyle="caps" fullWidth lines={3} bg="oranges.6">
        {text}
      </Truncate>
    </Box>
  ));