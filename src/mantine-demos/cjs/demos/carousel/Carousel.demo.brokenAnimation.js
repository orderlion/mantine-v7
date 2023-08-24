'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var carousel = require('@mantine/carousel');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop maw={300}>
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
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setOpened(true) }, "Open carousel with broken offset"), /* @__PURE__ */ React__default.createElement(
    core.Modal,
    {
      opened,
      size: 300,
      padding: 0,
      transitionProps: { duration: TRANSITION_DURATION },
      withCloseButton: false,
      onClose: () => setOpened(false)
    },
    /* @__PURE__ */ React__default.createElement(carousel.Carousel, { loop: true, maw: 300 }, /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement(
      "img",
      {
        src: "https://cataas.com/cat",
        alt: "",
        style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
      }
    )), /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement(
      "img",
      {
        src: "https://cataas.com/cat/cute",
        alt: "",
        style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
      }
    )), /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement(
      "img",
      {
        src: "https://cataas.com/cat/angry",
        alt: "",
        style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
      }
    )))
  ));
}
const brokenAnimation = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.brokenAnimation = brokenAnimation;
//# sourceMappingURL=Carousel.demo.brokenAnimation.js.map
