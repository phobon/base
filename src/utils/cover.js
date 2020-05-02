import PropTypes from 'prop-types';

export const fullWidth = props => props.fullWidth ? { width: '100%' } : null;
fullWidth.propTypes = { 
  fullWidth: PropTypes.bool,
};

export const fullHeight = props => props.fullHeight ? { height: '100%' } : null;
fullHeight.propTypes = { 
  fullHeight: PropTypes.bool,
};

export const cover = props => props.cover ? { width: '100%', height: '100%' } : null;
cover.propTypes = {
  cover: PropTypes.bool,
};