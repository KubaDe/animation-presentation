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
      <Text light>animation-direction - kierunek cyklu</Text>
      Możliwe wartości <code>animation-direction</code>:
      <ListWrapper width="80vw">
        <List>
          <ListItem><code>normal </code> - odtwarzanie animacji w przód</ListItem>
          <ListItem><code>reverse </code> - odtwarzanie animacji w tył</ListItem>
          <ListItem><code>alternate </code> - odtworzenie w przód, a następnie w tył</ListItem>
          <ListItem><code>alternate-reverse</code> - odtwarzanie w tył, a następnie w przód</ListItem>
          <br />
          Domyślnie: normal
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
