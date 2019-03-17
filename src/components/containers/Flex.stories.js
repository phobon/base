import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import Flex from './Flex';

const TestFlex = styled(Flex)``;
TestFlex.defaultProps = Object.assign({}, Flex.defaultProps, {
  height: 100,
  bg: 'purples.2',
  color: 'white',
});

const TestBox = styled(Box)``;
TestBox.defaultProps = Object.assign({}, Box.defaultProps, {
  width: 100,
  height: 100,
  bg: 'blues.2',
  color: 'white',
});

storiesOf('Containers/Flex', module)
  .add('With different composition', () => (
    <Flex flexDirection="column" fullWidth>
      <Flex mb={3} fullWidth>
        <TestFlex>Flex</TestFlex>
        <TestBox>Box</TestBox>
        <TestBox>Box</TestBox>
      </Flex>

      <Flex mb={3} fullWidth>
        <TestBox>Box</TestBox>
        <TestFlex>Flex</TestFlex>
        <TestBox>Box</TestBox>
      </Flex>

      <Flex fullWidth>
        <TestBox>Box</TestBox>
        <TestBox>Box</TestBox>
        <TestFlex>Flex</TestFlex>
      </Flex>
    </Flex>
  ))
  .add('With wrapping', () => (
    <Box fullWidth flexWrap="wrap" width={2 / 3}>
      <TestFlex minWidth={300} mr={3} mb={3}>Flex</TestFlex>
      <TestFlex minWidth={300} mr={3} mb={3}>Flex</TestFlex>
    </Box>
  ))
  .add('With different justification', () => (
    <Box fullWidth flexDirection="column">
      <Flex fullWidth justifyContent="space-between" mb={6}>
        <TestBox p={4} width={250}>space-between</TestBox>
        <TestBox p={4} width={250}>space-between</TestBox>
      </Flex>

      <Flex fullWidth justifyContent="space-around">
        <TestBox p={4} width={250}>space-around</TestBox>
        <TestBox p={4} width={250}>space-around</TestBox>
      </Flex>
    </Box>
  ));
