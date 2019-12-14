import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Ufo.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
button {
  transition-property: transform; 
  transition-duration: 500ms;
  transition-time-function: linear;
  transition-delay: .2s;
}

button:hover {
  transform: scale(1.2);
}

/*
  transition: transform 500ms linear .2s; 
*/
  `,
}

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Transition shorthand
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
