import React, { Fragment } from "react";
import Particles from "react-particles-js";
import "./styles.css";

const Background = ( { universe = '#000', stars = '#fff' } ) => {

  document.body.style = `background-color: ${ universe };`;

  const particles = {
    particles: {
      number: {
        value: 250,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: stars,
      },
      opacity: {
        value: 0.75,
        anim: {
          enable: true,
        },
      },
      size: {
        value: 1.75,
        random: true,
        anim: {
          enable: true,
          speed: 3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        speed: 0.5,
      },
    },
  };

  return (
    <Fragment>
      <Particles params={particles} id="particles-js" />
    </Fragment>
  );
}

export default Background;