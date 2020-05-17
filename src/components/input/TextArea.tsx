import styled from 'styled-components';
import { height, HeightProps } from 'styled-system';

import { Input, InputProps } from './Input';

export type TextAreaProps = InputProps & HeightProps;
export const TextArea = styled(Input).attrs(() => ({ as: 'textarea' }))<TextAreaProps>(
  ({ theme }) => ({
    minHeight: theme.space[5],
  }),
  height,
);

TextArea.displayName = 'TextArea';

const defaultProps: any = {
  height: 'auto',
  py: 2,
};
TextArea.defaultProps = defaultProps;
