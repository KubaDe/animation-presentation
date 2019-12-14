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
      <Text light>animation-fill-mode - styl przed i po wykonaniu animacji</Text>
      Możliwe wartości <code>animation-fill-mode</code>:
      <ListWrapper width="90vw">
        <List>
          <ListItem dot><code>forwards</code> - element po zakończeniu animacji posiadać będzie style zdefiniowane w ostatnim keyframe</ListItem>
          <ListItem dot><code>backwards</code> - element przez okres opóźnienia posiadać będzie style zdefiniowane w pierwszym keyframe</ListItem>
          <ListItem dot><code>both</code> - stanowi połączenie forwards i backwards</ListItem>
          <ListItem dot><code>none</code> - żaden ze stylów zdefiniowanych w keyframes nie będzie miał wpływu na element przed i po animacji</ListItem>
          <br />
          Domyślnie: none
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
