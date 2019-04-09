import styled from 'styled-components';
import Text from '../typography/Text';

const Label = styled(Text).attrs(() => ({ as: 'label' }))({
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
});

Label.displayName = 'Label';

Label.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'grayscale.2',
  fontSize: 0,
});

export default Label;
