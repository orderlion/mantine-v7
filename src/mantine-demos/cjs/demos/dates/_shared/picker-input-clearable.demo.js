'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;
function getDemo(Component) {
  return () => /* @__PURE__ */ React__default.createElement(Component, { clearable: true, defaultValue: /* @__PURE__ */ new Date(), label: "Pick date", placeholder: "Pick date" });
}
function getPickerInputClearableDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerInputClearableDemo = getPickerInputClearableDemo;
//# sourceMappingURL=picker-input-clearable.demo.js.map
