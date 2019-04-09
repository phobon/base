import { css } from 'styled-components';
import PropTypes from 'prop-types';

const density = props => {
  const densities = {
    compact: css`
      height: 32px;
    `,
    normal: css`
      height: 40px;
    `,
    spacious: css`
      height: 48px;
    `,
  };

  return densities[props.density];
};

density.propTypes = {
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),
};

export default density;