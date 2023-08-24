'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const initialStateCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function Demo() {
  const idle = hooks.useIdle(2e3, { initialState: false });
  return /* @__PURE__ */ React__default.createElement(core.Badge, { color: idle ? "blue" : "teal" }, "Current state: ", idle ? "idle" : "not idle");
}
const useIdleInitialState = {
  type: "code",
  code: initialStateCode,
  component: Demo,
  centered: true
};

exports.useIdleInitialState = useIdleInitialState;
//# sourceMappingURL=use-idle.demo.state.js.map
