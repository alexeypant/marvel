import React from 'react';
import './Table.css';
import { Row } from './Row';

export type TColumn = {
  title: string,
  dataIndex: string,
  key: string,
  isSearchDisabled: boolean,
};

export type TData = {
  key: string;
  [item: string]: string | number;
};

type Props = {
  data: TData[];
  columns: TColumn[];
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Table = ({ data, columns, onSearchInputChange }: Props) => {
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
            <input type="text" name={col.key} placeholder={col.title} disabled={col.isSearchDisabled} onChange={onSearchInputChange}/>
          </td>)}
        </tr>
        {data.map((row, index) => <Row key={index} columns={columns} row={row}/>)}
        </tbody>
      </table>
  );
};
