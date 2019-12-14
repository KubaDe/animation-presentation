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
      <Heading>Animation</Heading>
      <Text light>animation-name - Podłączenie keyframes</Text>
      <ListWrapper>
        <List>
          <ListItem>
            <code>animation-name: my-demo;</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
