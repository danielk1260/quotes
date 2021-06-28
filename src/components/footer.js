import React from "react";
import { Container, Divider, Menu } from "semantic-ui-react";

const Footer = ({ color }) => {
  return (
    <Container>
      <Divider />
      <Menu color={color} size="small" text inverted>
        <Menu.Menu position="right">
          <Menu.Item name="2021" />
          <Menu.Item name="Daniel Camacho" />
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Footer;
