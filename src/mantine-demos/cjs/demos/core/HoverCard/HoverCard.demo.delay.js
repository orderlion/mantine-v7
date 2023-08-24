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
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.HoverCard, { shadow: "md", openDelay: 1e3 }, /* @__PURE__ */ React__default.createElement(core.HoverCard.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "1000ms open delay")), /* @__PURE__ */ React__default.createElement(core.HoverCard.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Opened with 1000ms delay"))), /* @__PURE__ */ React__default.createElement(core.HoverCard, { shadow: "md", closeDelay: 1e3 }, /* @__PURE__ */ React__default.createElement(core.HoverCard.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "1000ms close delay")), /* @__PURE__ */ React__default.createElement(core.HoverCard.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Will close with 1000ms delay"))));
}
const delay = {
  type: "code",
  component: Demo,
  code
};

exports.delay = delay;
//# sourceMappingURL=HoverCard.demo.delay.js.map
