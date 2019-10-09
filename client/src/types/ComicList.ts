import { ComicSummary } from './ComicSummary';

export type ComicList = {
  available?: number; // (int, optional): The number of total available issues in this list.
  returned?: number; // (int, optional): The number of issues returned in this collection (up to 20).,
  collectionURI?: string; // (string, optional): The path to the full list of issues in this collection.,
  items?: ComicSummary[]; // (Array[ComicSummary], optional): The list of returned issues in this collection.
};
