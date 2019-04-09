import {
  compose,
  alignItems,
  alignSelf,
  justifyContent,
  flex,
  flexDirection,
  order,
} from 'styled-system';

const flexbox = compose(
  flex,
  flexDirection,
  order,
  alignItems,
  justifyContent,
  alignSelf,
);

export default flexbox;
