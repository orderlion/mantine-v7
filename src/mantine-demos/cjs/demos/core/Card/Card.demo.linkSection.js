'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: true }, /* @__PURE__ */ React__default.createElement(core.Card.Section, { component: "a", href: "https://mantine.dev/" }, /* @__PURE__ */ React__default.createElement(
    core.Image,
    {
      src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      height: 160,
      alt: "Norway"
    }
  )), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "space-between", mt: "md", mb: "xs" }, /* @__PURE__ */ React__default.createElement(core.Text, { fw: 500 }, "Norway Fjord Adventures"), /* @__PURE__ */ React__default.createElement(core.Badge, { color: "pink", variant: "light" }, "On Sale")), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", c: "dimmed" }, "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "light", color: "blue", fullWidth: true, mt: "md", radius: "md" }, "Book classic tour now"));
}
const linkSection = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
  dimmed: true
};

exports.linkSection = linkSection;
//# sourceMappingURL=Card.demo.linkSection.js.map
