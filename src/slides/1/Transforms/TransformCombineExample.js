import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Telescope.svg';

const code = {
  actionComponent: (...props) => (
    <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
  ),
  wrapWith: "center",
  code: `
  
button {
  transform: 
    translateY(-90%)
    scale(.6) 
    rotate(.1turn);
}

  `,

};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        Łączenie transformacji
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
