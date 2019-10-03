import { Character } from '../../types/Character';
import { limit } from '../../store/sagas/characters/constants';
import { CharacterDataWrapper } from '../../types/CharacterDataWrapper';

export class CharactersService {
  private static readonly baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private static readonly apiKey = '4c9674f31e041ad25ef153635461556e';

  public static get(offset: number, nameStartsWith?: string): Promise<Character[]> {
    return fetch(`${CharactersService.baseUrl}${CharactersService.getQueryString(offset, nameStartsWith)}`)
      .then(res => res.json())
      .then((wrapper) => {
        const dataContainer = (wrapper as CharacterDataWrapper).hasOwnProperty('data') ? wrapper.data : null;
        return dataContainer
            ? dataContainer.hasOwnProperty('results') ? dataContainer.results : []
            : [];
      });
  }

  private static getQueryString(offset: number, nameStartsWith?: string): string {
    const limitQuery = `?limit=${limit}`;
    const offsetQuery = nameStartsWith ? '' : `&offset=${offset}`;
    const nameStartsWithQuery = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
    const apiKeyQuery = `&apikey=${CharactersService.apiKey}`;
    return `${limitQuery}${offsetQuery}${nameStartsWithQuery}${apiKeyQuery}`;
  }
}
