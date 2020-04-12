import styled from 'styled-components';

import { paint } from '../../utils';

import Image from './Image';

const Vector = styled(Image).attrs(() => ({
  as: 'svg',
  xmlns: 'http://www.w3.org/2000/svg',
}))(paint);

Vector.defaultProps = {
  fill: 'foreground',
  stroke: 'none',
};

Vector.displayName = 'Vector';

export default Vector;
