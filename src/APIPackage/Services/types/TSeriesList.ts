import {TSeriesSummary} from "./TSeriesSummary";

export type TSeriesList = {
    available?: number; // (int, optional): The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; //(int, optional): The number of series returned in this collection (up to 20).,
    collectionURI?: string; // (string, optional): The path to the full list of series in this collection.,
    items?: TSeriesSummary[]; // (Array[SeriesSummary], optional): The list of returned series in this collection.
}
