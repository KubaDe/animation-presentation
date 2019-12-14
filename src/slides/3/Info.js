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
      <Heading>Czym są animacje CSS</Heading>
      <Text>
        Moduł css pozwalający na:
        <br />
      </Text>
      <ListWrapper>
        <List>
          <ListItem>- wielostopniową zmianę wyglądu</ListItem>
          <ListItem>- zmiany dowolnych atrybutów, wiele razy</ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
