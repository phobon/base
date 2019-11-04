/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-spread */
import React from 'react';
import { contrast } from 'chroma-js';

import { Stack, Box, Flex, Grid, Heading, Text } from '../components';

import { colour, focus } from './palettes';

export default {
  title: 'Tokens/Palettes',
};

const guidance = ['success', 'error', 'warning', 'info'];

const colourSet = {...colour};
delete colourSet.accent;

const SmallColourBox = ({ children, ...props }) => (
  <Box fullHeight fullWidth borderRadius={4} {...props}>{children}</Box>
);

export const withLightTheme = () => {
  const { lightGrayscale } = colourSet;

  return (
    <Box fullWidth flexDirection="column" alignItems="flex-start" bg="background">
      <Grid fullWidth gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="48px" gridGap={6} p={5}>
        <SmallColourBox bg={focus} color="white">focus</SmallColourBox>
        {guidance.map(g => (
          <SmallColourBox key={g} bg={`guidance.${g}.1`} color={`guidance.${g}.0`}>{g}</SmallColourBox>
        ))}
      </Grid>
      <Grid fullWidth fullHeight gridTemplateColumns="1fr 1fr" gridAutoRows="auto" gridGap={8} p={5}>
        {lightGrayscale.map((g, i) => (
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
              <Heading.H1 color="foreground" css={{ textAlign: 'center' }}>{`grayscale.${lightGrayscale.length - 1 - i}`}</Heading.H1>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
)}

export const withDarkTheme = () => {
  const { darkGrayscale } = colourSet;

  return (
    <Box fullWidth flexDirection="column" alignItems="flex-start" bg="hsl(221, 20%, 22%)">
      <Grid fullWidth gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="48px" gridGap={6} p={5}>
        <SmallColourBox bg={focus} color="white">focus</SmallColourBox>
        {guidance.map(g => (
          <SmallColourBox key={g} bg={`guidance.${g}.1`} color={`guidance.${g}.0`}>{g}</SmallColourBox>
        ))}
      </Grid>
      <Grid fullWidth fullHeight gridTemplateColumns="1fr 1fr" gridAutoRows="auto" gridGap={8} p={5}>
        {darkGrayscale.map((g, i) => (
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
              <Heading.H1 color="hsl(228, 62%, 95%)" css={{ textAlign: 'center' }}>{`grayscale.${darkGrayscale.length - 1 - i}`}</Heading.H1>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
)}

export const withLightSecondaryPalettes = () => {
  const t = Object.keys(colourSet).map(c => colourSet[c]);
  return (
    <Box fullWidth fullHeight p={6}>
      <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridColumnGap={4}>
        {t.map((i, count) => (
          <Stack fullWidth key={`palette_${count}`}>
            {i.map(c => (
              <Box key={c} fullWidth height={40} bg={c} />
            ))}
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}

export const withDarkSecondaryPalettes = () => {
  const t = Object.keys(colourSet).map(c => colourSet[c]);
  return (
    <Box fullWidth fullHeight bg="grayscale.0" p={6}>
      <Grid fullWidth fullHeight gridTemplateColumns="repeat(10, 1fr)" gridColumnGap={4}>
        {t.map((i, count) => (
          <Stack fullWidth key={`palette_${count}`}>
            {i.map(c => (
              <Box key={c} fullWidth height={40} bg={c} />
            ))}
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}

export const withContrastRatios = () => {
  const o = Object.keys(colourSet).map(c => colourSet[c]);
  const merged = [].concat.apply([], o);
  return (
    <Stack space={4} fullWidth>
      <Grid fullWidth gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="50px">
        {merged.map((c, i) => (
          <Box key={`white__${i}`} fullWidth fullHeight bg={c}>
            <Box bg="hsla(0, 0%, 0%, 0.7)" borderRadius={3} px={1} lineHeight={1} color="white">{contrast('#fff', c).toFixed(2)}</Box>
          </Box>
        ))}
      </Grid>
      <Grid fullWidth gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="50px">
        {merged.map((c, i) => (
          <Box key={`black__${i}`} fullWidth fullHeight bg={c}>
            <Box bg="hsla(0, 0%, 0%, 0.7)" borderRadius={3} px={1} lineHeight={1} color="white">{contrast('#000', c).toFixed(2)}</Box>
          </Box>
        ))}
      </Grid>

      <Grid fullWidth gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="50px">
        {merged.map((c, i) => (
          <Box key={`colour__${i}`} fullWidth fullHeight>
            <Text color={c} fontSize={2}>{`${contrast('#fff', c).toFixed(2)}`}</Text>
          </Box>
        ))}
      </Grid>

      <Grid fullWidth gridTemplateColumns="repeat(10, 1fr)" gridAutoRows="50px" bg="grayscale.0">
        {merged.map((c, i) => (
          <Box key={`colour__${i}`} fullWidth fullHeight>
            <Text color={c} fontSize={2}>{`${contrast('hsl(213, 10%, 17%)', c).toFixed(2)}`}</Text>
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};

