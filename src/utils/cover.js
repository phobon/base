import PropTypes from 'prop-types';
import { style, compose } from 'styled-system';
import { css } from 'styled-components';

const fullWidth = style({
  prop: 'fullWidth',
  cssProperty: 'width',
  transformValue: n => n ? '100%' : 'auto',
});
const fullHeight = style({
  prop: 'fullHeight',
  cssProperty: 'height',
  transformValue: n => n ? '100%' : 'auto',
});
const coverAll = props => props.cover && css`
  width: 100%;
  height: 100%;
`;

const cover = compose(
  fullWidth,
  fullHeight,
  coverAll,
);

cover.propTypes = {
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  cover: PropTypes.bool,
};

export default cover;