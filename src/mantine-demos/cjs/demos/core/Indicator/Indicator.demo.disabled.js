'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline disabled size={12}>
      <Avatar size="lg" src="./avatar.png" />
    </Indicator>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Indicator, { inline: true, disabled: true, size: 12 }, /* @__PURE__ */ React__default.createElement(
    core.Avatar,
    {
      size: "lg",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    }
  ));
}
const disabled = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.disabled = disabled;
//# sourceMappingURL=Indicator.demo.disabled.js.map
