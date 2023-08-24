'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useOs } from '@mantine/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;
function Demo() {
  const os = hooks.useOs();
  return /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "Your os is ", /* @__PURE__ */ React__default.createElement("b", null, os));
}
const useOsDemo = {
  type: "code",
  component: Demo,
  code
};

exports.useOsDemo = useOsDemo;
//# sourceMappingURL=use-os.demo.usage.js.map
