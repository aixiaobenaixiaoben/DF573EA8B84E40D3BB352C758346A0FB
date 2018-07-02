/** @flow */
import {combineReducers} from "redux"

import guide from "./Guide"
import tabBarBadge from "./TabBarBadge"


export default combineReducers({
  guide,
  tabBarBadge,
});