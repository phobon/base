import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Flex from './Flex';

const direction = props => props.scrollDirection === 'vertical' 
  ? css`
    overflow-y: scroll;
    flex-direction: column;
    width: 100%;
  `
  : css`
    overflow-x: scroll;
    height: 100%;
  `;
const childDirection = props => props.scrollDirection === 'vertical'
  ? css`
    flex-direction: column;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  `
  : css`
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  `;
const minimalStyle = props => props.minimal && css`
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: hsla(0, 0%, 0%, 0.4);
    }
  }

  &::-webkit-scrollbar {
    width: ${props.theme.space[1]}px;
  }

  &::-webkit-scrollbar-track {
    background-color: inherit;
    border-radius: ${props.theme.radii[3]}px;
  }

  &::-webkit-scrollbar-thumb {
    transition: background-color 180ms ease-out;
    background-color: hsla(0, 0%, 0%, 0.4);
    border-radius: ${props.theme.radii[3]}px;

    &:hover {
      background-color: hsla(0, 0%, 0%, 0.4);
    }
  }
`;

const ScrollableFlex = styled(Flex)`
  position: relative;
  overflow: hidden;
  ${direction}
  flex: 1 1 0px;

  > div {
    position: absolute;
    
    ${childDirection}
  }

  ${minimalStyle}
`;

const Scrollable = ({ minimal, scrollDirection, children, bg, ...props }) => (
  <ScrollableFlex minimal={minimal} scrollDirection={scrollDirection} bg={bg}>
    <Flex alignItems="flex-start" justifyContent="flex-start" bg={bg} {...props}>
      {children}
    </Flex>
  </ScrollableFlex>
);

Scrollable.displayName = 'Scrollable';

Scrollable.propTypes = {
  ...Flex.propTypes,

  /** Display a minimal scrollable */
  minimal: PropTypes.bool,

  scrollDirection: PropTypes.oneOf(['vertical', 'horizontal']),
};

Scrollable.defaultProps = {
  minimal: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  bg: 'grayscale.8',
  scrollDirection: 'vertical',
};

export default Scrollable;
