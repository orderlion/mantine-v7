'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Button with tooltip"));
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.usage = usage;
//# sourceMappingURL=Tooltip.demo.usage.js.map
