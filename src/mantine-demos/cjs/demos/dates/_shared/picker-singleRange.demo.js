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
    <${name} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState([null, null]);
    return /* @__PURE__ */ React__default.createElement(Component, { type: "range", allowSingleDateInRange: true, value, onChange: setValue });
  };
}
function getPickerSingleRangeDemo(Component) {
  return {
    type: "code",
    centered: true,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerSingleRangeDemo = getPickerSingleRangeDemo;
//# sourceMappingURL=picker-singleRange.demo.js.map
