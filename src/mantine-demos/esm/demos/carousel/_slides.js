import React from 'react';
import { Box, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Slide({ children }) {
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      style: {
        backgroundColor: "var(--mantine-color-blue-filled)",
        color: "var(--mantine-color-white)",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: rem(50),
        fontWeight: "bold"
      }
    },
    children
  );
}
function Slides({ count }) {
  const slides = Array(count).fill(0).map((_, index) => /* @__PURE__ */ React.createElement(Carousel.Slide, { key: index }, /* @__PURE__ */ React.createElement(Slide, null, index + 1)));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, slides);
}

export { Slides };
//# sourceMappingURL=_slides.js.map
