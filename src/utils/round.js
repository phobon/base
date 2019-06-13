import PropTypes from 'prop-types';
import { style } from 'styled-system';

const round = style({
  prop: 'round',
  cssProperty: 'borderRadius',
  transformValue: n => n ? '50%' : 'initial',
});

round.propTypes = {
  round: PropTypes.bool,
};

export default round;