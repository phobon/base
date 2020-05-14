import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, BoxProps } from './Box';
import { destructureLayoutProps } from '../../utils';

const scrollDirectionProps = ({ scrollDirection = 'vertical' }) => {
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

const minimalStyle = ({ minimal = false, ...props }) => {
  if (minimal) {
    const color = themeGet(`colors.${props.scrollbarColor}`)(props) || props.scrollbarColor;
    return {
      '&:hover': {
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: color,
        },
      },
      '&::-webkit-scrollbar': {
        width: props.theme.space[1],
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'inherit',
        borderRadius: props.theme.radii[3],
      },
      '&::-webkit-scrollbar-thumb': {
        transition: 'background-color 180ms ease-out',
        backgroundColor: color,
        borderRadius: props.theme.radii[3],

        '&:hover': {
          backgroundColor: color,
        }
      }
    }
  }

  return null;
};

interface IScrollableProps {
  minimal?: boolean;
  scrollDirection?: 'vertical' | 'horizontal';
  scrollbarColor?: string;
}
type ScrollableProps = IScrollableProps & BoxProps;

const Container = styled(Box)<ScrollableProps>({
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifycontent: 'flex-start',
  },
  scrollDirectionProps,
  minimalStyle,
);

export const Scrollable: FunctionComponent<ScrollableProps> = ({ minimal, scrollDirection, scrollbarColor, children, ...props }) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  const { width, height, fullWidth, fullHeight, flex, gridArea, ...rest } = layoutProps;
  const containerProps = {
    width, height, fullWidth, fullHeight, flex, gridArea, 
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

const defaultProps: ScrollableProps = {
  minimal: false,
  scrollDirection: 'vertical',
  scrollbarColor: 'hsla(0, 0%, 0%, 0.4)',
  flex: 1,
  width: 'inherit',
  height: 'inherit',
}

Scrollable.defaultProps = defaultProps;
