/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack, Box, Flex, Grid, Heading, Text } from '../components';

import { colour, colourHsluv, focus } from './palettes';

const guidance = ['success', 'error', 'warning', 'info'];

const SmallColourBox = ({ children, ...props }) => (
  <Box fullHeight fullWidth borderRadius={4} {...props}>{children}</Box>
);

const PaletteStack = ({ bg }) => (
  <Stack fullWidth space={3} bg={bg}>
    <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="48px" p={5}>
      {colour.blues.map((g, i) => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white">{`blues.${i}`}</SmallColourBox>
      ))}
      {colourHsluv.blues.map(g => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white" />
      ))}
    </Grid>

    <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="48px" p={5}>
      {colour.greens.map((g, i) => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white">{`greens.${i}`}</SmallColourBox>
      ))}
      {colourHsluv.greens.map(g => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white" />
      ))}
    </Grid>

    <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="48px" p={5}>
      {colour.purples.map((g, i) => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white">{`purples.${i}`}</SmallColourBox>
      ))}
      {colourHsluv.purples.map(g => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white" />
      ))}
    </Grid>

    <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="48px" p={5}>
      {colour.oranges.map((g, i) => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white">{`oranges.${i}`}</SmallColourBox>
      ))}
      {colourHsluv.oranges.map(g => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white" />
      ))}
    </Grid>

    <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="48px" p={5}>
      {colour.reds.map((g, i) => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white">{`reds.${i}`}</SmallColourBox>
      ))}
      {colourHsluv.reds.map(g => (
        <SmallColourBox borderRadius={0} key={g} bg={g} height={48} color="white" />
      ))}
    </Grid>
  </Stack>
);

storiesOf('Tokens/Palettes', module)
  .add('With light theme', () => {
    const grayscale = [...colour.lightGrayscale];
    grayscale.reverse();

    return (
      <Box fullWidth flexDirection="column" alignItems="flex-start" bg="background">
        <Grid fullWidth gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="48px" gridGap={6} p={5}>
          <SmallColourBox bg={focus} color="white">focus</SmallColourBox>
          {guidance.map(g => (
            <SmallColourBox key={g} bg={`guidance.${g}.1`} color={`guidance.${g}.0`}>{g}</SmallColourBox>
          ))}
        </Grid>
        <Grid fullWidth fullHeight gridTemplateColumns="1fr 1fr" gridAutoRows="auto" gridGap={8} p={5}>
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
                <Heading.H1 color="foreground" css={{ textAlign: 'center' }}>{`grayscale.${grayscale.length - 1 - i}`}</Heading.H1>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
  )})
  .add('With dark theme', () => {
    const grayscale = [...colour.darkGrayscale];
    grayscale.reverse();
  
    return (
      <Box fullWidth flexDirection="column" alignItems="flex-start" bg="hsl(221, 20%, 22%)">
        <Grid fullWidth gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="48px" gridGap={6} p={5}>
          <SmallColourBox bg={focus} color="white">focus</SmallColourBox>
          {guidance.map(g => (
            <SmallColourBox key={g} bg={`guidance.${g}.1`} color={`guidance.${g}.0`}>{g}</SmallColourBox>
          ))}
        </Grid>
        <Grid fullWidth fullHeight gridTemplateColumns="1fr 1fr" gridAutoRows="auto" gridGap={8} p={5}>
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
                <Heading.H1 color="hsl(228, 62%, 95%)" css={{ textAlign: 'center' }}>{`grayscale.${grayscale.length - 1 - i}`}</Heading.H1>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
  )})
  .add('With light secondary palettes', () => {  
    return (
      <PaletteStack />
  )})
  .add('With dark secondary palettes', () => {  
    return (
      <PaletteStack bg="grayscale.0" />
  )});

