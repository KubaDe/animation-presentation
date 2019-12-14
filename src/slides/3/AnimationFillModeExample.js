import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Alien.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
@keyframes my-demo {
  0% { 
    transform: rotate(0) scale(1.4);
  }
  100% {
    transform: rotate(.5turn);
    transform-origin: 50% 50%;
  }
}

button {
  transform-origin: 50% 100%;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: none;
}

button:hover {
  animation-name: my-demo;
}

/*
  animation-fill-mode: forwards;
  animation-fill-mode: backwards;
  animation-fill-mode: both;
*/
  `,
};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation-fill-mode
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
