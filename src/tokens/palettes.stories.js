import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Flex, Grid, Heading, Text } from '../components';

import { colour } from './palettes';

storiesOf('Tokens/Palettes', module)
  .add('With light theme', () => {
    const grayscale = [...colour.grayscale];
    grayscale.reverse();

    return (
      <Grid fullWidth fullHeight gridTemplateColumns="repeat(3, 1fr)" gridAutoRows="auto" gridGap={8} bg="background" p={8}>
        {grayscale.map((g, i) => (
          <Box fullWidth fullHeight key={g}>
            <Box flexDirection="column" alignItems="flex-start" mr={3}>
              <Heading.H1 color={g} mb={3}>Heading.H1</Heading.H1>
              <Heading.H2 color={g} mb={3}>Heading.H2</Heading.H2>
              <Heading.H3 color={g} mb={3}>Heading.H3</Heading.H3>
              <Heading.H4 color={g} mb={3}>Heading.H4</Heading.H4>
              <Heading.H5 color={g} mb={3}>Heading.H5</Heading.H5>
              <Heading.H6 color={g} mb={3}>Heading.H6</Heading.H6>
              <Text color={g} mb={5}>Some Text here</Text>
            </Box>
          
            <Flex fullWidth fullHeight borderRadius={4} bg={g}>
              <Heading.H1 color="foreground">Text Here</Heading.H1>
            </Flex>
          </Box>
        ))}
      </Grid>
  )})
  .add('With dark theme', () => {
    const grayscale = [...colour.reverseGrayscale];
    grayscale.reverse();
  
    return (
      <Grid fullWidth gridTemplateColumns="repeat(3, 1fr)" gridAutoRows="auto" gridGap={8} bg="hsl(228, 22%, 22%)" p={8}>
        {grayscale.map(g => (
          <Box fullWidth fullHeight key={g}>
            <Box flexDirection="column" alignItems="flex-start" mr={3}>
              <Heading.H1 color={g} mb={3}>Heading.H1</Heading.H1>
              <Heading.H2 color={g} mb={3}>Heading.H2</Heading.H2>
              <Heading.H3 color={g} mb={3}>Heading.H3</Heading.H3>
              <Heading.H4 color={g} mb={3}>Heading.H4</Heading.H4>
              <Heading.H5 color={g} mb={3}>Heading.H5</Heading.H5>
              <Heading.H6 color={g} mb={3}>Heading.H6</Heading.H6>
              <Text color={g} mb={5}>Some Text here</Text>
            </Box>
           
            <Flex fullWidth fullHeight borderRadius={4} bg={g}>
              <Heading.H1 color="hsl(220, 4%, 98%)">Text Here</Heading.H1>
            </Flex>
          </Box>
        ))}
      </Grid>
  )});

