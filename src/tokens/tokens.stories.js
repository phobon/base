import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Text } from '../components';

import fontSizes from './fontSizes';
import space from './space';
import radii from './radii';

storiesOf('Tokens', module)
  .add('With different fontSizes', () => (
    <Box alignItems="flex-start" flexDirection="column">
      {fontSizes.map((f, i) => (
        <Text key={f} fontSize={f} color="grayscale.2" mb={2}>{`${i}: ${f}px`}</Text>
      ))}
    </Box>
  ))
  .add('With different spaces', () => (
    <Box alignItems="flex-start" flexDirection="column">
      {space.map((s, i) => (
        <Box key={s} mb={2}>
          <Box bg="oranges.3" width={s} borderRadius={2} height={24} />
          <Box px={1} py="1px" fullHeight bg="grayscale.2" borderRadius={3} ml={2}>
            <Text fontSize={0} color="white">{`${i}: ${s}px`}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  ))
  .add('With different radii', () => (
    <Box alignItems="flex-start" flexDirection="column">
      {radii.map((r, i) => (
        <Box key={r} mb={3} borderRadius={r} width={100} height={100} bg="grayscale.6">
          <Text>{`${i}: ${r}px`}</Text>
        </Box>
      ))}
    </Box>
  ));