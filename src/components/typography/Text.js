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
  fontFamily,
  textStyle,
  gridColumn,
  gridRow,
  gridArea,
  position,
  zIndex,
  top, left, bottom, right,
} from 'styled-system';

const fullWidth = props => props.fullWidth && 'width: 100%';
const fullHeight = props => props.fullHeight && 'height: 100%';

const Text = styled.div`
  box-sizing: border-box;
  
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
  ${fontFamily}
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
  ...space.propTypes, 
  ...color.propTypes, 
  ...fontSize.propTypes, 
  ...fontFamily.propTypes,
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

  fullWidth: PropTypes.bool,

  fullHeight: PropTypes.bool,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
