/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';

import Box from './Box';
import { destructureLayoutProps } from '../../utils';

const scrollDirectionProps = ({ scrollDirection }) => {
  const scrollDirections = {
    'vertical': {
      overflowY: 'scroll',
      flexDirection: 'column',
      '> div': {
        position: 'absolute',
        flexDirection: 'column',
        top: 0,
        left: 0,
        right: 0,
      },
    },
    'horizontal': {
      overflowX: 'scroll',
      '> div': {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
      },
    },
  };

  return scrollDirections[scrollDirection];
};

const minimalStyle = ({ minimal, ...props }) => {
  if (minimal) {
    const color = themeGet(`colors.${props.scrollbarColor}`)(props) || props.scrollbarColor;
    return css`
      &:hover {
        &::-webkit-scrollbar-thumb {
          background-color: ${color};
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
        background-color: ${color};
        border-radius: ${props.theme.radii[3]}px;

        &:hover {
          background-color: ${color};
        }
      }
    `;
  }

  return null;
};

const Container = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
  },
  scrollDirectionProps,
  minimalStyle,
);

const Scrollable = ({ minimal, scrollDirection, scrollbarColor, children, ...props }) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  const { width, height, fullWidth, fullHeight, flex, ...rest } = layoutProps;
  const containerProps = {
    width, height, fullWidth, fullHeight, flex,
  };

  return (
    <Container
      minimal={minimal}
      scrollDirection={scrollDirection}
      scrollbarColor={scrollbarColor}
      {...containerProps}>
      <Box flex={1} alignItems="flex-start" justifyContent="flex-start" {...passthroughProps} {...rest}>
        {children}
      </Box>
    </Container>
  );
};

Scrollable.displayName = 'Scrollable';

Scrollable.propTypes = {
  ...Box.propTypes,

  /** Display a minimal scrollable */
  minimal: PropTypes.bool,

  scrollDirection: PropTypes.oneOf(['vertical', 'horizontal']),

  scrollbarColor: PropTypes.string,
};

Scrollable.defaultProps = {
  minimal: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  scrollDirection: 'vertical',

  scrollbarColor: 'hsla(0, 0%, 0%, 0.4)',

  width: 'inherit',
  height: 'inherit',
};

export default Scrollable;
