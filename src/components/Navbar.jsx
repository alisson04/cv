import React from "react";
import { List, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HashtagIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);
  const menuItems = [{name: 'HOME', path: '/'}, {name: 'SKILLS', path: '/skills'}];

  return (
    <nav>
      <List className="text-white gap-0">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <ListItem
              className={
                'bg-transparent rounded-none border-gray-700 ' +
                'hover:bg-transparent hover:pl-6 hover:border-b hover:border-t hover:text-cv-color-2 ' +
                'active:bg-transparent active:border-b active:border-t active:text-cv-color-2 active:text-cv-color-2 ' +
                'focus:bg-transparent focus:border-b focus:border-t focus:text-cv-color-2 focus:text-cv-color-2 ' +
                (selected === index ? 'text-cv-color-2' : 'text-cv-color-1')
              }
              selected={selected === index}
              onClick={() => setSelectedItem(index)}
            >
              {selected === index && <HashtagIcon strokeWidth={2} className="h-5 w-5" />}
              {item.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </nav>
  )
}

export default Navbar;