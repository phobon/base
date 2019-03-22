import { css } from 'styled-components';

const informationDensity = (density) => {
  const densities = {
    compact: 32,
    normal: 40,
    spacious: 48,
  };

  return densities[density];
};

const fullWidth = props => props.fullWidth && css`width: 100%;`;
const fullHeight = props => props.fullHeight && css`height: 100%;`;
const round = props => props.round && css`border-radius: 100%;`;

export { informationDensity, fullWidth, fullHeight, round };