import React from "react";
import {List, ListItem} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  return (
    <nav>
      <List className="text-white">
        <Link to="/">
          <ListItem selected={selected === 1} onClick={() => setSelectedItem(1)}>Main</ListItem>
        </Link>
        <Link to="/skills">
          <ListItem selected={selected === 3} onClick={() => setSelectedItem(3)}>SKILLS</ListItem>
        </Link>
      </List>
    </nav>
  )
}

export default Navbar;