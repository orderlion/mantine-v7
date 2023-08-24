'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xl", loading: true, loaderProps: { type: "dots" } });
}
const loaderProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.loaderProps = loaderProps;
//# sourceMappingURL=ActionIcon.demo.loaderProps.js.map
