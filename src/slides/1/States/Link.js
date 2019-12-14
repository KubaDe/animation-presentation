import React from "react";

import {
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  ListWrapper
} from "slideComponents";
/*
  https://tympanus.net/codrops/css_reference/active/
  The above order can be easily memorized using mnemonics like “Last Vintage Hat Available”/Last Vintage Fur Hat Available”.
  You can create your own one over at spacefm.com.
  This order is preferred because otherwise some state styles could override other state styles,
  thus making them not work as expected. For example, if you were to style the :visited state last,
  it would override the :hover and :active states of the link, and the :visited styles would apply
  regardless of whether the link is being hovered or clicked.
*/
const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>Stany elementów interaktywnych</Heading>
      <Text light>{"<a>link</a>"} przykłady</Text>
      <ListWrapper width="90vw">
        <List>
          <ListItem>
            <code>a</code> - Każdy link
          </ListItem>
          <ListItem>
            <code>a:link</code> - Link nieodwiedzony
          </ListItem>
          <ListItem>
            <code>a:visited</code> - Link odwiedzony
          </ListItem>
          <ListItem>
            <code>a:hover</code> - Po najechaniu kursorem
          </ListItem>
          <ListItem>
            <code>a:active</code> - Od kliknięcia do puszczenia przycisku
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
