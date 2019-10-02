import { Character } from '../../../types/Character';
import { Action } from './Action';

export const requestCharacter = () => {
  return {
    type: Action.Requested,
  };
};

export const requestCharacterSuccess = (characters: Character[]) => {
  return {
    type: Action.RequestedSucceeded,
    data: characters,
  };
};

export const requestCharacterFailed = () => {
  return {
    type: Action.RequestedFailed,
  };
};

export const fetchCharacters = (offset: number) => {
  return {
    offset,
    type: Action.FetchedCharacters,
  };
};

export type TRequestCharacterAction = {
  type: Action;
  data?: Character[];
};

export type FetchCharactersAction = {
  type: Action;
  offset: number;
};
