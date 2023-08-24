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
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
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
      slideSize: { base: "100%", sm: "50%", md: "33.333333%" },
      slideGap: { base: 0, sm: "md" },
      loop: true,
      align: "start"
    },
    /* @__PURE__ */ React.createElement(Slides, { count: 6 })
  );
}
const breakpoints = {
  type: "code",
  component: Demo,
  code
};

export { breakpoints };
//# sourceMappingURL=Carousel.demo.breakpoints.js.map
