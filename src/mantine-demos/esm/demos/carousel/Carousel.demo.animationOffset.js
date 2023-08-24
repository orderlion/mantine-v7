import React, { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { useAnimationOffsetEffect, Carousel } from '@mantine/carousel';

const code = `
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`;
function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState(null);
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { onClick: () => setOpened(true) }, "Open modal with carousel"), /* @__PURE__ */ React.createElement(
    Modal,
    {
      opened,
      size: 300,
      padding: 0,
      transitionProps: { duration: TRANSITION_DURATION },
      withCloseButton: false,
      onClose: () => setOpened(false)
    },
    /* @__PURE__ */ React.createElement(Carousel, { loop: true, getEmblaApi: setEmbla, maw: 300 }, /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://cataas.com/cat",
        alt: "Cat",
        style: { width: rem(300), height: rem(200), objectFit: "cover" }
      }
    )), /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://cataas.com/cat/cute",
        alt: "Cat",
        style: { width: rem(300), height: rem(200), objectFit: "cover" }
      }
    )), /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://cataas.com/cat/angry",
        alt: "Cat",
        style: { width: rem(300), height: rem(200), objectFit: "cover" }
      }
    )))
  ));
}
const animationOffset = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { animationOffset };
//# sourceMappingURL=Carousel.demo.animationOffset.js.map
