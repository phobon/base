import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grid, Heading, Text } from '../components';

import { colour } from './palettes';

storiesOf('Tokens/Palettes', module)
  .add('With light theme', () => {
    const grayscale = [...colour.grayscale];
    grayscale.reverse();

    return (
    <Grid fullWidth fullHeight gridTemplateColumns="repeat(4, 1fr)" gridAutoRows="20rem" gridGap={8} bg="background" p={8}>
      {grayscale.map(g => (
        <Box fullWidth fullHeight borderRadius={4} bg={g}>
          <Heading.H1 color="foreground">Text Here</Heading.H1>
        </Box>
      ))}
    </Grid>
  )})
  .add('With dark theme', () => {
    const grayscale = [...colour.reverseGrayscale];
    grayscale.reverse();
  
    return (
    <Grid fullWidth fullHeight gridTemplateColumns="repeat(4, 1fr)" gridAutoRows="20rem" gridGap={8} bg="hsl(228, 22%, 22%)" p={8}>
      {grayscale.map(g => (
        <Box fullWidth fullHeight borderRadius={4} bg={g}>
          <Heading.H1 color="hsl(220, 4%, 98%)">Text Here</Heading.H1>
        </Box>
      ))}
    </Grid>
  )});

