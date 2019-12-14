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
      <Heading>1. Dlaczego warto używać animacji:</Heading>
      <ListWrapper>
        <List>
          <ListItem dot>
            Skupienie, utrzymanie uwagi użytkownika
          </ListItem>
          <ListItem dot>
            Informowanie o stanie (ładowanie/ukończenie akcji)
          </ListItem>
          <ListItem dot>
            Informowanie o podjęciu interakcji z elementami
          </ListItem>
          <ListItem dot>
            Zilustrowanie zmienności, złożonych zależności
          </ListItem>
          <ListItem dot>
            Pomoc w nawigacji (scroll etc.)
          </ListItem>
          <ListItem dot>
            Estetyka
          </ListItem>
          <ListItem dot>
            Micro-interactions
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
