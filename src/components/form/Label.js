import styled from 'styled-components';
import Text from '../typography/Text';
import { flexbox } from '../../utils';

const Label = styled(Text).attrs(() => ({ as: 'label' }))({
    display: 'flex',
  },
  flexbox,
);

Label.displayName = 'Label';

Label.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'grayscale.2',
  fontSize: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 'none',
});

export default Label;
