import {TUrl} from "./TUrl";
import {TComicList} from "./TComicList";
import {TStoryList} from "./TStoryList";
import {TEventList} from "./TEventList";
import {TSeriesList} from "./TSeriesList";
import {ECharacterAttribute} from "../enums/ECharacterAttribute";

export type TCharacter = {
    [ECharacterAttribute.id]?: number;// The unique ID of the character resource.,
    [ECharacterAttribute.name]?: string // The name of the character.,
    [ECharacterAttribute.description]?: string; // A short bio or description of the character.,
    [ECharacterAttribute.modified]?: Date;  // The date the resource was most recently modified.,
    [ECharacterAttribute.resourceURI]?: string; // The canonical URL identifier for this resource.,
    [ECharacterAttribute.urls]?: TUrl[]; // A set of public web site URLs for the resource.,
    [ECharacterAttribute.thumbnail]?: string; // (Image, optional): The representative image for this character.,
    [ECharacterAttribute.comics]?: TComicList; // (ComicList, optional): A resource list containing comics which feature this character.,
    [ECharacterAttribute.stories]?: TStoryList; // (StoryList, optional): A resource list of stories in which this character appears.,
    [ECharacterAttribute.events]?: TEventList; // (EventList, optional): A resource list of events in which this character appears.,
    [ECharacterAttribute.series]?: TSeriesList; // (SeriesList, optional): A resource list of series in which this character appears.
}

