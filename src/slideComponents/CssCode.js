import React, { useState } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// Components
import * as components from "./CssCode.styled";

// Theme
import theme from "consts/codeTheme";
import imageSrc from "../assets/SVG/Telescope.svg";

const compile = silentCode => styleStr => {
  return `
  const GlobalStyle = createGlobalStyle\`.frame { ${styleStr}; ${silentCode}; }\`;
    render(
    <WrapperComponent className="frame">
      <GlobalStyle />
      <ActionComponent />
    </WrapperComponent>
    )
  `;
};

const CssCode = ({
  actionComponent: ActionComponent,
  wrapWith,
  code,
  silentCode = "",
  height,
  codeFontSize,
  fullScreenMode
}) => {
  const WrapperComponent = (() => {
    switch (wrapWith) {
      case "center":
        return components.CenterWrapper;
      case "relative":
        return components.RelativeWrapper;
      default:
        return components.CenterWrapper;
    }
  })();

  const [fullScreen, setFullScreen] = useState(false);

  return (
    <LiveProvider
      code={code}
      transformCode={compile(silentCode)}
      scope={{
        ActionComponent,
        WrapperComponent,
        createGlobalStyle
      }}
      noInline={true}
      language="css"
      theme={theme}
    >
      <components.Grid
        height={height}
        fullScreen={fullScreen}
        fullScreenMode={fullScreenMode}
      >
        <components.CodeColumn codeFontSize={codeFontSize}>
          <LiveEditor />
        </components.CodeColumn>
        <components.PreviewColumn>
          <LivePreview />
          <LiveError />
        </components.PreviewColumn>
        {!fullScreenMode && (
          <components.Controls>
            <components.PictureButton
              bgImage={imageSrc}
              width="30px"
              height="100%"
              onClick={() => setFullScreen(!fullScreen)}
            />
          </components.Controls>
        )}
      </components.Grid>
    </LiveProvider>
  );
};

CssCode.propTypes = {
  wrapWith: PropTypes.oneOf(["center", "relative"]),
  actionComponent: PropTypes.element,
  code: PropTypes.string,
  height: PropTypes.string,
  codeFontSize: PropTypes.string,
  fullScreenMode: false
};

CssCode.defaultProps = {
  actionComponent: (...props) => (
    <components.BasicButton {...props}>Daftcode</components.BasicButton>
  ),
  wrapWith: "center",
  code: `
    button {
      background: black;
      color: white;
      border: 1px solid currentColor;
      border-radius: 10px; 
    }
  `,
  height: "70vh",
  codeFontSize: "20px"
};

export const ActionButtons = {
  BasicButton: components.BasicButton
};

export default CssCode;
