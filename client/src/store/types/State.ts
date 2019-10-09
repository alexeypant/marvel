import { Character } from '../../types/Character';

export type State = {
  characters: Character[];
  loading: boolean;
  error: boolean;
};
