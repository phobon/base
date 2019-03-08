import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Image from './Image';

const Vector = styled(Image).attrs(() => ({
  as: 'svg',
  xmlns: 'http://www.w3.org/2000/svg',
}))`
  fill: ${props => themeGet(`colors.${props.color}`, '#FFF')};
`;

Vector.defaultProps = {
  color: 'foreground',
};

Vector.displayName = 'Vector';

export default Vector;
