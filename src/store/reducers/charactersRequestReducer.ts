import { TRequestCharacterAction } from '../actions/actionCreators';
import { ECharactersRequestActionName } from '../actions/ECharactersRequestActionName';
import { Character } from '../../types/Character';
import { State } from '../types/State';
import { initialState } from './constants';

export const charactersRequestReducer = (state: State = initialState, action: TRequestCharacterAction): State => {
  switch (action.type) {
    case ECharactersRequestActionName.Requested:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ECharactersRequestActionName.RequestedSucceeded:
      const characters: Character[] = action.data ? action.data : [];
      return {
        characters,
        loading: false,
        error: false,
      };
    case ECharactersRequestActionName.RequestedFailed:
      return {
        characters: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
