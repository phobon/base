import styled from 'styled-components';
import { cover, layout, typography } from '../../utils';

const Text = styled.div({
  boxSizing: 'border-box',
},
  layout,
  typography,
  cover,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...layout.propTypes,
  ...typography.propTypes,
  ...cover.propTypes,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
