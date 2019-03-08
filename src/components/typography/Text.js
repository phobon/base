import styled from 'styled-components';
import PropTypes from 'prop-types';
import { 
  space, 
  color, 
  fontSize, 
  lineHeight, 
  width, 
  height, 
  minWidth, 
  maxWidth, 
  textAlign, 
  fontWeight, 
  textStyle,
  gridColumn,
  gridRow,
  gridArea,
  position,
  zIndex,
  top, left, bottom, right,
  display,
} from 'styled-system';

const fullWidth = props => props.fullWidth && 'width: 100%';
const fullHeight = props => props.fullHeight && 'height: 100%';

const Text = styled.div`
  box-sizing: border-box;
  
  ${display}
  ${space}
  ${width}
  ${height}
  ${minWidth}
  ${maxWidth}
  ${color}
  ${fontSize}
  ${lineHeight}
  ${textAlign}
  ${fontWeight}
  ${textStyle}

  ${position}
  ${zIndex}
  ${top}
  ${bottom}
  ${left}
  ${right}

  ${gridColumn}
  ${gridRow}
  ${gridArea}

  ${fullWidth};
  ${fullHeight};
`;

Text.displayName = 'Text';

Text.propTypes = {
  ...display.propTypes,
  ...space.propTypes, 
  ...color.propTypes, 
  ...fontSize.propTypes, 
  ...lineHeight.propTypes, 
  ...width.propTypes, 
  ...height.propTypes, 
  ...minWidth.propTypes, 
  ...maxWidth.propTypes, 
  ...textAlign.propTypes, 
  ...fontWeight.propTypes, 
  ...textStyle.propTypes, 

  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,

  /** Text contianer should take up all available width */
  fullWidth: PropTypes.bool,

  /** Text container should take up all available height */
  fullHeight: PropTypes.bool,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
