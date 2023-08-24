'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _colWrapper = require('./_col-wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">span=auto</Grid.Col>
      <Grid.Col span={6}>span=6</Grid.Col>
      <Grid.Col span="auto">span=auto</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, null, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: "auto" }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 6 }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: "auto" }, "3"));
}
const auto = {
  type: "code",
  code,
  component: Demo
};

exports.auto = auto;
//# sourceMappingURL=Grid.demo.auto.js.map
