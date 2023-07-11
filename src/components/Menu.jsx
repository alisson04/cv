import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Avatar, Button } from "@material-tailwind/react";
import Navbar from "./Navbar.jsx";

const Menu = () => {
  return (
    <div className="menu h-screen bg-cv-primary-color grid grid-cols-1 content-between border-r border-gray-700">
      <div>
        <div className="flex justify-center p-9">
          <Avatar
            src="/src/img/profile.jpg"
            alt="avatar"
            withBorder={true}
            className="p-0.5"
            size="xxl"
            color="white"
          />
        </div>

        <div className="text-center text-gray-400">
          <h1 className="text-xl">Alisson Fernandes</h1>
          <h2 className="text-md">PHP Full Stack Developer</h2>
        </div>

        <Navbar />
      </div>
      <div className="p-4 border-t border-gray-700">
        <a
          href="https://api.whatsapp.com/send?phone=5516997099815&text=Ol%C3%A1,%20cheguei%20aqui%20pelo%20seu%20cv%20online!"
          target="_blank" rel="noreferrer"
        >
          <Button variant="outlined" color="white" fullWidth>
            <FontAwesomeIcon icon="message" /> Contact me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Menu