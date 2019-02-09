import React from 'react';
import styled, { css } from 'styled-components';
import { space, width } from 'styled-system';
import PropTypes from 'prop-types';

const showSeparator = props => props.showSeparator ? css`
  border-bottom: 1px dashed ${props.theme.colors.grayscale[5]};
`: css`
  border-bottom: 1px solid transparent;
`;

const StyledTable = styled.table`
  ${space}
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  color: ${props => props.theme.colors.foreground};
  box-sizing: border-box;
  border-bottom: 2px solid ${props => props.theme.colors.grayscale[5]};

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
    background-color: ${props => props.theme.colors.grayscale[6]};

    th {
      font-size: ${props => props.theme.fontSizes[1]}px;
      color: ${props => props.theme.colors.grayscale[2]};
      font-weight: ${props => props.theme.fontWeights.normal};
      white-space: pre;

      padding-top: ${props => props.theme.space[2]}px;
      padding-bottom: ${props => props.theme.space[2]}px;
      padding-right: ${props => props.theme.space[3]}px;

      border-bottom: 2px solid ${props => props.theme.colors.grayscale[5]};

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

        padding-top: ${props => props.theme.space[2]}px;
        padding-bottom: ${props => props.theme.space[2]}px;
        padding-right: ${props => props.theme.space[props.space]}px;

        ${showSeparator}

        &:first-child {
          padding-left: ${props => props.theme.space[3]}px;
        }

        &:last-child {
          padding-right: ${props => props.theme.space[3]}px;
        }
      }

      &:first-child {
        td { 
          padding-top: ${props => props.theme.space[2]}px;
        }
      }

      &:last-child {
        td {
          border-bottom: 0;
          padding-bottom: ${props => props.theme.space[2]}px;
        }
      }
    }
  }
`;

const Col = styled.col`
  ${space}
  ${width}
`;

const Table = ({ id, columns, rows, ...props }) => {  
  const cols = columns.map((c, i) => (
    <Col key={`${id}__col__${i}`} {...c} />
  ));

  const header = columns.map((c, i) => (
    <th
      key={`${id}__header__${i}`}
      className={`${c.type === 'numeric' ? 'cell--numeric' : ''}`}>
      {c.label}
    </th>
  ));

  const rowItems = rows.map(r => {
    const cells = r.cells.map((c, i) => {
      const { fill, truncate, ...rest } = columns[i];
      const cell = 
        `${fill ? 'cell--fill' : ''} 
        ${truncate ? 'cell--truncate': ''} 
        ${r.disabled ? 'cell--disabled': ''}`;
      return (
        <td key={`${r.id}-cell__${i}`} className={cell} style={rest}>
          <span>{c.content}</span>
        </td>
      );
    });

    return (
      <tr>
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
  ...space.propTypes,
  space: PropTypes.number,
  showSeparator: PropTypes.bool,
  columns: PropTypes.object,
  rows: PropTypes.array,
};

Table.defaultProps = {
  showSeparator: true,
  space: 5,
  columns: null,
  rows: null,
};

export default Table;