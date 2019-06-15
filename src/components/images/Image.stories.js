import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../containers';
import Image from './Image';

storiesOf('Images/Image', module)
  .add('With different Box props', () => (
    <React.Fragment>
      <Image src="https://source.unsplash.com/random/100x100" mr={3} />
      <Image src="https://source.unsplash.com/random/100x100" mr={3} round />
      <Image src="https://source.unsplash.com/random/100x100" borderRadius={4} />
    </React.Fragment>
  ))
  .add('With and without responsive sizing', () => (
    <React.Fragment>
      <Image src="https://source.unsplash.com/random/400x400" mr={3} />
      <Box width={100} height={100}>
        <Image src="https://source.unsplash.com/random/400x400" responsive />
      </Box>
    </React.Fragment>
  ));
