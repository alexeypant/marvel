import React  from 'react';

type TCellValue = string|number;

type Props = {
    cells: TCellValue[];
};

export const Row = ({ cells }: Props) => (
    <tr>
        {cells.map((cell, index) => <td key={index}>{cell}</td>)}
    </tr>
);
