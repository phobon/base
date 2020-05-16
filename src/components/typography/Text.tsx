import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  PositionProps,
  TextStyleProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { cover, gridPosition, CoverProps, GridPositionProps } from '../../utils';

const textSystem = compose(space, color, layout, typography, position, textStyle, gridPosition, cover);

interface ITextProps { }
export type TextProps =
  ITextProps
  & SpaceProps
  & ColorProps
  & LayoutProps
  & TypographyProps
  & PositionProps
  & TextStyleProps
  & CoverProps
  & GridPositionProps;
export const Text = styled('span').withConfig({ shouldForwardProp })<TextProps>({
  boxSizing: 'border-box',
  display: 'block',
},
  textSystem,
);

Text.displayName = 'Text';

const defaultProps: TextProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};
Text.defaultProps = defaultProps;
