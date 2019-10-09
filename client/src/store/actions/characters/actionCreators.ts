import { Character } from '../../../types/Character';
import { CharactersAction } from './CharactersAction';

export const requestCharacter = () => {
  return {
    type: CharactersAction.Request,
  };
};

export const requestCharacterSuccess = (characters: Character[]) => {
  return {
    type: CharactersAction.RequestSucceeded,
    data: characters,
  };
};

export const requestCharacterFailed = () => {
  return {
    type: CharactersAction.RequestFailed,
  };
};

export const fetchCharacters = (offset: number, nameStartsWith?: string) => {
  return {
    offset,
    nameStartsWith,
    type: CharactersAction.Fetch,
  };
};

export const fetchCharactersNameStartWith = (offset: number, nameStartsWith?: string) => {
  return {
    offset,
    nameStartsWith,
    type: CharactersAction.FetchNameStartsWith,
  };
};

export const debouncedFetch = (action: FetchCharactersAction) => {
  return {
    ...action,
    type: CharactersAction.DebouncedFetch,
  };
};

export type TRequestCharacterAction = {
  type: CharactersAction;
  data?: Character[];
};

export type FetchCharactersAction = {
  type: CharactersAction;
  offset: number;
  nameStartsWith?: string;
};
