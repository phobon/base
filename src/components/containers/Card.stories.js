import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import Card from './Card';

storiesOf('Containers/Card', module)
  .add('With and without content', () => (
    <React.Fragment>
      <Card width={150} height={50} mr={3}/>
      <Card p={4}>
        Some content
      </Card>
    </React.Fragment>
  ))
  .add('With different box shadow sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Card p={4} boxShadowSize="s" mb={5}>boxShadowSize: s</Card>
      <Card p={4} boxShadowSize="m" mb={5}>boxShadowSize: m</Card>
      <Card p={4} boxShadowSize="l" mb={5}>boxShadowSize: l</Card>
      <Card p={4} boxShadowSize="xl" mb={5}>boxShadowSize: xl</Card>
      <Card p={4} boxShadowSize="xxl" mb={5}>boxShadowSize: xxl</Card>
    </Box>
  ));
