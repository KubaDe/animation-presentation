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
    
    button:hover {
      transform: scale(1.1) rotate(30deg);
    }
    
    button:focus {
      transform: scale(1.5) rotate(30deg);
    }
    
    /*
      transition-duration: 1000ms;
      transition-property: transform; 
      Co się dzieje z focus outline?
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
