import React, { useState } from 'react';
import Copy from '../copy/copy';
import SortButtons from '../sort-button/sort-button';
import Checkbox from '../checkbox/checkbox';
import TableSkeleton from './table-skeleton';


const CustomDataGrid = ({ columns, rows = [], showCheckbox = true, showCopy = true, isLoading }: any) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);

  // const handleSelectAll = (event: any) => {
  //   if (event.target.checked) {
  //     setSelectedRows(rows.map((row: any) => row.id));
  //   } else {
  //     setSelectedRows([]);
  //   }
  // };

  const handleSelectRow = (event: any, rowId: any) => {
    if (event.target.checked) {
      setSelectedRows((prevSelectedRows: any) => [...prevSelectedRows, rowId]);
    } else {
      setSelectedRows((prevSelectedRows: any) =>
        prevSelectedRows.filter((id: any) => id !== rowId)
      );
    }
  };

  const handleCellClick = (row: any, column: any) => {
    if (column.onClick) {
      column.onClick(row);
    }
  };

  const renderCellContent = (value: any) => {
    if (React.isValidElement(value)) {
      return value;
    }
    return value;
  };

  return (
    <div className="datagrid-container">
      <table className="datagrid-table">
        <thead>
          <tr>
            {/* TODO: Adjust css to align correctly the checkbox button */}
            {showCheckbox && (
              <th style={{ width: "5%" }}>
                {/* <Checkbox
                  checked={selectedRows.length === rows.length}
                  onChange={handleSelectAll}
                /> */}
              </th>
            )}
            {columns.map((col: any) => (
              <th style={col.style} key={col.field}>
                <div className='th-content'>
                  <span>{col.field}</span>
                  <SortButtons field={col.field} />
                </div>
              </th>
            ))}
            {showCopy && <th style={{ width: "5%" }}></th>}
          </tr>
        </thead>
        {isLoading ? (
          <TableSkeleton rows={10} />
        ) : (
          <tbody>
            {rows.map((row: any) => (
              <tr
                key={row.id}
                className={selectedRows.includes(row.id) ? 'selected-tr' : ""}
              >
                {showCheckbox && (
                  <td>
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onChange={(event: any) => handleSelectRow(event, row.id)}
                    />
                  </td>
                )}
                {columns.map((col: any) => (
                  <td
                    style={{ cursor: col?.onClick ? 'pointer' : 'inherit' }}
                    key={col.field}
                    onClick={() => handleCellClick(row, col)}
                  >
                    {renderCellContent(row[col.field])}
                  </td>
                ))}
                {showCopy && (
                  <td>
                    <Copy value={row} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CustomDataGrid;