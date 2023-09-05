import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app font-main flex">
      <div className="w-1/6">
        <Menu />
      </div>
      <div className="w-5/6">
        <Outlet />
      </div>
    </div>
  )
}

export default App
