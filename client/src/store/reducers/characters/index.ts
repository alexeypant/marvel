import { CharactersState } from '../../types/State';
import { initialState } from './constants';
import { TRequestCharacterAction } from '../../actions/characters/actionCreators';
import { CharactersAction } from '../../actions/characters/CharactersAction';
import { Character } from '../../../types/characters/Character';

export const charactersRequestReducer = (state: CharactersState = initialState, action: TRequestCharacterAction): CharactersState => {
  switch (action.type) {
    case CharactersAction.Request:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CharactersAction.RequestSucceeded:
      const characters: Character[] = action.data ? action.data : [];
      return {
        characters,
        loading: false,
        error: false,
      };
    case CharactersAction.RequestFailed:
      return {
        characters: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
