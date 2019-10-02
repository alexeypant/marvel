import { Character } from '../../types/Character';
import { TData } from '../../components/commons/dataTable/Table';
import { columns } from './constants';

export const convertCharactersToTableData = (characters: Character[]): TData[] => {
  return characters.map((ch, index) => {
    const characterAttributesToShow = columns.reduce((acc, col) => {
      acc[col.key] = ch.hasOwnProperty(col.key) ? ch[col.key] : '';
      return acc;
    }, {});
    return {
      key: index.toString(),
      ...characterAttributesToShow,
    };
  });
};
