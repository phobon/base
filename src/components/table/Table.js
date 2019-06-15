/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import { compose, space, layout, width } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

import { gridPosition } from '../../utils';

const density = props => {
  const densityValues = {
    compact: 1,
    normal: 2,
    spacious: 3,
  };

  const d = densityValues[props.density];

  return css`
    thead {
      th {
        padding-top: ${props.theme.space[d]}px;
        padding-bottom: ${props.theme.space[d]}px;
      }
    }

    tbody {
      tr {
        td {
          padding-top: ${props.theme.space[d]}px;
          padding-bottom: ${props.theme.space[d]}px;
          padding-right: ${props.theme.space[props.horizontalCellPadding]}px;
        }

        &:first-child {
          td { 
            padding-top: ${props.theme.space[d]}px;
          }
        }

        &:last-child {
          td {
            border-bottom: 0;
            padding-bottom: ${props.theme.space[d]}px;
          }
        }
      }
    }
  `;
};

const showSeparator = props => props.showSeparator ? css`
  border-bottom: 1px dashed ${props.theme.colors.grayscale[7]};
`: css`
  border-bottom: 1px solid transparent;
`;

const tableSystem = compose(space, layout, width);

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  color: ${props => props.theme.colors.foreground};
  box-sizing: border-box;
  border-bottom: 2px solid ${props => props.theme.colors.grayscale[7]};

  ${tableSystem}
  ${gridPosition}
  
  th, td {
    vertical-align: top;
    text-align: left;
    box-sizing: border-box;

    &:last-child {
      padding-right: 0;
    }

    &.cell--numeric {
      text-align: right;
    }

    &.cell--fill {
      width: 100%;
    }

    &.cell--truncate {
      position: relative;

      > * {
        position: absolute;
        left: 0;
        right: ${props => props.theme.space[3]}px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    &.cell--disabled {
      opacity: 0.3;
    }
  }

  thead {
    th {
      font-size: ${props => props.theme.fontSizes[1]}px;
      color: ${props => props.theme.colors.grayscale[2]};
      font-weight: ${props => props.theme.fontWeights.normal};
      white-space: pre;
      background-color: ${props => props.theme.colors.grayscale[8]};

      padding-right: ${props => props.theme.space[3]}px;

      border-bottom: 2px solid ${props => props.theme.colors.grayscale[7]};

      &:first-child {
        padding-left: ${props => props.theme.space[3]}px;
        border-radius: ${props => props.theme.radii[3]}px 0 0 0;
      }

      &:last-child {
        padding-right: ${props => props.theme.space[3]}px;
        border-radius: 0 ${props => props.theme.radii[3]}px 0 0;
      }
    }
  }

  tbody {
    tr {
      td {
        text-align: left;

        ${showSeparator}

        &:first-child {
          padding-left: ${props => props.theme.space[3]}px;
        }

        &:last-child {
          padding-right: ${props => props.theme.space[3]}px;
        }
      }
    }
  }

  ${density}
`;

const Col = styled('col')(
  width, space,
);

const Table = ({ id, columns, rows, ...props }) => {  
  const cols = columns.map(({ fill, truncate, ...rest }, i) => (
    <Col key={`${id}__col__${i}`} {...rest} />
  ));

  const header = columns.map((c, i) => (
    <th
      key={`${id}__header__${i}`}
      className={`${c.type === 'numeric' ? 'cell--numeric' : ''}`}>
      {c.label}
    </th>
  ));

  const rowItems = rows.map((r, rowIndex) => {
    const cells = r.cells.map((c, cellIndex) => {
      const { fill, truncate, ...rest } = columns[cellIndex];
      const cell = 
        `${fill ? 'cell--fill' : ''} 
        ${truncate ? 'cell--truncate': ''} 
        ${r.disabled ? 'cell--disabled': ''}`;
      return (
        <td key={`${r.id}-cell__${cellIndex}`} className={cell} style={rest}>
          <span>{c.content}</span>
        </td>
      );
    });

    return (
      <tr key={`${r.id}-row__${rowIndex}`}>
        {cells}
      </tr>
    )
  });

  return (
    <StyledTable {...props}>
      <colgroup>
        {cols}
      </colgroup>
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
      <tbody>
        {rowItems}
      </tbody>
    </StyledTable>
  );
};

Table.displayName = 'Table';

Table.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,

  /** Optional identifier */
  id: PropTypes.node,

  /** Horizontal padding */
  horizontalCellPadding: PropTypes.number,

  /** Whether to show a separator between rows, or not */
  showSeparator: PropTypes.bool,

  /** Columns to display in this table */
  columns: PropTypes.array,

  /** Rows to display in this table */
  rows: PropTypes.array,

  /** Information density */
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),
};

Table.defaultProps = {
  id: Math.random() * 100,
  showSeparator: true,
  horizontalCellPadding: 5,
  columns: null,
  rows: null,
  density: 'normal',
};

export default Table;