import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Checkbox from './Checkbox';
import Label from './Label';

storiesOf('Form/Checkbox', module)
  .add('With different sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox id="1" mb={3}>
        <Label>default (3)</Label>
      </Checkbox>
      <Checkbox size={4} id="2" mb={3}>
        <Label>4</Label>
      </Checkbox>
      <Checkbox size={5} id="3" mb={3}>
        <Label>5</Label>
      </Checkbox>
      <Checkbox size={6} id="4" mb={3}>
        <Label>6</Label>
      </Checkbox>
      <Checkbox size={7} id="5">
        <Label>7</Label>
      </Checkbox>
    </Box>
  ))
  .add('With different color', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox id="1" mb={3}>
        <Label>default</Label>
      </Checkbox>
      <Checkbox color="oranges.2" id="2" mb={3}>
        <Label>oranges.2</Label>
      </Checkbox>
      <Checkbox color="blues.2" id="3" mb={3}>
        <Label>blues.2</Label>
      </Checkbox>
      <Checkbox color="purple" id="4" mb={3}>
        <Label>purple</Label>
      </Checkbox>
      <Checkbox color="teal" id="5">
        <Label>teal</Label>
      </Checkbox>
    </Box>
  ))
  .add('With label styles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox id="1" mb={3}>
        <Label fontSize={3}>fontSize</Label>
      </Checkbox>
      <Checkbox id="2" mb={3}>
        <Label fontWeight="bold">fontWeight</Label>
      </Checkbox>
      <Checkbox id="3" mb={3}>
        <Label textStyle="monospace">textStyle</Label>
      </Checkbox>
      <Checkbox id="4">
        <Label color="oranges.3">color</Label>
      </Checkbox>
    </Box>
  ))
  .add('With different states', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Checkbox id="1" mb={3} invalid>
        <Label>invalid</Label>
      </Checkbox>
      <Checkbox id="2" disabled>
        <Label>disabled</Label>
      </Checkbox>
    </Box>
  ));