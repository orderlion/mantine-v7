'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Card,
    {
      shadow: "sm",
      padding: "lg",
      component: "a",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      target: "_blank"
    },
    /* @__PURE__ */ React__default.createElement(core.Card.Section, null, /* @__PURE__ */ React__default.createElement(
      core.Image,
      {
        src: "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        h: 160,
        alt: "No way!"
      }
    )),
    /* @__PURE__ */ React__default.createElement(core.Text, { fw: 500, size: "lg", mt: "md" }, "You've won a million dollars in cash!"),
    /* @__PURE__ */ React__default.createElement(core.Text, { mt: "xs", c: "dimmed", size: "sm" }, "Please click anywhere on this card to claim your reward, this is not a fraud, trust us")
  );
}
const link = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
  dimmed: true
};

exports.link = link;
//# sourceMappingURL=Card.demo.link.js.map
