'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { color: "#C3FF36", c: "black" }, "Button with color and c props");
}
const colorAndCProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.colorAndCProps = colorAndCProps;
//# sourceMappingURL=Theming.demo.colorAndCProps.js.map
