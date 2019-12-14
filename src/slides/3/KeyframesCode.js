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
          <ListItem>
            <pre>
              {`
 @keyframes <nazwa> {
    from { background-color: red; }
    to { background-color: yellow; }
  }
`}
            </pre>
          </ListItem>
          <ListItem>
            <pre>
              {`
 @keyframes <nazwa> {
    0% { background-color: red; }
    100% { background-color: yellow; }
  }
`}
            </pre>
          </ListItem>
          <ListItem></ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
