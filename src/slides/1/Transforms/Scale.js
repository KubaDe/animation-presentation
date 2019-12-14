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
      <Text light>Scale - Skalowanie elementu</Text>
      Możliwe wartości:
      <ListWrapper>
        <List>
          <ListItem>
            <code>transform: scale(x, y);</code>
          </ListItem>
          <ListItem>
            <code>transform: scaleX(x);</code>
          </ListItem>
          <ListItem>
            <code>transform: scaleY(y);</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
