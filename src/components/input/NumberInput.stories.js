import React from 'react';

import { Box } from '../containers';
import NumberInput from './NumberInput';
import Label from './Label';

export default {
  component: NumberInput,
  title: 'Input/NumberInput',
};

export const withAndWithoutHidingSpinButtons = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Label mb={1}>With spin buttons</Label>
    <NumberInput value={0} id="1" mb={5} />

    <Label mb={1}>Without spin buttons</Label>
    <NumberInput value={0} id="1" hideSpinButtons />
  </Box>
);

export const withDifferentStates = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <NumberInput value={null} mb={3} placeholder="invalid" invalid />
    <NumberInput value={null} mb={3} fullWidth placeholder="disabled" disabled />
  </Box>
);
