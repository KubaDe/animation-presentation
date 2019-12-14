import React from "react";

import {
  Heading,
  Slide,
  Text,
  ListWrapper,
  ListItem,
  List,
} from "slideComponents";
import * as components from "../../slideComponents/CssCode.styled";
import moonSvg from "assets/SVG/Moon.svg";

const SlideView = () => {
  return (
    <Slide transition={["fade"]}>
      <Heading>Strony z inspiracjami:</Heading>

      <Text>Zbiór stron konkursowych:</Text>
      <ListWrapper>
        <List>
          <ListItem>
            <a href="https://www.awwwards.com/">
              awwwards.com
            </a>
          </ListItem>
        </List>
      </ListWrapper>

      <Text>Ciekawe designy:</Text>
      <ListWrapper>
        <List>
          <ListItem>
            <a href="https://dribbble.com/shots/following/web-design">
              dribbble.com
            </a>
          </ListItem>
          <ListItem>
            <a href="https://www.behance.net/galleries/interaction/ui-ux">
              behance.net
            </a>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
