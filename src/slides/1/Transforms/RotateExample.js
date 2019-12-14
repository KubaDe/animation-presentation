import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Astronaut.svg'


const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
    button {
      transform: rotate(9deg);
      
      /*
       transform: rotate(1rad);
       transform: rotate(30deg);
       transform: rotate(.4turn);
       transform: rotateX(.4turn);
       transform: rotateY(.4turn);
       transform: rotateZ(.4turn);
       
      */
    }
  `,
}

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Transform
      </Heading>
      <Text light>
        Rotate - Przykład
      </Text>
      <CssCode
        {...code}
      />
    </Slide>
  )
}

export default SlideView
