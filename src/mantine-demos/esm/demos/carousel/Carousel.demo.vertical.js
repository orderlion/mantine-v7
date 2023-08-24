import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Carousel, { orientation: "vertical", height: 200, withIndicators: true }, /* @__PURE__ */ React.createElement(Slides, { count: 5 }));
}
const vertical = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

export { vertical };
//# sourceMappingURL=Carousel.demo.vertical.js.map
