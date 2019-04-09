import {
  compose,
  fontSize,
  lineHeight,
  textAlign,
  textStyle,
} from 'styled-system';

const typography = compose(
  fontSize,
  lineHeight,
  textAlign,
  textStyle,
);

export default typography;