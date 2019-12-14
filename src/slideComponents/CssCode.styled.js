import styled, { css } from "styled-components";

const Column = styled.div`
  //background: rgba(255, 255, 255, 0.4);
  border: 2px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 10px;
  height: 100%;
`;

export const CodeColumn = styled(Column)`
  max-height: 100%;
  overflow: hidden;
  font-size: ${props => props.codeFontSize};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 50%);
  grid-template-rows: minmax(0, 1fr) 30px;
  grid-column-gap: 40px;
  grid-row-gap: 10px;
  height: ${props => props.height};
  justify-content: center;
  margin: 2rem;
  ${props =>
    (props.fullScreen || props.fullScreenMode) &&
    css`
      grid-column-gap: 4px;
      position: fixed;
      padding: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 9999999999;
      background: black;
    `}
  ${props =>
    props.fullScreen &&
    css`
      grid-template-columns: 1fr minmax(auto, 35%);
      ${CodeColumn} {
        font-size: 26px;
      }
    `}
    ${props =>
      props.fullScreenMode &&
      css`
        grid-template-columns: minmax(auto, 35%) 1fr;
      `}
`;

export const PreviewColumn = styled(Column)`
  & > div {
    height: 100%;
    overflow: hidden;
  }
`;
export const Controls = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: left;
  border: none;
  grid-column: 1/3;
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const BasicButton = styled.button`
  width: 240px;
  height: 80px;
`;

export const PictureButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-size: contain;
  background: transparent url("${props =>
    props.bgImage}") no-repeat center center;
  background-size: contain;
  border: none;
  border-radius: 10px; 
  cursor: pointer;
`;

PictureButton.defaultProps = {
  width: "100px",
  height: "100px"
};
