import React from "react";
import { List, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const locationIndex = {'/': 0, '/skills': 1};
  const [selected, setSelected] = React.useState(locationIndex[location.pathname]);
  const setSelectedItem = (value) => setSelected(value);
  const menuItems = [{name: 'HOME', path: '/'}, {name: 'SKILLS', path: '/skills'}];

  return (
    <nav>
      <List className="gap-0">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <ListItem
              className={
                'bg-transparent rounded-none border-gray-700 ' +
                'hover:bg-transparent hover:pl-6 hover:border-b hover:border-t ' +
                'active:bg-transparent active:text-white focus:text-white focus:bg-transparent ' +
                (selected === index ? 'border-t border-b text-white' : '')
              }
              selected={selected === index}
              onClick={() => setSelectedItem(index)}
            >
              {selected === index && <ChevronLeftIcon strokeWidth={2} className="h-5 w-5" />}
              {item.name}
              {selected === index && <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />}
            </ListItem>
          </Link>
        ))}
      </List>
    </nav>
  )
}

export default Navbar;