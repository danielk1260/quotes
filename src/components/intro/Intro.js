import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import Background from "../background/background";
import "./styles.css";


const Intro = () => {
  const typeAnimation = (typewriter) => {
    typewriter
      .typeString('Bienvenidos a mi espacio personal')
      .pauseFor(2500)
      .deleteAll()
      .typeString("Desarrollador Web")
      .pauseFor(2500)
      .deleteChars(3)
      .typeString("Front - End")
      .pauseFor(60000)
      .deleteAll()
      .typeString("Te agradezco el seguir observando el intro")
      .start();
  };

  return (
    <Fragment>
      <Background />
      <div className="centerfixed">
      
        <div className="introheader">Daniel Camacho</div>
        <div className="introsubheader">
          <Typewriter
            onInit={typeAnimation}
            options={{
              delay : 45,
              deleteSpeed : 50
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;