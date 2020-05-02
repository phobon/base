import PropTypes from 'prop-types';

const density = props => {
  const densities = {
    compact: {
      height: 32,
    },
    normal: {
      height: 40,
    },
    spacious: {
      height: 48,
    },
  };

  return densities[props.density];
};
density.propTypes = {
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),
};

export default density;