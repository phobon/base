import styled from 'styled-components';
import {
  space,
  width,
  height,
  borderRadius,
} from 'styled-system';

import { cover, round } from '../../utils';

const Image = styled.img({
  display: 'block',
},
  space,
  width,
  height,
  borderRadius,
  cover,
  round,
);

Image.displayName = 'Image';

Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,
  ...cover.propTypes,
  ...round.propTypes,
};

export default Image;
