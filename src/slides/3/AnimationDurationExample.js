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
    transform: scale(1) rotate(0);
  }
  to {
    transform: scale(1.5) rotate(30deg);
  }
}

button {
  animation-duration: 1s;
}

button:hover {
  animation-name: my-demo;
}

/*
  20% {
    transform: scale(1.1) rotate(30deg);
  }
*/

  `,
};

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation-duration/name
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
