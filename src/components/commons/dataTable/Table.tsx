import React from 'react';
import './Table.css';
import { Row } from '..';

type TColumn = {
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
  const headers = columns.map(col => col.title);
  const rowsCells = data.map(dataItem => columns.map(coll => dataItem[coll.key]));
  return (
    <table className="tableContainer">
      <thead>
        <Row cells={headers}/>
      </thead>
      <tbody>
        {rowsCells.map(row => <Row key={row[0]} cells={row}/>)}
      </tbody>
    </table>
  );
};
