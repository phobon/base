import styled, { css } from 'styled-components';
import {
  space,
  width,
  height,
  borderRadius,
} from 'styled-system';
import propTypes from 'prop-types';

import { round } from '../../utils';

const responsive = props => props.responsive && css`
  width: 100%;
  height: auto;
`;

const Image = styled.img({
  display: 'block',
},
  space,
  width,
  height,
  borderRadius,
  responsive,
  round,
);

Image.displayName = 'Image';

Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,

  /** Image is responsive. */
  responsive: propTypes.bool,

  /** Image is round. */
  round: propTypes.bool,
};

export default Image;
