import styled, { css } from 'styled-components';
import {
  space,
  color,
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
  flexDirection,
  flex,
  flexWrap,
  order,
  fontSize,
  borderRadius,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  borders,
  borderColor,
  zIndex,
  position,
  gridColumn,
  gridRow,
  gridArea,
  top, left, bottom, right,
} from 'styled-system';
import PropTypes from 'prop-types';

const fullWidth = props => props.fullWidth && css`width: 100%;`;
const fullHeight = props => props.fullHeight && css`height: 100%;`;

const round = props => props.round && css`border-radius: 100%;`;

const Box = styled.div`
  display: flex;
  box-sizing: border-box;

  ${borders}
  ${borderRadius}
  ${borderColor}

  ${space}
  ${color}

  ${fontSize}

  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${justifySelf}
  ${flexDirection}
  ${flex}
  ${flexWrap}
  ${order}

  ${gridColumn}
  ${gridRow}
  ${gridArea}

  ${zIndex}

  ${position}

  ${fullWidth}
  ${fullHeight}

  ${round}

  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}

  ${position}
  ${zIndex}
  ${top}
  ${left}
  ${bottom}
  ${right}
`;

Box.displayName = 'Box';

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...justifyContent.propTypes,
  ...justifySelf.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...order.propTypes,
  ...fontSize.propTypes,
  ...borderRadius.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...zIndex.propTypes,
  ...position.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,
  ...top.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...right.propTypes,

  fullWidth: PropTypes.bool,

  fullHeight: PropTypes.bool,

  round: PropTypes.bool,
};

Box.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  m: 0,
  p: 0,
  color: 'foreground',
  fullWidth: false,
  fullHeight: false,
  borderRadius: 0,
};

export default Box;
