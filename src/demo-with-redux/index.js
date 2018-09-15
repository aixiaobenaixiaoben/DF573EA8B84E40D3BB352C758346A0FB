/** @flow */
import React from 'react'
import {Provider} from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

import createStore from './createStore'
import Root from "./Route"
import Keyboard from "./modules/common/containers/Keyboard"

const { store, persistor } = createStore();

const Main = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root/>
        <Keyboard/>
      </PersistGate>
    </Provider>
  )
};

export default Main


