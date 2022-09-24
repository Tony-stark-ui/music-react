import React from 'react';


import routes from "./router";

import {useRoutes} from 'react-router-dom';

import HyAppHeader from "@/components/app-header";
import HyAppFooter from "@/components/app-footer";


function App() {

  const GetRoutes = () => useRoutes(routes); //一定要是函数内

  return (
    <div className="App">
      <HyAppHeader/>
      <GetRoutes/>
      <HyAppFooter/>
    </div>
  );
}

export default App;
