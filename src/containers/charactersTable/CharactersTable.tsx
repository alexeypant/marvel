import React, { useCallback, useEffect, useState } from 'react';
import { fetchCharacters } from '../../store/actions/characters/actionCreators';
import { DataTable } from '../../components/commons';
import { connect } from 'react-redux';
import { columns } from './constants';
import { State } from '../../store/types/State';
import { convertCharacters } from './utils';
import { limit } from '../../store/sagas/characters/constants';
import { TData } from '../../components/commons/dataTable/Table';

type Props = {
  data: TData[];
  handleFetchCharacters: (offset: number) => void;
};

const CharactersTable: React.FC<Props> = ({ data = [], handleFetchCharacters }) => {
  const [offset, setOffset] = useState(0);
  const [isDisabledPrevious, setIsDisabledPrevious] = useState(true);

  useEffect(() => {
    handleFetchCharacters(0);
  }, []);

  const handleClickNext = useCallback(
    () => {
      const nextOffset = offset + limit;
      setOffset(nextOffset);
      setIsDisabledPrevious(false);
      handleFetchCharacters(nextOffset);
    },
    [offset, isDisabledPrevious],
  );

  const handleClickPrevious = useCallback(
    () => {
      const nextOffset = (offset - limit) > 0 ? (offset - limit) : 0;
      if (nextOffset === 0) {
        setIsDisabledPrevious(true);
      }
      setOffset(nextOffset);
      handleFetchCharacters(nextOffset);
    },
    [offset, isDisabledPrevious],
  );

  return (
    data && (
      <div className="App">
        <DataTable
            data={data}
            columns={columns}
            isDisabledPrevious={isDisabledPrevious}
            onNextClick={handleClickNext}
            onPreviousClick={handleClickPrevious}
        />
      </div>
    )
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: convertCharacters(state.characters),
  };
};

export const CharactersTableConnected = connect(mapStateToProps, { handleFetchCharacters: fetchCharacters })(CharactersTable);
