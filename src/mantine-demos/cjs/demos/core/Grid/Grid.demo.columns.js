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
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, { columns: 24 }, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 12 }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 6 }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 6 }, "3"));
}
const columns = {
  type: "code",
  code,
  component: Demo
};

exports.columns = columns;
//# sourceMappingURL=Grid.demo.columns.js.map
