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
  from { 
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}

button {
  animation-duration: 1s;
  animation-iteration-count: 3;
}

button:hover {
  animation-name: my-demo;
}

/*
  animation-iteration-count: infinite;
*/
  `,
};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation-iteration-count
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
