'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Menu, { transitionProps: { transition: "rotate-right", duration: 150 } }, /* @__PURE__ */ React__default.createElement(_menuItems.DemoMenuItems, null));
}
const transitions = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.transitions = transitions;
//# sourceMappingURL=Menu.demo.transitions.js.map
