import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  borderRadius,
  background,
  position,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { fullWidth, fullHeight, round, gridPosition } from '../../utils';

const cover = props => props.cover ? { backgroundSize: 'cover' } : { backgroundSize: 'auto' };
cover.propTypes = {
  cover: PropTypes.bool,
};

const responsive = props => props.responsive ? {
  width: '100%',
  height: 'auto',
} : null;
responsive.propTypes = {
  responsive: PropTypes.bool,
};

const imageSystem = compose(space, layout, borderRadius, background, position);

const Image = styled('img').withConfig({
  shouldForwardProp,
})({
  display: 'block',
},
  imageSystem,
  fullWidth,
  fullHeight,
  round,
  gridPosition,
  cover,
  responsive,
);

Image.displayName = 'Image';

Image.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.borderRadius,
  ...propTypes.background,
  ...propTypes.position,
  ...fullWidth.propTypes,
  ...fullHeight.propTypes,
  ...round.propTypes,
  ...gridPosition.propTypes,
  ...cover.propTypes,
  ...responsive.propTypes,
};

export default Image;
