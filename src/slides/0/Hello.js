import React from "react";

import { Heading, Slide, Text } from "slideComponents";

const SlideView = () => {
  return (
    <Slide transition={["zoom"]}>
      <Heading>🙋‍♂️👋</Heading>
      <Heading>&nbsp;</Heading>
      <Heading>Fly Me to the Moon 🌕</Heading>
      <Text>Dodajmy trochę magii: animacje, przejścia i inne czary z CSS i JS</Text>
      <Text light>Prowadzący: Jakub Dębski</Text>
    </Slide>
  );
};
export default SlideView;
