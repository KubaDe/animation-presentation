import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/RocketSide.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
@keyframes my-demo {
  0% { 
    transform: translateY(-90%) rotate(0) scale(.8);
  }
  100% {
    transform: translateY(-90%) rotate(1turn) scale(.8);
  }
}

button {
  transform-origin: 50% 140%;
  animation-name: my-demo;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-delay: 2s
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

/*
  animation: my-demo 
             3s
             ease-out 
             2s 
             infinite 
             both;
*/

  `,

};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation
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
