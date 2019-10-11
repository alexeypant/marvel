import { SeriesSummary } from './SeriesSummary';

export type SeriesList = {
  available?: number; // (int, optional): The number of total available series in this list.
  returned?: number; // (int, optional): The number of series returned in this collection (up to 20)
  collectionURI?: string; // (string, optional): The path to the full list of series in this collection.,
  items?: SeriesSummary[]; // (Array[SeriesSummary], optional): The list of returned series in this collection.
};
