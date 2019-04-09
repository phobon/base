import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Flex, Grid, Heading, Text } from '../components';

import { colour, focus } from './palettes';

const guidance = ['success', 'error', 'warning', 'info'];

const SmallColourBox = ({ children, ...props }) => (
  <Box fullHeight fullWidth borderRadius={4} {...props}>{children}</Box>
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
                <Heading.H1 color="foreground" css={{ textAlign: 'center' }}>Text Here</Heading.H1>
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
                <Heading.H1 color="hsl(228, 62%, 95%)" css={{ textAlign: 'center' }}>Text Here</Heading.H1>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
  )})
  .add('With light secondary palettes', () => {  
    return (
      <Grid fullWidth fullHeight gridTemplateColumns="repeat(8, 1fr)" gridAutoRows="48px" gridRowGap={7} p={5}>
        {colour.blues.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`blues.${i}`}</SmallColourBox>
        ))}
        {colour.greens.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`greens.${i}`}</SmallColourBox>
        ))}
        {colour.purples.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`purples.${i}`}</SmallColourBox>
        ))}
        {colour.oranges.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`oranges.${i}`}</SmallColourBox>
        ))}
        {colour.reds.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`reds.${i}`}</SmallColourBox>
        ))}
      </Grid>
  )})
  .add('With dark secondary palettes', () => {  
    return (
      <Grid fullWidth fullHeight gridTemplateColumns="repeat(8, 1fr)" gridAutoRows="48px" gridRowGap={7} bg="hsl(221, 20%, 22%)" p={5}>
        {colour.blues.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`blues.${i}`}</SmallColourBox>
        ))}
        {colour.greens.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`greens.${i}`}</SmallColourBox>
        ))}
        {colour.purples.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`purples.${i}`}</SmallColourBox>
        ))}
        {colour.oranges.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`oranges.${i}`}</SmallColourBox>
        ))}
        {colour.reds.map((g, i) => (
          <SmallColourBox borderRadius={0} key={g} bg={g} color="white">{`reds.${i}`}</SmallColourBox>
        ))}
      </Grid>
  )});

