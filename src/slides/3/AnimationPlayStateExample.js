import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Astronaut.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
@keyframes my-demo {
  0% { 
    transform: rotate(0);
  }
  100% {
    transform: rotate(3turn);
  }
}

button {
  animation-name: my-demo;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  transition: height 1s, width 1s;
}

button:hover {
  animation-play-state: paused;
  height: 400px;
  width: 400px;
}
  `,
};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation-play-state
      </Heading>
      <Text light>
        Przykład
      </Text>
      <CssCode
        {...code}
      />
    </Slide>
  )
}

export default SlideView
