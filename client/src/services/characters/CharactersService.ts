import { limit } from '../../store/sagas/characters/constants';
import { CharacterDataWrapper } from '../../types/characters/CharacterDataWrapper';
import { Character } from '../../types/characters/Character';
import { HTTPService } from '../http/HTTPService';

export class CharactersService {
  static request(offset: number, nameStartsWith?: string): Promise<Response> {
    CharactersService.abortController = new AbortController();
    CharactersService.fetchingInProgress = true;
    const url = `${CharactersService.baseUrl}${CharactersService.getQueryString(offset, nameStartsWith)}`;
    const abortSignal = CharactersService.abortController.signal;
    return HTTPService.get(url, abortSignal);
  }

  static async parseJson(response: Response): Promise<CharacterDataWrapper> {
    return response.json();
  }

  static async unwrapCharacters(wrapper: CharacterDataWrapper = {}): Promise<Character[]> {
    const dataContainer = (wrapper as CharacterDataWrapper).hasOwnProperty('data') ? wrapper.data : null;
    return dataContainer
      ? dataContainer.hasOwnProperty('results')
        ? dataContainer.results as Character[]
        : []
      : [];
  }

  static async handleError(error: Error): Promise<void> {
    if (error.name === 'AbortError') {
      console.log('fetch request was aborted');
    }
  }

  static async handleFinally(): Promise<void> {
    CharactersService.fetchingInProgress = false;
  }

  static isFetching(): boolean {
    return CharactersService.fetchingInProgress;
  }

  static abort() {
    CharactersService.abortController.abort();
  }

  private static readonly baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private static readonly apiKey = '4c9674f31e041ad25ef153635461556e';
  private static fetchingInProgress = false;
  private static abortController: AbortController;

  private static getQueryString(offset: number, nameStartsWith?: string): string {
    const limitQuery = `?limit=${limit}`;
    const offsetQuery = nameStartsWith ? '' : `&offset=${offset}`;
    const nameStartsWithQuery = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
    const apiKeyQuery = `&apikey=${CharactersService.apiKey}`;
    return `${limitQuery}${offsetQuery}${nameStartsWithQuery}${apiKeyQuery}`;
  }
}
