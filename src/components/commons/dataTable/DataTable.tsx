import React from 'react';
import './DataTable.css';
import { Table, TData } from './Table';

type TColumn = {
  title: string,
  dataIndex: string,
  key: string,
};

type Props = {
  data: TData[];
  columns: TColumn[];
  isDisabledPrevious: boolean;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

export const DataTable = ({ data, columns, isDisabledPrevious, onNextClick, onPreviousClick }: Props) => (
    <div className="container">
      <div className="table">
        <Table data={data} columns={columns}/>
      </div>
      <div className="buttonsGroup">
        <button onClick={onPreviousClick} disabled={isDisabledPrevious}>Prev.</button>
        <button onClick={onNextClick}>Next</button>
      </div>
    </div>
);
