import React from 'react';
import './Table.css';
import { Row } from './Row';

export type TColumn = {
  title: string,
  dataIndex: string,
  key: string,
};

export type TData = {
  key: string;
  [item: string]: string | number;
};

type Props = {
  data: TData[];
  columns: TColumn[];
};

export const Table = ({ data, columns }: Props) => {
  return (
    <table className="tableContainer">
      <thead>
        <tr>
          {columns.map((col, index) => <td key={index}>{col.title}</td>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((col, index) => <td key={index}>
            <input type="text" name={col.title} placeholder={col.title} />
          </td>)}
        </tr>
        {data.map((row, index) => <Row key={index} columns={columns} row={row}/>)}
      </tbody>
    </table>
  );
};
