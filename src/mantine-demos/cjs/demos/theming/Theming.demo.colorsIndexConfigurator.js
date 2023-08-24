'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${props.index}">Text with blue.${props.index} color</Text>
      <Button color="cyan.${props.index}">Button</Button>
    </>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { c: `blue.${props.index}` }, "Text with blue.", props.index, " color"), /* @__PURE__ */ React__default.createElement(core.Button, { color: `cyan.${props.index}`, mt: "sm" }, "Button"));
}
const colorsIndexConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { type: "number", prop: "index", initialValue: 6, libraryValue: "__none__", min: 0, max: 9 }
  ]
};

exports.colorsIndexConfigurator = colorsIndexConfigurator;
//# sourceMappingURL=Theming.demo.colorsIndexConfigurator.js.map
