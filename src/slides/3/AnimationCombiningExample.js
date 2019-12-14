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
@keyframes rotateAnim {
  0% { transform: rotate(0);}
  100% {transform: rotate(1turn);}
}

@keyframes sizeAnim {
  0% { height: 200px; width: 200px;}
  50% {height: 400px; width: 400px;}
  100% {height: 200px; width: 200px;}
}
@keyframes blurAnim {
  50% {filter: blur(10px);}
}

button {
  animation: rotateAnim 6s linear,
             sizeAnim 2s,
             blurAnim 4s;
  animation-iteration-count: infinite; 
}
  `,
};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation - combining
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
