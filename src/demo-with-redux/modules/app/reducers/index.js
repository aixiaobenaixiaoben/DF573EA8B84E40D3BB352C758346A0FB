/** @flow */
import {combineReducers} from "redux";

import list from "./list";
import detail from "./detail";
import listItem from "./listItem";
import progress from "./progress";


export default combineReducers({
  list,
  detail,
  listItem,
  progress,
});