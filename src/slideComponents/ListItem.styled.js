import styled, { css } from "styled-components";
import { ListItem } from "spectacle";

const SIZES = {
  sm: '24px',
  md: '32px',
}

const CustomListItem = styled(ListItem).attrs({
  textColor: "secondary",
})`
  && {
    font-weight: 300;
    font-size: ${props => SIZES[props.size] || SIZES.sm};
    list-style-type: none;
    ${props => props.dot && css`
      list-style-type: disc;
    `}
    a:visited {
      color: white;
    }
    a:link {
      color: white;
    }
  }
`;

CustomListItem.defaultProps = {
  size: 'md',
  dot: false,
}

export default CustomListItem
