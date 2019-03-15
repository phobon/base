import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';

import Truncate from './Truncate';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus.';

storiesOf('Typography/Truncate', module)
  .add('With width constraints', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate mb={3} bg="grayscale.7" width={350}>
        {text}
      </Truncate>

      <Truncate mb={3} bg="grayscale.7" width={350} textStyle="monospace">
        {text}
      </Truncate>

      <Truncate width={350} bg="grayscale.7" textStyle="caps">
        {text}
      </Truncate>
    </Box>
  ))
  .add('Without width constraints', () => (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Truncate mb={3}  bg="grayscale.7" fullWidth>
        {text}
      </Truncate>

      <Truncate mb={3} bg="grayscale.7" textStyle="monospace" fullWidth>
        {text}
      </Truncate>

      <Truncate bg="grayscale.7" textStyle="caps" fullWidth>
        {text}
      </Truncate>
    </Box>
  ));

