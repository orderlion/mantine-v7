'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState([null, null]);
    return /* @__PURE__ */ React__default.createElement(
      Component,
      {
        type: "range",
        label: "Pick dates range",
        placeholder: "Pick dates range",
        value,
        onChange: setValue
      }
    );
  };
}
function getPickerInputRangeDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerInputRangeDemo = getPickerInputRangeDemo;
//# sourceMappingURL=picker-input-range.demo.js.map
