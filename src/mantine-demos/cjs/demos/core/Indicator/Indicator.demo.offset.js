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
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar size="lg" radius="xl" src="./avatar.png" />
    </Indicator>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Indicator, { inline: true, size: 16, offset: 7, position: "bottom-end", color: "red", withBorder: true }, /* @__PURE__ */ React__default.createElement(
    core.Avatar,
    {
      size: "lg",
      radius: "xl",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    }
  ));
}
const offset = {
  type: "code",
  component: Demo,
  code
};

exports.offset = offset;
//# sourceMappingURL=Indicator.demo.offset.js.map
