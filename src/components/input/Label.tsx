import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

import { Text, TextProps } from '../typography/Text';

export interface ILabelProps {
}
export type LabelProps = ILabelProps & FlexboxProps & TextProps & React.HTMLAttributes<HTMLLabelElement>;
export const Label = styled(Text).attrs(() => ({ as: 'label' }))<LabelProps>({
    display: 'flex',
  },
  flexbox,
);

Label.displayName = 'Label';

const defaultProps: any = {
  color: 'grayscale.2',
  fontSize: 1,
  justifyContent: 'center',
  alignItems: 'baseline',
  flex: 'none',
};
Label.defaultProps = defaultProps;
