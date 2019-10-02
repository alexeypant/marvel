import { Character } from '../../types/Character';
import { limit } from '../../store/sagas/characters/constants';
import { CharacterDataWrapper } from '../../types/CharacterDataWrapper';

export class CharactersService {
  private static readonly baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private static readonly apiKey = '4c9674f31e041ad25ef153635461556e';

  public static get(offset: number): Promise<Character[]> {
    return fetch(`${this.baseUrl}?limit=${limit}&offset=${offset}&apikey=${this.apiKey}`)
      .then(res => res.json())
      .then((wrapper) => {
        const dataContainer = (wrapper as CharacterDataWrapper).hasOwnProperty('data') ? wrapper.data : null;
        return dataContainer
            ? dataContainer.hasOwnProperty('results') ? dataContainer.results : []
            : [];
      });
  }
}
