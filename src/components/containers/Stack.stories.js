/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Stack from './Stack';
import { Text } from '../typography';

storiesOf('Containers/Stack', module)
.add('With different vertical spacings', () => (
  <React.Fragment>
    <Stack bg="grayscale.7">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack bg="grayscale.7" space={6} mx={5}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack bg="grayscale.7" space="25px">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
  </React.Fragment>
))
.add('With different horizontal spacings', () => (
  <Stack>
    <Stack flexDirection="row" bg="grayscale.7">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack flexDirection="row" bg="grayscale.7" space={6}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack flexDirection="row" bg="grayscale.7" space="25px">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
  </Stack>
));
 