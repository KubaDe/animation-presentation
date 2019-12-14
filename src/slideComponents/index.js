import {
  BlockQuote,
  Cite,
  Deck,
  Layout,
  Fit,
  Slide,
} from 'spectacle';
import Text from './Text.styled'
import Heading from './Heading.styled'
import CssCode from './CssCode'
import List, { ListWrapper } from './List.styled'
import ListItem from './ListItem.styled'
import Quote from './Quote.styled'

// Assets
import backgroundSrc from 'assets/background.png'

Slide.defaultProps = {
  bgImage: backgroundSrc
};

export {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Layout,
  Fit,
  ListWrapper,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  CssCode
}
