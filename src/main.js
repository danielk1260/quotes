import React, { Fragment } from "react";
import Menu from "./components/menu";
import Content from "./components/content";
import Footer from "./components/footer";

import Background from "./components/background/background";

const Main = () => {
  return (
    <Fragment>
      <Menu color="grey" />
      <Content />
      <Footer color="grey" />
      <Background />
    </Fragment>
  );
};

export default Main;
