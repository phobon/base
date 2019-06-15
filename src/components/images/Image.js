import styled, { css } from 'styled-components';
import {
  style,
  space,
  layout,
  borderRadius,
  background,
  position,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

import { fullWidth, fullHeight, round, gridPosition } from '../../utils';

const cover = style({
  prop: 'cover',
  cssProperty: 'backgroundSize',
  transformValue: n => n ? 'cover' : 'auto',
});
cover.propTypes = {
  cover: PropTypes.bool,
};

const responsive = props => props.responsive ? css`
  width: 100%;
  height: auto;
` : null;
responsive.propTypes = {
  responsive: PropTypes.bool,
};

const Image = styled.img({
  display: 'block',
},
  space,
  layout,
  borderRadius,
  background,
  position,
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
