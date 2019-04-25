import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Radio from './Radio';
import Label from './Label';

storiesOf('Form/Radio', module)
  .add('With different sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio id="1" mb={3}>
        <Label>default (3)</Label>
      </Radio>
      <Radio size={4} id="2" mb={3}>
        <Label>4</Label>
      </Radio>
      <Radio size={5} id="3" mb={3}>
        <Label>5</Label>
      </Radio>
      <Radio size={6} id="4" mb={3}>
        <Label>6</Label>
      </Radio>
      <Radio size={7} id="5">
        <Label>7</Label>
      </Radio>
    </Box>
  ))
  .add('With different color', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio id="1" mb={3}>
        <Label>default</Label>
      </Radio>
      <Radio color="oranges.2" id="2" mb={3}>
        <Label>oranges.2</Label>
      </Radio>
      <Radio color="blues.2" id="3" mb={3}>
        <Label>blues.2</Label>
      </Radio>
      <Radio color="purple" id="4" mb={3}>
        <Label>purple</Label>
      </Radio>
      <Radio color="teal" id="5">
        <Label>teal</Label>
      </Radio>
    </Box>
  ))
  .add('With label styles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio id="1" mb={3}>
        <Label fontSize={3}>fontSize</Label>
      </Radio>
      <Radio id="2" mb={3}>
        <Label fontWeight="bold">fontWeight</Label>
      </Radio>
      <Radio id="3" mb={3}>
        <Label textStyle="monospace">textStyle</Label>
      </Radio>
      <Radio id="4">
        <Label color="oranges.3">color</Label>
      </Radio>
    </Box>
  ))
  .add('With different states', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Radio id="1" mb={3} invalid>
        <Label>invalid</Label>
      </Radio>
      <Radio id="2" disabled>
        <Label>disabled</Label>
      </Radio>
    </Box>
  ));