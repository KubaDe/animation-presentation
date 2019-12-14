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
    button {
    
    }

    /*
      filter: blur(5px)
      filter: brightness(.2)
      filter: contrast(30%)
      filter: grayscale(90%)
      filter: hue-rotate(30deg)
      filter: invert(30%)
      filter: opacity(.1)
      filter: saturate(.8)
      filter: sepia(1)
    */ 
  `,
}

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading size={4}>
        transition-duration/property
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
