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
    <>
      <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" />
      <components.PictureButton {...props} bgImage={imageSrc} width="200px" height="200px" className="my-button" />
    </>
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


button {
  animation: sizeAnim 3s infinite;
}

button.my-button {
  animation: rotateAnim 6s linear infinite;
}
  `,
};

const SlideView = () => {

  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        animation + class
      </Heading>
      <CssCode
        {...code}
      />
    </Slide>
  )
}

export default SlideView
