import React from "react";

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper
} from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>Transform</Heading>
      <Text light>Rotate - Obracanie elementu</Text>
      Możliwe wartości:
      <ListWrapper>
        <List>
          <ListItem>
            <code>transform: rotate(x, y);</code>
          </ListItem>
          <ListItem>
            <code>transform: rotateX(x);</code>
          </ListItem>
          <ListItem>
            <code>transform: rotateY(y);</code>
          </ListItem>
          <ListItem>
            <code>transform: rotateZ(z);</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
