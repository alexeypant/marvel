import React  from 'react';

import "./CharactersTable.css";
import {Table} from "./Table";

type TColumn = {
    title: string,
    dataIndex: string,
    key: string,
}

type TData = {
    key: string;
    [item: string]: string|number;
}

type Props = {
    data: TData[];
    columns: TColumn[];
    onNextClick: () => void;
    onPreviousClick: () => void;
}

export const CharactersTable = ({ data, columns, onNextClick, onPreviousClick}: Props) => (
    <div className="container">
        <div className="table">
            <Table data={data} columns={columns}/>
        </div>
        <div className="buttonsGroup">
            <button onClick={onPreviousClick}>Prev.</button>
            <button onClick={onNextClick}>Next</button>
        </div>
    </div>
);

