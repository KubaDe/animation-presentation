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
      <Text light>animation-delay - Opóźnienie</Text>
      Możliwe wartości - przykłady:
      <ListWrapper width="80vw">
        <List>
          <ListItem>
            <code>animation-delay: 300ms;</code>
          </ListItem>
          <ListItem>
            <code>animation-delay: 2s;</code>
          </ListItem>
          <br />
          Domyślnie: 0
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
