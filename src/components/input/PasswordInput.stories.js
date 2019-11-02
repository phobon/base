import React from 'react';

import { Box } from '../containers';
import PasswordInput from './PasswordInput';

export default {
  component: PasswordInput,
  title: 'Input/PasswordInput',
};

export const withDifferentPaddings = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <PasswordInput value={null} mb={3} placeholder="default width" />
    <PasswordInput value={null} mb={3} fullWidth placeholder="fullWidth" />
    <PasswordInput value={null} mb={3} width={1 / 2} placeholder="width: 1/2" />
    <PasswordInput value={null} width={400} placeholder="width: 400px" />
  </Box>
);

export const withDifferentStates = () => (
  <Box width={1 / 2} flexDirection="column" alignItems="flex-start">
    <PasswordInput value={null} mb={3} placeholder="invalid" invalid />
    <PasswordInput value={null} mb={3} fullWidth placeholder="disabled" disabled />
  </Box>
);
