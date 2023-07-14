import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

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
