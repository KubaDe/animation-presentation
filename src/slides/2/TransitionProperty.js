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
      <Heading>Transition</Heading>
      <Text light>transition-property - Atrybyty, których wartość ma być interpolowana w czasie</Text>
      Możliwe wartości - przykłady:
      <ListWrapper width="80vw">
        <List>
          <ListItem>
            <code>transition-property: none;</code>
          </ListItem>
          <ListItem>
            <code>transition-property: all; // Nope!</code>
          </ListItem>
          <ListItem>
            <code>transition-property: transform;</code>
          </ListItem>
          <ListItem>
            <code>transition-property: width, height;</code>
          </ListItem>
          <br />
          Domyślnie: all
        </List>
      </ListWrapper>
      Animatable: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">MDN docs</a>
    </Slide>
  );
};

export default SlideView;
