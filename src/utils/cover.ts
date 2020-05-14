import { system } from "styled-system";

export interface FullWidthProps {
  fullWidth?: boolean;
}
export const fullWidth = system({
  space: {
    property: 'width',
    transform: n => n ? '100%' : null,
  },
});

export interface FullHeightProps {
  fullHeight?: boolean;
}
export const fullHeight = system({
  space: {
    property: 'height',
    transform: n => n ? '100%' : null,
  },
});

export interface CoverProps {
  cover?: boolean;
}
export const cover = system({
  space: {
    properties: ['width', 'height'],
    transform: n => n ? '100%' : null,
  },
});