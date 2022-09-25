import React from 'react';
// Provider共享store
import {Provider} from 'react-redux'

import Routes from '@/router'

import store from "./store"

import HyAppHeader from "@/components/app-header";
import HyAppFooter from "@/components/app-footer";


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <HyAppHeader/>
        {Routes()}
        <HyAppFooter/>
      </div>
    </Provider>
  )
    ;
}

export default App;
