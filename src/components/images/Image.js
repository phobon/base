import styled from 'styled-components';
import {
  space,
  layout,
  borderRadius,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { cover, round, gridPosition } from '../../utils';

const Image = styled.img({
  display: 'block',
},
  space,
  layout,
  borderRadius,
  cover,
  round,
  gridPosition,
);

Image.displayName = 'Image';

Image.propTypes = {
  ...propTypes.space,
  ...propTypes.borderRadius,
  ...cover.propTypes,
  ...round.propTypes,
  ...gridPosition.propTypes,
};

export default Image;
