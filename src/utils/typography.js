import {
  compose,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
} from 'styled-system';

const typography = compose(
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
);

export default typography;