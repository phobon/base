import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

import { Text, TextProps } from '../typography/Text';

interface ILabelProps {
}
export type LabelProps = ILabelProps & FlexboxProps & TextProps;
export const Label = styled(Text).attrs(() => ({ as: 'label' }))<LabelProps>({
    display: 'flex',
  },
  flexbox,
);

Label.displayName = 'Label';

const defaultProps: LabelProps = {
  color: 'grayscale.2',
  fontSize: 1,
  justifyContent: 'center',
  alignItems: 'baseline',
  flex: 'none',
};
Label.defaultProps = defaultProps;
