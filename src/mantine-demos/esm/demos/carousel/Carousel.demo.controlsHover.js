import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';
import classes from './Carousel.demo.controlsHover.module.css.js';

const cssCode = `.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`;
const code = `
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Carousel, { height: 200, classNames: classes }, /* @__PURE__ */ React.createElement(Slides, { count: 5 }));
}
const controlsHover = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" }
  ],
  centered: true,
  maxWidth: 320
};

export { controlsHover };
//# sourceMappingURL=Carousel.demo.controlsHover.js.map
