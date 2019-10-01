import {TComicSummary} from "./TComicSummary";

export type TComicList = {
    available?: number; // (int, optional): The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // (int, optional): The number of issues returned in this collection (up to 20).,
    collectionURI?: string; // (string, optional): The path to the full list of issues in this collection.,
    items?: TComicSummary[]; // (Array[ComicSummary], optional): The list of returned issues in this collection.
};
