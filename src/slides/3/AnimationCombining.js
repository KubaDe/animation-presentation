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
      <Text>Łączenie animacji</Text>

      <ListWrapper width="95vw">
        <List>
          <ListItem size="sm">
            <code>{`animation: <name> <duration> ..., <name> <duration> ...;`}</code>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
