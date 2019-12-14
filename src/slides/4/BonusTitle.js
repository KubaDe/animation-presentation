import React from "react";

import {
  Heading,
  Slide,
  Text
} from "slideComponents";
import * as components from "../../slideComponents/CssCode.styled";
import moonSvg from "assets/SVG/Moon.svg";

const SlideView = () => {
  return (
    <Slide transition={["fade"]}>
      <Heading>Dziękuję za uwagę</Heading>
      <Heading>&nbsp;</Heading>
        <components.PictureButton
          bgImage={moonSvg}
          width="200px"
          height="200px"
          className="moon"
        />
        <Text>Bonus:</Text>
        <Heading>Fly me to the moon 👉</Heading>
    </Slide>
  );
};

export default SlideView;
