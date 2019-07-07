import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import Stack from './Stack';
import Scrollable from './Scrollable';

const generatedItems = (height = 100, width = '100%', colour = 'purples', prefix = 'scrollable') => {
  const items = [];
  let counter = 2;
  let increment = true;
  for (let i = 0; i < 15; i++) {
    items.push(
      <Box key={`${prefix}__${i}`} height={height} width={width} bg={`${colour}.${counter}`}>{`Box ${i}`}</Box>
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

const colours = [
  'reds.5', 'oranges.7', 'goldenrod', 'green',
];

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
      <Scrollable minimal>
        {generatedItems()}
      </Scrollable>
    </Box>
  ))
  .add('With different minimally-styled scrollbar colors', () => (
    <Stack flexDirection="row" space={3}>
      {colours.map(c => (
        <Box width={150} key={c} height={450} flexDirection="column">
          <Scrollable minimal scrollbarColor={c}>
            {generatedItems(100, '100%', 'grayscale', c)}
          </Scrollable>
        </Box>
      ))}
    </Stack>
  ));
