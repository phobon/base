import PropTypes from 'prop-types';

const round = props => props.round ? { borderRadius: '50%' } : null;
round.propTypes = {
  round: PropTypes.bool,
};

export default round;