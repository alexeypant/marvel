import React  from 'react';
import {Row} from "./Row";

import "./Table.css";

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
};

export const Table = ({ data, columns}: Props) => {
    const headers = columns.map(col => col.title);

    return (
        <table className="tableContainer">
            <thead>
              <Row cells={headers} />
            </thead>
            <tbody>
            {data.map(dataItem => {
                const cells = columns.map(coll => dataItem[coll.key]);
                return (
                    <Row key={dataItem.key} cells={cells} />
                );
            })}
            </tbody>
        </table>
    );
};
