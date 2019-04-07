import styled from 'styled-components';
import {
  space,
  color,
  alignItems,
  alignSelf,
  display,
  overflow,
  backgroundImage,
  backgroundSize,
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

import { fullWidth, fullHeight, round } from '../../utils';

const Box = styled.div`
  box-sizing: border-box;
  ${display}

  ${borders}
  ${borderRadius}
  ${borderColor}

  ${space}
  ${color}

  ${overflow}

  ${fontSize}

  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${justifySelf}
  ${flexDirection}
  ${flex}
  ${flexWrap}
  ${order}

  ${backgroundImage}
  ${backgroundSize}

  ${gridColumn}
  ${gridRow}
  ${gridArea}

  ${zIndex}

  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}

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
  ...display.propTypes,
  ...overflow.propTypes,
  ...borders.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...fontSize.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...justifyContent.propTypes,
  ...justifySelf.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...order.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,
  ...zIndex.propTypes,
  ...position.propTypes,
  ...top.propTypes,
  ...left.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...whiteSpace.propTypes,
  ...fullWidth.propTypes,
  ...fullHeight.propTypes,
  ...round.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,

  /** Whether container should take up all available width, or not */
  fullWidth: PropTypes.bool,

  /** Whether container should take up all available height, or not */
  fullHeight: PropTypes.bool,

  /** Container is round */
  round: PropTypes.bool,
};

Box.defaultProps = {
  display: 'flex',
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
