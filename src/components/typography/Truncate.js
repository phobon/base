/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

import Text from './Text'
import Flex from '../containers/Flex';

const TruncateFade = styled(Text).attrs({
  background: props => {
    let color = themeGet(`colors.${props.bg}`, 'colors.background')(props);
    if (!color) {
      color = props.bg;
    }
    const fadeStart = color.replace('hsl', 'hsla').replace(')', ', 0)');
    const fadeEnd = fadeStart.replace(', 0)', ', 1)');

    return `linear-gradient(to right, ${fadeStart}, ${fadeEnd} 50%)`;
  },
})`
  position: relative;
  height: ${props => props.lines * props.theme.lineHeights[props.lineHeight]}em;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: ${props => props.theme.lineHeights[props.lineHeight]}em;
    background: ${props => props.background};
  }
`;

const TruncateEllipsis = styled(Text)({
  display: 'block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});
const TruncateContainer = styled(Flex)({
  minWidth: 0,
  maxWidth: '100%',
});

const Truncate = ({ lines, children, ...props }) => lines === 1 ? (
  <TruncateContainer justifyContent="flex-start">
    <TruncateEllipsis {...props}>{children}</TruncateEllipsis>
  </TruncateContainer>
) : (
  <TruncateFade lines={lines} {...props}>
    {children}
  </TruncateFade>
);

Truncate.displayName = 'Truncate';

Truncate.propTypes = {
  /* The number of lines to clamp text length to */
  lines: PropTypes.number,
};

Truncate.defaultProps = {
  lines: 1,
  lineHeight: 4,
};

export default Truncate;
