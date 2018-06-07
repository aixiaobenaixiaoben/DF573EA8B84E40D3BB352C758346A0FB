import {handleActions} from "redux-actions";

import {LIST_ITEM_VISIT} from "../constants";


type State = {
  visit: Array,
}

const initialState: State = {
  visit: [],
};

export default handleActions(
  {
    [LIST_ITEM_VISIT]: (state: State, action) => {

      const { id } = action;
      state.visit.push(id);
      return state;

    },
  },
  initialState);
