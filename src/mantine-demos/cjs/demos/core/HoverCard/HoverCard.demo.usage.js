'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.HoverCard, { width: 280, shadow: "md" }, /* @__PURE__ */ React__default.createElement(core.HoverCard.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Hover to reveal the card")), /* @__PURE__ */ React__default.createElement(core.HoverCard.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"))));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=HoverCard.demo.usage.js.map
