// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// Import theme
import theme, { spectacleTheme } from "consts/theme";

// templates
import VerticalCodeSplit from "templates/VericalCodeSplit";

import slides from "./slides";

// Require CSS
import "normalize.css";
import { ThemeProvider } from "styled-components";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={spectacleTheme}
        contentWidth="100%"
        contentHeight="100%"
        controls={false}
        progress={false}
      >
        {slides.map(Slide => (
          <ThemeProvider theme={theme}>
            <Slide />
          </ThemeProvider>
        ))}
      </Deck>
    );
  }
}
