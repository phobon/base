import PropTypes from 'prop-types';
import { css } from 'styled-components';

const round = props => props.round && css`border-radius: 50%;`;
round.propTypes = {
  round: PropTypes.bool,
};

export default round;