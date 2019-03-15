import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Link from './Link';

storiesOf('Link', module)
  .add('With different states', () => (
    <React.Fragment>
      <Link href="#" mr={3}>Normal link</Link>
      <Link href="#" clean>Clean link</Link>
    </React.Fragment>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Link href="#" color="tomato" mb={3}>String colour: tomato</Link>
      <Link href="#" color="accent.4" mb={3}>Theme colour: accent.4</Link>
      <Link href="#" color="grayscale.1" mb={3}>Theme colour: grayscale.1</Link>
      <Link href="#" color="purples.2">Theme colour: purples.2</Link>
    </Box>
  ))
  .add('With different textStyles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Link href="#" textStyle="caps">caps</Link>
      <Link href="#" textStyle="monospace" mt={3}>monospace</Link>
    </Box>
  ));
