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
      <Text>Prezentacja:</Text>
      <ListWrapper width="95vw">
        <List>
          <ListItem>
            <a href="https://practical-edison-51b74f.netlify.com">
              https://practical-edison-51b74f.netlify.com
            </a>
          </ListItem>
          <ListItem>
            <a href="https://bit.ly/34efgyp">https://bit.ly/34efgyp</a>
          </ListItem>
        </List>
      </ListWrapper>
      <Text>Wspaniałe obrazki w prezentacji:</Text>
      <ListWrapper width="95vw">
        <List>
          <ListItem>
            <a href="https://www.freepik.com/free-photos-vectors/abstract">
              Abstract vector created by GraphiqaStock - www.freepik.com
            </a>
          </ListItem>
        </List>
      </ListWrapper>
    </Slide>
  );
};

export default SlideView;
