import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Slides } from './_slides.js';

const code = `
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
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
  const autoplay2 = useRef(Autoplay({ delay: 2e3 }));
  return /* @__PURE__ */ React.createElement(
    Carousel,
    {
      withIndicators: true,
      height: 200,
      plugins: [autoplay2.current],
      onMouseEnter: autoplay2.current.stop,
      onMouseLeave: autoplay2.current.reset
    },
    /* @__PURE__ */ React.createElement(Slides, { count: 5 })
  );
}
const autoplay = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

export { autoplay };
//# sourceMappingURL=Carousel.demo.autoplay.js.map
