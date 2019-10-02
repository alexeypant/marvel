import { State } from '../../types/State';
import { initialState } from './constants';
import { TRequestCharacterAction } from '../../actions/characters/actionCreators';
import { Action } from '../../actions/characters/Action';
import { Character } from '../../../types/Character';

export const charactersRequestReducer = (state: State = initialState, action: TRequestCharacterAction): State => {
  switch (action.type) {
    case Action.Requested:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Action.RequestedSucceeded:
      const characters: Character[] = action.data ? action.data : [];
      return {
        characters,
        loading: false,
        error: false,
      };
    case Action.RequestedFailed:
      return {
        characters: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
