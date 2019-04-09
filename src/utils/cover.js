import PropTypes from 'prop-types';
import { compose } from 'styled-system';
import { css } from 'styled-components';

const fullWidth = props => props.fullWidth && css`width: 100%;`;
fullWidth.propTypes = {
  fullWidth: PropTypes.bool,
};

const fullHeight = props => props.fullHeight && css`height: 100%;`;
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