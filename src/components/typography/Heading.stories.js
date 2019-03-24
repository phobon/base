import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';

import Heading from './Heading';

storiesOf('Typography/Heading', module)
  .add('With different heading sizes', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Heading.H1 mb={2}>Heading.H1</Heading.H1>
      <Heading.H2 mb={2}>Heading.H2</Heading.H2>
      <Heading.H3 mb={2}>Heading.H3</Heading.H3>
      <Heading.H4 mb={2}>Heading.H4</Heading.H4>
      <Heading.H5 mb={2}>Heading.H5</Heading.H5>
      <Heading.H6>Heading.H6</Heading.H6>
    </Box>
  ))
  .add('With different textStyles', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Heading.H1 mb={2} textStyle="monospace">Heading.H1</Heading.H1>
      <Heading.H2 mb={2} textStyle="monospace">Heading.H2</Heading.H2>
      <Heading.H3 mb={2} textStyle="monospace">Heading.H3</Heading.H3>
      <Heading.H4 mb={2} textStyle="monospace">Heading.H4</Heading.H4>
      <Heading.H5 mb={2} textStyle="monospace">Heading.H5</Heading.H5>
      <Heading.H6 textStyle="monospace" mb={6}>Heading.H6</Heading.H6>

      <Heading.H1 mb={2} textStyle="caps">Heading.H1</Heading.H1>
      <Heading.H2 mb={2} textStyle="caps">Heading.H2</Heading.H2>
      <Heading.H3 mb={2} textStyle="caps">Heading.H3</Heading.H3>
      <Heading.H4 mb={2} textStyle="caps">Heading.H4</Heading.H4>
      <Heading.H5 mb={2} textStyle="caps">Heading.H5</Heading.H5>
      <Heading.H6 textStyle="caps">Heading.H6</Heading.H6>
    </Box>
  ))
  .add('With different Text component props', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Heading.H1 mb={3} color="tomato">color: tomato</Heading.H1>
      <Heading.H1 mb={3} color="purples.3">theme color: purples.3</Heading.H1>
      <Heading.H1 fontWeight="bold">fontWeight: bold</Heading.H1>
    </Box>
  ));
