import styled, { css } from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { cover, gridPosition } from '../../utils';

const textSystem = compose(space, color, layout, typography, position, textStyle);

// Box clips are based on lineHeights, in theory they should be the same as far as em values are concerned.
const boxClips = {
  0: 0.266,
  1: 0.387,
  2: 0.517,
  3: 0.665,
  4: 0.765,
};

const translates = {
  0: 0.088,
  1: 0.148,
  2: 0.215,
  3: 0.295,
  4: 0.340,
};

const translate = props => css`
  transform: translateY(${translates[props.lineHeight]}em);
  &:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -${boxClips[props.lineHeight]}em;
  }
`;

const Text = styled.span({
  boxSizing: 'border-box',
  display: 'block',
},
  textSystem,
  cover,
  gridPosition,
  translate,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.position,
  ...propTypes.textStyle,
  ...cover.propTypes,
  ...gridPosition.propTypes,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
