import {TEventSummary} from "./TEventSummary";

export type TEventList = {
    available?: number; // (int, optional): The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // (int, optional): The number of events returned in this collection (up to 20).,
    collectionURI?: string; // (string, optional): The path to the full list of events in this collection.,
    items?: TEventSummary[]; // (Array[EventSummary], optional): The list of returned events in this collection.
}
