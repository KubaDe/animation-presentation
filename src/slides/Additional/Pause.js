import React from "react";

import {
  Heading,
  Slide,
  Text,
  ListWrapper,
  List,
  ListItem
} from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Text>Kod Obecności:</Text>
      <ListWrapper width="95vw">
        <Heading>109881</Heading>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
