'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip.Group, { openDelay: 500, closeDelay: 100 }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip 1" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Button 1")), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip 2" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Button 2")), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip 3" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Button 3"))));
}
const group = {
  type: "code",
  component: Demo,
  code
};

exports.group = group;
//# sourceMappingURL=Tooltip.demo.group.js.map
