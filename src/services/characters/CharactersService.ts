import { limit } from '../../store/sagas/characters/constants';
import { CharacterDataWrapper } from '../../types/CharacterDataWrapper';

export class CharactersService {
  public static get(offset: number, nameStartsWith?: string): Promise<any> {
    CharactersService.abortController = new AbortController();
    CharactersService.fetchingInProgress = true;
    return fetch(`${CharactersService.baseUrl}${CharactersService.getQueryString(offset, nameStartsWith)}`, {
      signal: CharactersService.abortController.signal,
    });
  }

  public static async handleJson(response: any): Promise<any> {
    return response.json();
  }

  public static isFetching(): boolean {
    return CharactersService.fetchingInProgress;
  }

  public static abort() {
    CharactersService.abortController.abort();
  }

  private static readonly baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private static readonly apiKey = '4c9674f31e041ad25ef153635461556e';
  private static fetchingInProgress = false;
  private static abortController: AbortController;

  public static async handleResponse(wrapper: CharacterDataWrapper = {}): Promise<any> {
    const dataContainer = (wrapper as CharacterDataWrapper).hasOwnProperty('data') ? wrapper.data : null;
    return dataContainer
        ? dataContainer.hasOwnProperty('results') ? dataContainer.results : []
        : [];
  }

  public static async handleError(error: Error): Promise<void> {
    if (error.name === 'AbortError') {
      console.log('fetch request was aborted');
    }
    console.log('from handle error');
  }

  public static async handleFinally(): Promise<void> {
    CharactersService.fetchingInProgress = false;
    console.log('from handle finally');
  }

  private static getQueryString(offset: number, nameStartsWith?: string): string {
    const limitQuery = `?limit=${limit}`;
    const offsetQuery = nameStartsWith ? '' : `&offset=${offset}`;
    const nameStartsWithQuery = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
    const apiKeyQuery = `&apikey=${CharactersService.apiKey}`;
    return `${limitQuery}${offsetQuery}${nameStartsWithQuery}${apiKeyQuery}`;
  }
}
