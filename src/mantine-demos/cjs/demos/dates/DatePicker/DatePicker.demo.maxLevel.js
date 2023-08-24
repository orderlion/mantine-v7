'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, { maxLevel: "year" }), /* @__PURE__ */ React__default.createElement(dates.DatePicker, { maxLevel: "month" }));
}
const maxLevel = {
  type: "code",
  component: Demo,
  code
};

exports.maxLevel = maxLevel;
//# sourceMappingURL=DatePicker.demo.maxLevel.js.map
