import { ECharactersRequestActionName } from './ECharactersRequestActionName';
import { Character } from '../../types/Character';

export const requestCharacter = () => {
  return {
    type: ECharactersRequestActionName.Requested,
  };
};

export const requestCharacterSuccess = (characters: Character[]) => {
  return {
    type: ECharactersRequestActionName.RequestedSucceeded,
    data: characters,
  };
};

export const requestCharacterFailed = () => {
  return {
    type: ECharactersRequestActionName.RequestedFailed,
  };
};

export const fetchCharacters = (offset: number) => {
  return {
    offset,
    type: ECharactersRequestActionName.FetchedCharacters,
  };
};

export type TRequestCharacterAction = {
  type: ECharactersRequestActionName;
  data?: Character[];
};

export type FetchCharactersAction = {
  type: ECharactersRequestActionName;
  offset: number;
};
