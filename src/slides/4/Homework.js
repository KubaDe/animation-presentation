import React from "react";

import {
  Heading,
  Slide,
  Text,
  ListWrapper,
  ListItem,
  List,
} from "slideComponents";
import * as components from "../../slideComponents/CssCode.styled";
import moonSvg from "assets/SVG/Moon.svg";

const SlideView = () => {
  return (
    <Slide transition={["fade"]}>
      <Heading>Zadanie domowe</Heading>

      <ListWrapper>
        <List>
          <ListItem dot>
             Menu
          </ListItem>
          <ListItem>
          Ostyluj przycisk otwierający menu, tak aby wygladał jak:<br/>
             - hamburger (trzy poziome paski) - przy menu zamkniętym<br/>
             - znak X  - przy menu otwartym<br/>
            Dodaj tranzycje zmiany hamburgera w X oraz tranzycje otwarcia menu.
          </ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem dot>
          Zdjęcia w galerii
          </ListItem>
          <ListItem>
          Dodaj animacje do zdjęć przy interakcji z kursorem. <br/>(Możesz użyć Eventów JS lub pseudo-klasy :hover) <br/>
            - Animacje powinny mieć minimum 3 kroki<br/>
            - Animacja przy najechaniu kursorem używać powinna transformacji.<br/>
            - Animacja przy opuszczeniu obrazka modyfikować powinna kolory obrazka(filter)<br/>
            - W skrajnych punktach animacji nie powinien wystąpić przeskok.<br/>
          </ListItem>
          {/*<ListItem>&nbsp;</ListItem>*/}
          {/*<ListItem dot>*/}
          {/*  Scroll*/}
          {/*</ListItem>*/}
          {/*<ListItem>*/}
          {/*  Dodaj na górze strony przyklejony poziomy progressbar pokazujący aktyalny stan przewijania dokumentu. <br/>*/}
          {/*  (Zadanie z js, tranzycje i animacje css mogą być niepotrzebne)*/}
          {/*</ListItem>*/}
        </List>
      </ListWrapper>


    </Slide>
  );
};

export default SlideView;
