import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Carousel, { withIndicators: true, height: 200 }, /* @__PURE__ */ React.createElement(Slides, { count: 5 }));
}
const usage = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

export { usage };
//# sourceMappingURL=Carousel.demo.usage.js.map
