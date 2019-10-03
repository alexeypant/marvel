export enum CharactersAction {
  Request = 'REQUEST_CHARACTERS',
  RequestSucceeded = 'REQUEST_CHARACTERS_SUCCEEDED',
  RequestFailed = 'REQUEST_CHARACTERS_FAILED',
  Fetch = 'FETCH_CHARACTERS',
  FetchNameStartsWith = 'FETCH_CHARACTERS_NAME_START_WITH',
  DebouncedFetch = 'DEBOUNCED_FETCH_CHARACTERS',
}
