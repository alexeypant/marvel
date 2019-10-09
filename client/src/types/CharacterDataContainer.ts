import { Character } from './Character';

export type CharacterDataContainer = {
  offset?: number; // (int, optional): The requested offset (number of skipped results) of the call.,
  limit?: number; // (int, optional): The requested result limit.,
  total?: number; // (int, optional): The total number of resources available given the current filter set.,
  count?: number; // (int, optional): The total number of results returned by this call.,
  results?: Character[]; // (Array[Character], optional): The list of characters returned by the call.
};
