import PropTypes from 'prop-types';
import { style, compose } from 'styled-system';
import { css } from 'styled-components';

const fullWidth = style({
  prop: 'fullWidth',
  cssProperty: 'width',
  transformValue: n => n ? '100%' : 'auto',
});
fullWidth.propTypes = {
  fullHeight: PropTypes.bool,
};

const fullHeight = style({
  prop: 'fullHeight',
  cssProperty: 'height',
  transformValue: n => n ? '100%' : 'auto',
});
fullHeight.propTypes = {
  fullHeight: PropTypes.bool,
};

const coverAll = props => props.cover && css`
  width: 100%;
  height: 100%;
`;
coverAll.propTypes = {
  cover: PropTypes.bool,
};

const cover = compose(
  fullWidth,
  fullHeight,
  coverAll,
);

export default cover;