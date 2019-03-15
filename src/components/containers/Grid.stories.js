import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Grid from './Grid';
import Box from './Box';

storiesOf('Containers/Grid', module)
  .add('With repeated rows and columns', () => {
    const grid = [
      0, 1, 0, 1, 0,
      1, 1, 0, 1, 1,
      0, 0, 0, 0, 0,
      1, 1, 0, 1, 1,
      0, 1, 0, 1, 0
    ];
    const cells = grid.map((c, i) => (
      <Box borderRadius={3} key={i} fullHeight bg={c === 1 ? "purples.2" : "transparent" } />
    ));

    return (
      <Grid
        gridTemplateColumns="repeat(5, 48px)"
        gridColumnGap={3}
        gridTemplateRows="repeat(5, 48px)"
        gridRowGap={3}>
        {cells}
      </Grid>
    );
  })
  .add('With area-based composition', () => (
    <Grid gridGap={3} gridTemplateRows="repeat(4, 100px)" gridTemplateColumns="repeat(4, 100px)">
      <Box fullHeight borderRadius={3} bg="oranges.3" gridArea="1 / 1 / 2 / span 4" />
      <Box fullHeight borderRadius={3} bg="blues.3" gridArea="2 / 1 / span 3 / 2" />
      <Box fullHeight borderRadius={3} bg="purples.3" gridArea="2 / 2 / span 2 / span 3" />
      <Box fullHeight borderRadius={3} bg="greens.3" gridArea="4 / 2 / 5 / span 3" />
    </Grid>
  ));
