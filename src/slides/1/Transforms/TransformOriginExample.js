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
  
button {
  transform-origin: 50% 50%;
  transform: rotate(1turn);
}

/*
  transform-origin: 50% 140%;
*/


  `,

};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
       Transform
      </Heading>
      <Text light>
        transform-origin - przykład
      </Text>
      <CssCode
        {...code}
      />
    </Slide>
  )
}

export default SlideView
