'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;
function Demo() {
  const [leftsCount, setLeftsCount] = React.useState(0);
  hooks.usePageLeave(() => setLeftsCount((p) => p + 1));
  return /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "Mouse left the page ", leftsCount, " times");
}
const usePageLeaveDemo = {
  type: "code",
  component: Demo,
  code
};

exports.usePageLeaveDemo = usePageLeaveDemo;
//# sourceMappingURL=use-page-leave.demo.usage.js.map
