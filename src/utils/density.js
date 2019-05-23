import { style } from 'styled-system';
import PropTypes from 'prop-types';

const density = style({
  prop: 'density',
  cssProperty: 'height',
  key: 'densities',
  transformValue: n => `${n}px`,
  scale: {
    compact: 32,
    normal: 40,
    spacious: 48,
  },
})

density.propTypes = {
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),
};

export default density;