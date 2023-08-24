import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Carousel,
    {
      withIndicators: true,
      height: 200,
      slideSize: "33.333333%",
      slideGap: "md",
      loop: true,
      align: "start",
      slidesToScroll: 3
    },
    /* @__PURE__ */ React.createElement(Slides, { count: 12 })
  );
}
const multiple = {
  type: "code",
  component: Demo,
  code
};

export { multiple };
//# sourceMappingURL=Carousel.demo.multiple.js.map
