import { css } from 'styled-components';

const focus = props => css`
  &:focus {
    outline: 0;

    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      content: "";
      box-shadow: 0 0 0 2px ${props.theme.colors.guidance.focus};
      border-radius: inherit;
      pointer-events: none;
      z-index: 1;
    }
  }
`;

export default focus;