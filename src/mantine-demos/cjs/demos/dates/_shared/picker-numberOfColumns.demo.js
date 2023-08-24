'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState([null, null]);
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
      Component,
      {
        type: "range",
        numberOfColumns: 2,
        value,
        onChange: setValue,
        visibleFrom: "sm"
      }
    ), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", hiddenFrom: "sm" }, "Demo is not available on small screens. Make your screen larger to see the demo."));
  };
}
function getPickerNumberOfColumnsDemo(Component) {
  return {
    type: "code",
    centered: true,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerNumberOfColumnsDemo = getPickerNumberOfColumnsDemo;
//# sourceMappingURL=picker-numberOfColumns.demo.js.map
