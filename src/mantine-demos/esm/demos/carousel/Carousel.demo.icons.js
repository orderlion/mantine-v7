import React from 'react';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Slides } from './_slides.js';

const code = `
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
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
      height: 180,
      nextControlIcon: /* @__PURE__ */ React.createElement(IconArrowRight, { style: { width: rem(16), height: rem(16) } }),
      previousControlIcon: /* @__PURE__ */ React.createElement(IconArrowLeft, { style: { width: rem(16), height: rem(16) } })
    },
    /* @__PURE__ */ React.createElement(Slides, { count: 5 })
  );
}
const icons = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

export { icons };
//# sourceMappingURL=Carousel.demo.icons.js.map
