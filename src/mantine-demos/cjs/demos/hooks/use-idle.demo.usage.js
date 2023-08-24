'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function Demo() {
  const idle = hooks.useIdle(2e3);
  return /* @__PURE__ */ React__default.createElement(core.Badge, { color: idle ? "blue" : "teal" }, "Current state: ", idle ? "idle" : "not idle");
}
const useIdleDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useIdleDemo = useIdleDemo;
//# sourceMappingURL=use-idle.demo.usage.js.map
