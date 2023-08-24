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
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Menu, { trigger: "hover", openDelay: 100, closeDelay: 400 }, /* @__PURE__ */ React__default.createElement(_menuItems.DemoMenuItems, null));
}
const hover = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.hover = hover;
//# sourceMappingURL=Menu.demo.hover.js.map
