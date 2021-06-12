import { css, Global } from "@emotion/core";
import React, { Fragment } from "react";
import propTypes from "prop-types";

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          /* CSS reset */
          :root {
            scroll-behavior: smooth;
            min-width: 320px;
          }
          body {
            margin: 0px;
            box-sizing: border-box;
          }
          [data-whatintent="mouse"] *:focus {
            outline: none;
          }
        `}
      />
      {element}
    </Fragment>
  );
};

wrapRootElement.propTypes = {
  element: propTypes.node.isRequired,
};
