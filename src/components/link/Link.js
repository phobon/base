import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../typography';
import { focus } from '../../utils';

const Link = styled(Text).attrs(() => ({ as: 'a' }),
  focus,
)(
  ({ clean, theme }) => ({
    textDecoration: clean ? 'none' : 'underline dashed',
    position: 'relative',
    borderRadius: theme.radii[3],
    '&:hover': {
      color: theme.colors.accent[3],
      textDecoration: 'underline',
    },
    '&:visited, &:focus': {
      textDecoration: 'none',
    },
  }),
);

Link.displayName = 'Link';

Link.propTypes = {
  ...Text.propTypes,

  /** Represents a link with text-decoration removed. */
  clean: PropTypes.bool,

  /** Represents an active link. */
  active: PropTypes.bool,
};

Link.defaultProps = {
  ...Text.defaultProps,
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false,
};

export default Link;
