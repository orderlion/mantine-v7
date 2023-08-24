'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState(null);
    return /* @__PURE__ */ React__default.createElement(
      Component,
      {
        dropdownType: "modal",
        label: "Pick date",
        placeholder: "Pick date",
        value,
        onChange: setValue
      }
    );
  };
}
function getPickerInputModalDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerInputModalDemo = getPickerInputModalDemo;
//# sourceMappingURL=picker-input-modal.demo.js.map
