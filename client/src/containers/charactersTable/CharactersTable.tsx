import React, { useCallback, useEffect, useState } from 'react';
import { DataTable } from '../../components/commons';
import { connect } from 'react-redux';
import { columns } from './constants';
import { State } from '../../store/types/State';
import { limit } from '../../store/sagas/characters/constants';
import { TData } from '../../components/commons/dataTable/Table';
import { convertCharacters } from './utils';
import { fetchCharacters, fetchCharactersNameStartWith } from '../../store/actions/characters/actionCreators';
import { CharacterAttribute } from '../../enums/CharacterAttribute';

type Props = {
  data: TData[];
  handleFetchCharacters: (offset: number, nameStartsWith?: string) => void;
  handleFetchCharactersNameStartWith: (offset: number, nameStartsWith?: string) => void;
};

const CharactersTable: React.FC<Props> = ({ data = [], handleFetchCharacters, handleFetchCharactersNameStartWith }) => {
  const [offset, setOffset] = useState(0);
  const [isDisabledPrevious, setIsDisabledPrevious] = useState(true);

  useEffect(() => {
    handleFetchCharacters(0);
  }, [handleFetchCharacters]);

  const handleClickNext = useCallback(
    () => {
      const nextOffset = offset + limit;
      setOffset(nextOffset);
      setIsDisabledPrevious(false);
      handleFetchCharacters(nextOffset);
    },
    [offset, setOffset, setIsDisabledPrevious, handleFetchCharacters],
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
    [offset, setIsDisabledPrevious, setOffset, handleFetchCharacters],
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name === CharacterAttribute.name) {
      const nameStartsWith = target.value.trim();
      if (nameStartsWith.length > 0) {
        setOffset(0);
        handleFetchCharactersNameStartWith(0, nameStartsWith);
      } else {
        handleFetchCharactersNameStartWith(0);
      }
    }
  };

  return (
    data && (
      <div className="App">
        <DataTable
            data={data}
            columns={columns}
            isDisabledPrevious={isDisabledPrevious}
            onNextClick={handleClickNext}
            onPreviousClick={handleClickPrevious}
            onSearchInputChange={handleChange}
        />
      </div>
    )
  );
};

const mapStateToProps = (state: State) => {
  return {
    data: convertCharacters(state.characters.characters),
  };
};

export const CharactersTableConnected = connect(mapStateToProps,
  {
    handleFetchCharacters: fetchCharacters,
    handleFetchCharactersNameStartWith: fetchCharactersNameStartWith,
  })(CharactersTable);
