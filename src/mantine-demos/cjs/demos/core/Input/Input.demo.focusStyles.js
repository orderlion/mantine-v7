'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Input_demo_focusStyles_module = require('./Input.demo.focusStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`;
const cssCode = `
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Input, { placeholder: "Regular Input component", classNames: Input_demo_focusStyles_module['default'] }), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      placeholder: "TextInput component",
      label: "TextInput component",
      mt: "md",
      classNames: Input_demo_focusStyles_module['default']
    }
  ));
}
const focusStyles = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.focusStyles = focusStyles;
//# sourceMappingURL=Input.demo.focusStyles.js.map
