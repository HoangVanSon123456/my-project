import { get, find } from "lodash";

export interface ItemParam {
  id: number;
  name: string;
}

export const getFieldHtml = (fields: ItemParam[], itemId: number) => (
  <span>{getFieldInArrayObject(fields, itemId)}</span>
);

export const getFieldInArrayObject = (listObj: object[], fieldId: number) =>
  get(find(listObj, ["id", fieldId]), "name");
