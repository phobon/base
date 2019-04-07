import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Text';

const defaultProps = {
  color: 'grayscale.1',
  m: 0,
  fontWeight: 'light',
  lineHeight: 0,
  fontSize: [6, 8],
  textAlign: 'left',
};

const H1 = styled(Text).attrs(() => ({ as: 'h1' }))``;
H1.displayName = 'Heading.H1';
H1.defaultProps = defaultProps;

const H2 = styled(Text).attrs(() => ({ as: 'h2' }))``;
H2.displayName = 'Heading.H2';
H2.defaultProps = Object.assign({}, defaultProps, {
  fontSize: [5, 7],
  lineHeight: 1,
});

const H3 = styled(Text).attrs(() => ({ as: 'h3' }))``;
H3.displayName = 'Heading.H3';
H3.defaultProps = Object.assign({}, defaultProps, {
  fontSize: [4, 6],
  lineHeight: 1,
});

const H4 = styled(Text).attrs(() => ({ as: 'h4' }))``;
H4.displayName = 'Heading.H4';
H4.defaultProps = Object.assign({}, defaultProps, {
  fontSize: [3, 5],
  lineHeight: 2,
});

const H5 = styled(Text).attrs(() => ({ as: 'h5' }))``;
H5.displayName = 'Heading.H5';
H5.defaultProps = Object.assign({}, defaultProps, {
  fontSize: [2, 4],
  lineHeight: 3,
});

const H6 = styled(Text).attrs(() => ({ as: 'h6' }))``;
H6.displayName = 'Heading.H6';
H6.defaultProps = Object.assign({}, defaultProps, {
  fontSize: [2, 3],
  lineHeight: 4,
});

const Heading = ({ children, ...props }) => (
  <H3 {...props}>{children}</H3>
);

Heading.propTypes = {
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

export default Heading;