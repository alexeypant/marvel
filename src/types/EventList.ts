import { EventSummary } from './EventSummary';

export type EventList = {
  available?: number; // (int, optional): The number of total available events in this list.
  returned?: number; // (int, optional): The number of events returned in this collection (up to 20).,
  collectionURI?: string; // (string, optional): The path to the full list of events in this collection.,
  items?: EventSummary[]; // (Array[EventSummary], optional): The list of returned events in this collection.
};
