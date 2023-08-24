'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const [opened, setOpened] = React.useState(false);
  const [size, setSize] = React.useState("top");
  const open = (s) => {
    setSize(s);
    setOpened(true);
  };
  const controls = ["xs", "sm", "md", "lg", "xl", "100%", "40rem", "25%"].map((s) => /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", onClick: () => open(s), key: s }, s));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Drawer,
    {
      opened,
      onClose: () => setOpened(false),
      padding: "md",
      size,
      withCloseButton: false
    },
    "Press escape to close the drawer"
  ), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, controls));
}
const sizes = {
  type: "code",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=Drawer.demo.sizes.js.map
