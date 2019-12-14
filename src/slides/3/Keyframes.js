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
      <Heading>Keyframes</Heading>
      <ListWrapper width="90vw">
        <List>
          <ListItem dot>Definiuje styl elementu w kluczowych momentach</ListItem>
          <ListItem dot>Opisuje przebieg animacji od klatki początkowej do końcowej</ListItem>
          <ListItem dot>Pozwala na podzielenie całej animacji na kilka etapów</ListItem>
          <ListItem dot>Definiowany procentowo lub przy użyciu from i to</ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
