import { StorySummary } from './StorySummary';

export type StoryList = {
  available?: number; // (int, optional): The number of total available stories in this list.
  returned?: number; // (int, optional): The number of stories returned in this collection (up to 20).,
  collectionURI?: string; // (string, optional): The path to the full list of stories in this collection.,
  items?: StorySummary[]; // (Array[StorySummary], optional): The list of returned stories in this collection.
};
