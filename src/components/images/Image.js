import styled, { css } from 'styled-components';
import {
  space,
  width,
  height,
  borderRadius,
  gridColumn,
  gridRow,
  gridArea,
  position,
  zIndex,
  top, left, bottom, right,
} from 'styled-system';

import propTypes from 'prop-types';

const responsive = props => props.responsive && css`
  width: 100%;
  height: auto;
`;

const round = props => props.round && css`
  border-radius: 100%;
`;

const Image = styled.img`
  ${space}
  ${width}
  ${height}
  ${borderRadius}

  ${position}
  ${zIndex}
  ${top}
  ${left}
  ${bottom}
  ${right}

  ${responsive}
  ${round}

  ${gridColumn}
  ${gridRow}
  ${gridArea}
`;

Image.displayName = 'Image';

Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,

  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,

  responsive: propTypes.bool,

  round: propTypes.bool,
};

Image.defaultProps = {
  borderRadius: 0,
};

export default Image;
