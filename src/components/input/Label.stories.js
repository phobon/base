import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';

import Label from './Label';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus.';

storiesOf('Input/Label', module)
  .add('With different textStyles', () => (
    <Box flexDirection="column" alignItems="flex-start" fullWidth>
      <Label mb={3}>
        {text}
      </Label>
      <Label mb={3} textStyle="monospace">
        {text}
      </Label>
      <Label textStyle="caps">
        {text}
      </Label>
    </Box>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Label color="tomato" mb={3}>String colour: tomato</Label>
      <Label color="accent.4" mb={3}>Theme colour: accent.4</Label>
      <Label color="grayscale.1" mb={3}>Theme colour: grayscale.1</Label>
      <Label color="purples.2">Theme colour: purples.2</Label>
    </Box>
  ));
