import { system } from 'styled-system';

export interface RoundProps {
  round?: boolean;
}
export const round = system({
  space: {
    property: 'borderRadius',
    transform: n => n ? '50%' : null,
  },
});