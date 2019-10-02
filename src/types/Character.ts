import { Url } from './Url';
import { ComicList } from './ComicList';
import { StoryList } from './StoryList';
import { EventList } from './EventList';
import { SeriesList } from './SeriesList';
import { CharacterAttribute } from '../enums/CharacterAttribute';

export type Character = {
  [CharacterAttribute.id]?: number; // The unique ID of the character resource.,
  [CharacterAttribute.name]?: string // The name of the character.,
  [CharacterAttribute.description]?: string; // A short bio or description of the character.,
  [CharacterAttribute.modified]?: Date;  // The date the resource was most recently modified.,
  [CharacterAttribute.resourceURI]?: string; // The canonical URL identifier for this resource.,
  [CharacterAttribute.urls]?: Url[]; // A set of public web site URLs for the resource.,
  [CharacterAttribute.thumbnail]?: string; // (Image, optional): The representative image for this character.,
  [CharacterAttribute.comics]?: ComicList; // (ComicList, optional): A resource list containing comics which feature this character.,
  [CharacterAttribute.stories]?: StoryList; // (StoryList, optional): A resource list of stories in which this character appears.,
  [CharacterAttribute.events]?: EventList; // (EventList, optional): A resource list of events in which this character appears.,
  [CharacterAttribute.series]?: SeriesList; // (SeriesList, optional): A resource list of series in which this character appears.
};
