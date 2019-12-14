import React from "react";

import { Heading, Slide, Text, CssCode } from "slideComponents";

import * as components from "slideComponents/CssCode.styled";
import astronautSrc from "assets/SVG/Astronaut.svg";
import satelliteSrc from "assets/SVG/Satellite.svg";
import moonSvg from "assets/SVG/Moon.svg";
import rocketSvg from "assets/SVG/RocketSide.svg";
import starsSvg from "assets/SVG/Stars.svg";

const code = {
  actionComponent: (...props) => (
    <>
      <components.PictureButton
        {...props}
        bgImage={starsSvg}
        width="300px"
        height="300px"
        className="stars"
      />
      <components.PictureButton
        {...props}
        bgImage={satelliteSrc}
        width="100px"
        height="100px"
        className="satellite"
      />
      <components.PictureButton
        {...props}
        bgImage={astronautSrc}
        width="100px"
        height="100px"
        className="astronaut"
      />
      <components.PictureButton
        {...props}
        bgImage={moonSvg}
        width="800px"
        height="800px"
        className="moon"
      />
      <components.PictureButton
        {...props}
        bgImage={rocketSvg}
        width="200px"
        height="200px"
        className="rocket"
      />
    </>
  ),
  wrapWith: "relative",
  code: `
@keyframes astronautAnim {
  0% {
    transform: rotate(0);
    left: 0;
  }
  50% {
    width: 50px;
    height: 50px;
  }
  100% {
    transform: rotate(1turn);
    left: 100%;
  }
}

.astronaut {
  animation: astronautAnim 6s infinite alternate;
}

@keyframes satelliteAnim {
  0% {
    transform: rotate(0);
    left: -20%;
  }
  100% {
    transform: rotate(1turn);
    left: 120%;
    top: 50%
  }
}

.satellite {
  animation: satelliteAnim 6s linear -3s infinite;
}

@keyframes rocketAnim {
  0% {
    transform: rotate(0);
    transform-origin: 50% 300%;
  }
  20% {
    transform: rotate(1turn);
    transform-origin: 50% 300%;
  }
  21% {
    transform: rotate(1turn);
    transform-origin: 50% -40%;
  } 
  50% {
    transform: rotate(0turn);
  }
  60% {
    transform: rotate(-.25turn);
    transform-origin: 50% 50%;
  }
  70% {
    transform: rotate(-.25turn);
  }  
  80%, 90% {
    transform: rotate(-.25turn) translateX(-80px);
  }
  94%, 98% {
      transform: rotate(-.25turn) translateX(0);
  } 
}

.rocket {
  animation: rocketAnim 6s linear both;
  animation-iteration-count: infinite; 
}

@keyframes starsAnim {
  from {opacity: .3;}
  to {opacity: 1;}
}

.stars {
  animation: starsAnim 2s alternate infinite;
}

@keyframes moonAnim {
  from {transform: rotate(0);}
  to {transform: rotate(-1turn);}
}

.moon {
  animation: moonAnim 6s -.5s infinite;
}

  `,
  silentCode: `
    animation: moonAnim 10s linear infinite;
    .stars {
      position: absolute;
      top: calc(20% - 150px);
      right: calc(30% - 150px);
    } 
    .astronaut {
      position: absolute;
      top: 25%;
    } 
     .satellite {
      position: absolute;
      top: 10%;
    }
    .moon {
      position: absolute;
      bottom: -600px;
      left: calc(50% - 400px);
    }
    .rocket {
      position: absolute;
      bottom: 200px;
      left: calc(50% - 100px);
    }
  `
};

const SlideView = () => {
  return (
    <Slide transition={["fade"]}>
      <CssCode fullScreenMode {...code} />
    </Slide>
  );
};

export default SlideView;
