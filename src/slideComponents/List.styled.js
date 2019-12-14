import styled from "styled-components";
import { List } from "spectacle";

export const ListWrapper = styled.div`
  display: block;
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  overflow: scroll;
  margin: 50px auto;
  padding: 0 50px;
  border: 2px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;

ListWrapper.defaultProps = {
  width: "80vw",
  maxHeight: "none",
};

const CustomList = styled(List)`
  display: inline-block;
`;

export default CustomList;
