import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  borderRadius,
  background,
  position,
  SpaceProps, LayoutProps, BorderRadiusProps, BackgroundProps, PositionProps,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  fullWidth, fullHeight, round, gridPosition,
  FullWidthProps, FullHeightProps, RoundProps, GridPositionProps,
} from '../../utils';

const cover = props => props.cover ? { backgroundSize: 'cover' } : { backgroundSize: 'auto' };

const responsive = props => props.responsive ? {
  width: '100%',
  height: 'auto',
} : null;

const imageSystem = compose(space, layout, borderRadius, background, position, fullWidth, fullHeight, round, gridPosition);

export type ImageProps =
  SpaceProps & LayoutProps & BorderRadiusProps & BackgroundProps & PositionProps
  & FullWidthProps & FullHeightProps & RoundProps & GridPositionProps;

export const Image = styled('img').withConfig({
  shouldForwardProp,
})<ImageProps>({
  display: 'block',
},
  imageSystem,
  cover,
  responsive,
);

Image.displayName = 'Image';