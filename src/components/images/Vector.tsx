import styled from 'styled-components';

import { paint, PaintProps } from '../../utils';

import { Image, ImageProps } from './Image';

interface IVectorProps {
  viewBox?: string;
}
export type VectorProps = IVectorProps & PaintProps & ImageProps;

export const Vector = styled(Image).attrs(() => ({
  as: 'svg',
  xmlns: 'http://www.w3.org/2000/svg',
}))<VectorProps>(paint);

Vector.displayName = 'Vector';

const defaultProps: VectorProps = {
  fill: 'foreground',
  stroke: 'none',
};
Vector.defaultProps = defaultProps;