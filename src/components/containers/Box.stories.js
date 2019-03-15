import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Box from './Box';

const TestBox = styled(Box)``;
TestBox.defaultProps = {
  bg: 'grayscale.6',
  p: 2,
  borderRadius: 2,
};

storiesOf('Containers/Box', module)
  .add('With different paddings', () => (
    <React.Fragment>
      <TestBox mr={3} p={3}>Theme padding: 2</TestBox>
      <TestBox p="25px">String padding: 25px</TestBox>
    </React.Fragment>
  ))
  .add('With different margins', () => (
    <React.Fragment>
      <TestBox mr={3}>Theme margin: 3</TestBox>
      <TestBox mr="25px">String margin: 25px</TestBox>
      <TestBox>No margin</TestBox>
    </React.Fragment>
  ))
  .add('With different colours', () => (
    <React.Fragment>
      <TestBox bg="unset" mr={3} color="tomato" mb={2}>String colour: tomato</TestBox>
      <TestBox bg="unset" mr={3} color="accent.4" mb={2}>Theme colour: accent.4</TestBox>
      <TestBox bg="unset" mr={3} color="grayscale.1">Theme colour: grayscale.1</TestBox>
      <TestBox bg="unset" mr={3} color="purples.2">Theme colour: purples.2</TestBox>
    </React.Fragment>
  ))
  .add('With different background colours', () => (
    <React.Fragment>
      <TestBox bg="tomato" color="white" mr={3}>String background: tomato</TestBox>
      <TestBox bg="accent.4" color="white" mr={3}>Theme background: accent.4</TestBox>
      <TestBox bg="grayscale.1" color="white" mr={3}>Theme background: grayscale.1</TestBox>
      <TestBox bg="purples.2" color="white">Theme background: purples.2</TestBox>
    </React.Fragment>
  ))
  .add('With different sizes', () => (
    <Box flexDirection="column" width={2 / 3} alignItems="flex-start">
      <Box flexDirection="column" alignItems="flex-start" fullWidth mb={6}>
        <TestBox mb={3} width={200} py={2}>Pixels: 200</TestBox>
        <TestBox mb={3} width="10vw" py={2}>String: 10vw</TestBox>
        <TestBox mb={3} width="80%" py={2}>String: 80%</TestBox>
        <TestBox fullWidth>fullWidth</TestBox>
      </Box>

      <Box height={400} alignItems="flex-start" fullWidth>
        <TestBox flex="1" mr={3} height={200} py={2}>Pixels: 200</TestBox>
        <TestBox flex="1" mr={3} height="20vwh" py={2}>String: 20vh</TestBox>
        <TestBox flex="1" mr={3} height="80%" py={2}>String: 80%</TestBox>
        <TestBox flex="1" fullHeight>fullHeight</TestBox>
      </Box>
    </Box>
  ))
  .add('With different directional paddings', () => (
    <Box flexDirection="column" alignItems="flex-start" fullWidth>
      <TestBox mb={3} p={5} justifyContent="flex-start">All directions: 5</TestBox>
      <TestBox mb={3} py={5} justifyContent="flex-start">Vertical axis: 5</TestBox>
      <TestBox mb={3} px={5} justifyContent="flex-start">Horizontal axis: 5</TestBox>
      <TestBox mb={3} pt={5} justifyContent="flex-start">Top: 5</TestBox>
      <TestBox mb={3} pb={5} justifyContent="flex-start">Bottom: 5</TestBox>
      <TestBox mb={3} pl={5} justifyContent="flex-start">Left: 5</TestBox>
      <TestBox pr={5} justifyContent="flex-start">Right: 5</TestBox>
    </Box>
  ))
  .add('With different directional margins', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <TestBox m={5}>All directions: 5</TestBox>
      <TestBox my={5}>Vertical axis: 5</TestBox>
      <TestBox mx={5}>Horizontal axis: 5</TestBox>
      <TestBox mt={5}>Top: 5</TestBox>
      <TestBox mb={5}>Bottom: 5</TestBox>
      <TestBox ml={5}>Left: 5</TestBox>
      <TestBox mr={5}>Right: 5</TestBox>
    </Box>
  ));
