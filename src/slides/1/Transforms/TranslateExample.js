import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Saturn.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
    button {
      transform: translate(10px, 0);
      
      /*
       transform: translateX(20px);
       transform: translateY(20px);
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
        Translate - Przykład
      </Text>
      <CssCode
        {...code}
      />
    </Slide>
  )
}

export default SlideView
