'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Input.Label, { required: true }, "Input label"), /* @__PURE__ */ React__default.createElement(core.Input.Description, null, "Input description"), /* @__PURE__ */ React__default.createElement(core.Input.Error, null, "Input error"));
}
const compound = {
  type: "code",
  component: Demo,
  code
};

exports.compound = compound;
//# sourceMappingURL=Input.demo.compound.js.map
