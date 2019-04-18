import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import Scrollable from './Scrollable';

const generatedItems = (height = 100, width = '100%', colour = 'purples') => {
  const items = [];
  let counter = 2;
  let increment = true;
  for (let i = 0; i < 15; i++) {
    items.push(
      <Box key={i} height={height} width={width} bg={`${colour}.${counter}`}>{`Box ${i}`}</Box>
    );
    if (increment) {
      counter++;
      if (counter === 4) {
        increment = !increment;
      }
    } else {
      counter--;
      if (counter === 2) {
        increment = !increment;
      }
    }
  }

  return items;
};

storiesOf('Containers/Scrollable', module)
  .add('With vertical scrolling', () => (
    <Box width={1 / 3} height={450} flexDirection="column">
      <Scrollable>
        {generatedItems()}
      </Scrollable>
    </Box>
  ))
  .add('With horizontal scrolling', () => (
    <Box width={2 / 3} height={150}>
      <Scrollable scrollDirection="horizontal">
        {generatedItems('100%', 100, 'reds')}
      </Scrollable>
    </Box>
  ))
  .add('With minimally-styled scrollbar', () => (
    <Box width={1 / 3} height={450} flexDirection="column">
      <Scrollable minimal bg="blues.3">
        {generatedItems()}
      </Scrollable>
    </Box>
  ));
