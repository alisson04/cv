import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Avatar, Button } from "@material-tailwind/react";
import Navbar from "./Navbar.jsx";

const Menu = () => {
  return (
    <div className="menu h-screen bg-cv-color-4 grid grid-cols-1 content-between border-r border-cv-borders-color">
      <div>
        <div className="flex justify-center p-9">
          <Avatar
            src="/public/img/profile.jpg"
            alt="avatar"
            withBorder={true}
            className="p-0.5 border-cv-color-2"
            size="xxl"
          />
        </div>

        <div className="text-center text-cv-color-1">
          <h1 className="text-xl text-cv-color-1">Alisson Fernandes</h1>
          <h2 className="text-md">PHP Full Stack Developer</h2>
        </div>

        <Navbar />
      </div>
      <div className="p-4 border-t border-cv-borders-color">
        <a
          href="https://api.whatsapp.com/send?phone=5516997099815&text=Ol%C3%A1,%20cheguei%20aqui%20pelo%20seu%20cv%20online!"
          target="_blank" rel="noreferrer"
        >
          <Button variant="outlined" color="white" fullWidth>
            <FontAwesomeIcon icon="message" /> Contact me
            <FontAwesomeIcon icon="laptop-mobile" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Menu