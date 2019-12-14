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
      <Text light>animation-duration - Czas trwania animacji</Text>
      Możliwe wartości - przykłady:
      <ListWrapper>
        <List>
          <ListItem>
            <code>animation-duration: 3s;</code>
          </ListItem>
          <ListItem>
            <code>animation-duration: 300ms;</code>
          </ListItem>
          <br />
          Domyślnie: 0
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
