/** @flow */
import React from 'react'
import {Provider} from 'react-redux'

import createStore from './createStore'
import Root from "./route";

const store = createStore();

const Main = () => {

  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  )
};

export default Main


