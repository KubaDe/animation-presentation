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
      <Heading>Transform</Heading>
      <ListWrapper>
        <List>
          <ListItem>
            Transformacje pozwalają na modyfikacje położenia elementu bez zmiany
            zarezerwowanego przez niego miejsca
          </ListItem>
        </List>
      </ListWrapper>
      <ListWrapper>
        <List>
          <ListItem>
            Nie możemy transformować rzeczy o pozycji inline, kolumn i grup
            kolumn tabeli
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
