import "./App.css";
import Menu from "./components/Menu";

import { Outlet } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare, faCoffee, faCircle, faMessage} from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faCircle, faMessage)


function App() {
  return (
    <div className="app font-main">
      <div className="grid grid-cols-5">
        <Menu />
        <div className="col-span-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
