import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import NumberInput from './NumberInput';
import Label from './Label';

storiesOf('Core/Form/NumberInput', module)
  .add('With and without hiding spin buttons', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Label mb={1}>With spin buttons</Label>
      <NumberInput value={0} id="1" mb={5} />

      <Label mb={1}>Without spin buttons</Label>
      <NumberInput value={0} id="1" hideSpinButtons />
    </Box>
  ));