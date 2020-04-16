import React from 'react';

import Box from './Box';
import Stack from './Stack';
import Scrollable from './Scrollable';

export default {
  component: Scrollable,
  title: 'Containers/Scrollable',
};

const generatedItems = (height = 100, width = '100%', colour = 'purples', prefix = 'scrollable') => {
  const items = [];
  let counter = 2;
  let increment = true;
  for (let i = 0; i < 15; i++) {
    items.push(<Box key={`${prefix}__${i}`} height={height} width={width} bg={`${colour}.${counter}`}>{`Box ${i}`}</Box>);
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

export const withVerticalScrolling = () => (
  <Scrollable width={1 / 3} height={450}>
    {generatedItems()}
  </Scrollable>
);

export const withHorizontalScrolling = () => (
  <Scrollable width={2 / 3} height={150} scrollDirection="horizontal">
    {generatedItems('100%', 100, 'reds')}
  </Scrollable>
);

export const withMinimallyStyledScrollbar = () => (
  <Scrollable minimal width={1 / 3} height={450}>
    {generatedItems()}
  </Scrollable>
);

export const withDifferentMinimallyStyledScrollbarColours = () => (
  <Stack flexDirection="row" space={3}>
    {colours.map(c => (
      <Scrollable width={150} key={c} height={450} minimal scrollbarColor={c}>
        {generatedItems(100, '100%', 'grayscale', c)}
      </Scrollable>
    ))}
  </Stack>
);
