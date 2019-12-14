import React from 'react'

import {
  Heading,
  Slide,
  Text,
  CssCode,
} from 'slideComponents';

import * as components from 'slideComponents/CssCode.styled';
import imageSrc from 'assets/SVG/Saturn.svg';

const WIDTH = '50px';
const HEIGHT = '50px';

const code = {
  actionComponent: (...props) => (
    <div className="wrapper">
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
      <div className="cl"><components.PictureButton {...props} bgImage={imageSrc} width={WIDTH} height={HEIGHT} /></div>
    </div>
  ),
  wrapWith: "center",
  code: `    
.cl:nth-child(1) button {
  transition-timing-function: ease;
}
.cl:nth-child(2) button {
  transition-timing-function: linear;
}
.cl:nth-child(3) button {
  transition-timing-function: ease-in;
}
.cl:nth-child(4) button {
  transition-timing-function: ease-in-out;
}
.cl:nth-child(5) button {
  transition-timing-function: step-start;
}
.cl:nth-child(6) button {
  transition-timing-function: step-end;
}  
.cl:nth-child(7) button {
  transition-timing-function: steps(5, start);
}
  `,
    silentCode: `
    .wrapper:hover button {
      top: calc(100% - ${HEIGHT});
    }
    
    button {
      transition-duration: 2000ms;
      position: absolute;
      top: 0;
      left: calc(50% - (${WIDTH} / 2));
    }
    
    .wrapper {
      width: 100%;
      height: 100%;
      padding: 20px 0;
      display: flex;
    }
    
    .cl {
        height: 100%;
        position: relative;
        box-sizing: content-box;
        flex-grow: 1;
     }
  `,
}

const SlideView = () => {
  return (
    <Slide
      transition={['zoom']}
    >
      <Heading>
        transition-timing-function
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
