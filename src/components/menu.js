import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Navbar = ({ color }) => {
  const [MenuItem, setMenuItem] = useState({ activeItem: "inicio" });
  const handleMenu = (e, { name }) => setMenuItem({ activeItem: name });

  const { activeItem } = MenuItem;

  return (
    <Menu color={ color } size='small' pointing secondary>
      <Menu.Item
        name="inicio"
        active={activeItem === "inicio"}
        onClick={handleMenu}
      >
      </Menu.Item>

      <Menu.Item
        name="portafolio"
        active={activeItem === "portafolio"}
        onClick={handleMenu}
      >
      </Menu.Item>

      <Menu.Item
        name="estadisticas"
        active={activeItem === "estadisticas"}
        onClick={handleMenu}
      >
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="contacto"
          active={activeItem === "contacto"}
          onClick={handleMenu}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
