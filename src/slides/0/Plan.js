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
      <Heading>Plan wykładu:</Heading>
      <ListWrapper>
        <List>
          <ListItem>
            <Text>1. Dlaczego warto używać animacji</Text>
          </ListItem>
          <ListItem>
            <Text>2. Transformacje</Text>
          </ListItem>
          <ListItem>
            <Text>3. Filtry</Text>
          </ListItem>
          <ListItem>
            <Text>4. Pseudoklasy CSS</Text>
          </ListItem>
          <ListItem>
            <Text>5. Tranzycje</Text>
          </ListItem>
          <ListItem>
            <Text>6. Animacje</Text>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
