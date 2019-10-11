import { CharacterDataContainer } from './CharacterDataContainer';

export type CharacterDataWrapper = {
  code?: number; // (int, optional): The HTTP status code of the returned result.,
  status?: string; // (string, optional): A string description of the call status.,
  copyright?: string // (string, optional): The copyright notice for the returned result.,
  attributionText?: string; // (string, optional): The attribution notice for this result.
  attributionHTML?: string; // (string, optional): An HTML representation of the attribution notice for this result
  data?: CharacterDataContainer; // (CharacterDataContainer, optional): The results returned by the call.,
  etag?: string; // (string, optional): A digest value of the content returned by the call.
};
