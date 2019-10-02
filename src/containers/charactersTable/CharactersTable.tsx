import React, { useCallback, useEffect, useState } from 'react';
import { fetchCharacters } from '../../store/actions/actionCreators';
import { DataTable } from '../../components/commons';
import { connect } from 'react-redux';
import { columns } from './constants';
import { State } from '../../store/types/State';
import { Character } from '../../types/Character';
import { convertCharactersToTableData } from './convertCharactersToTableData';
import { limit } from '../../store/sagas/constants';

type Props = {
  characters: Character[] | null;
  handleFetchCharacters: (offset: number) => void;
};

const CharactersTable: React.FC<Props> = ({ characters, handleFetchCharacters }) => {
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
    characters && (
      <div className="App">
        <DataTable
            data={convertCharactersToTableData(characters)}
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
    characters: state.characters.length > 0 ? state.characters : null,
  };
};

export const CharactersTableConnected = connect(mapStateToProps, { handleFetchCharacters: fetchCharacters })(CharactersTable);
