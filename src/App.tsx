import React from 'react';
import './App.css';
import {CharactersTable} from "./CorePackage/TableModule/components/CharactersTable";

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mary',
    age: 52,
    address: '30 Downing Street',
  },
  {
    key: '4',
    name: 'Caty',
    age: 25,
    address: '14 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <CharactersTable data={dataSource} columns={columns} onNextClick={() => {}} onPreviousClick={()=>{}}/>
    </div>
  );
};

export default App;
