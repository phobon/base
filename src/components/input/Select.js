
import React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';
import { Box } from '../containers';
import { destructureLayoutProps } from '../../utils';

const SelectInput = styled(TextInput).attrs(() => ({ as: 'select' }))`
  -webkit-appearance: none;
  min-width: 150px;
`;

const SelectContainer = styled(Box)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 4px;
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMinYMid' fill='hsl(216, 6%, 49%)' %3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/%3E%3C/svg%3E");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
  }
`;

const Select = (props) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);
  return (
    <SelectContainer {...layoutProps}>
      <SelectInput fullWidth {...passthroughProps} />
    </SelectContainer>
  );
};

Select.displayName = 'Select';

export default Select;
 