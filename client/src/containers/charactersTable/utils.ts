import { Character } from '../../types/Character';
import { TData } from '../../components/commons/dataTable/Table';
import { columns } from './constants';

export const convertCharacters = (characters: Character[]): TData[] => {
  return characters.map((ch: Character, index: number) => {
    const characterAttributesToShow = columns.reduce((acc, col) => {
      acc[col.key] = ch.hasOwnProperty(col.key) ? ch[col.key] : '';
      return acc;
    }, {} as TData);
    return {
      key: index.toString(),
      ...characterAttributesToShow,
    };
  });
};
