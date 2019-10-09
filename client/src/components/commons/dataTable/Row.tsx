import React from 'react';
import { TColumn, TData } from './Table';

type Props = {
  columns: TColumn[];
  row: TData;
};

export const Row = ({ columns, row }: Props) => (
    <tr>
      {columns.map((col, index) => <td key={index}>{row[col.key]}</td>)}
    </tr>
);
