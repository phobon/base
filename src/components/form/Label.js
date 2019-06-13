import styled from 'styled-components';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import Text from '../typography/Text';

const Label = styled(Text).attrs(() => ({ as: 'label' }))({
    display: 'flex',
  },
  flexbox,
);

Label.displayName = 'Label';

Label.propTypes = {
  ...Text.propTypes,
  ...propTypes.flexbox,
};

Label.defaultProps = {
  ...Text.defaultProps,

  color: 'grayscale.2',
  fontSize: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 'none',
};

export default Label;
