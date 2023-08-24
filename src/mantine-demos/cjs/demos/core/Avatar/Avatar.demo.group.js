'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Avatar.Group, { spacing: "sm" }, /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[0], radius: "xl" }), /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[1], radius: "xl" }), /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[2], radius: "xl" }), /* @__PURE__ */ React__default.createElement(core.Avatar, { radius: "xl" }, "+5"));
}
const group = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

exports.group = group;
//# sourceMappingURL=Avatar.demo.group.js.map
