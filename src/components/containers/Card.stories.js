import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';

import Card from './Card';

const boxShadowSizes = ['s', 'm', 'l', 'xl'];
const boxShadowIntensities = [0, 0.25, 0.5, 0.75, 1];

storiesOf('Containers/Card', module)
  .add('With and without content', () => (
    <React.Fragment>
      <Card width={150} height={50} mr={5} />
      <Card p={4}>Some content</Card>
    </React.Fragment>
  ))
  .add('With different box shadow sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      {boxShadowSizes.map(b => (
        <Card key={b} p={4} boxShadowSize={b} mb={5} width={150}>{b}</Card>
      ))}
    </Box>
  ))
  .add('With different box shadow intensities', () => (
    <Box flexDirection="column" alignItems="flex-start">
      {boxShadowIntensities.map(b => (
        <Card key={b} p={4} boxShadowIntensity={b} mb={5} width={150}>{b}</Card>
      ))}
    </Box>
  ));