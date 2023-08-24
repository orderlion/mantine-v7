'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var reactImask = require('react-imask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase<any>
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.InputBase,
    {
      label: "Your phone",
      component: reactImask.IMaskInput,
      mask: "+7 (000) 000-0000",
      placeholder: "Your phone"
    }
  ), /* @__PURE__ */ React__default.createElement(core.InputBase, { label: "Custom native select", component: "select", mt: "md" }, /* @__PURE__ */ React__default.createElement("option", { value: "react" }, "React"), /* @__PURE__ */ React__default.createElement("option", { value: "react" }, "Angular"), /* @__PURE__ */ React__default.createElement("option", { value: "svelte" }, "Svelte")));
}
const inputBase = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.inputBase = inputBase;
//# sourceMappingURL=Input.demo.inputBase.js.map
