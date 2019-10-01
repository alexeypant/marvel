import {TStorySummary} from "./TStorySummary";

export type TStoryList = {
    available?: number; // (int, optional): The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // (int, optional): The number of stories returned in this collection (up to 20).,
    collectionURI?: string; // (string, optional): The path to the full list of stories in this collection.,
    items?: TStorySummary[]; // (Array[StorySummary], optional): The list of returned stories in this collection.
}
