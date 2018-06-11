/** @flow */
import {LIST_ITEM_VISIT} from "../constants";


export type Action = {
  type: string,
  id: string,
}

export const visitItem = (id: string): Action => {
  return {
    type: LIST_ITEM_VISIT,
    id: id,
  }
};
