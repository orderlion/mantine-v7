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
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, null, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 3, order: { base: 2, sm: 1, lg: 3 } }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 3, order: { base: 3, sm: 2, lg: 2 } }, "3"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 3, order: { base: 1, sm: 3, lg: 1 } }, "1"));
}
const order = {
  type: "code",
  code,
  component: Demo
};

exports.order = order;
//# sourceMappingURL=Grid.demo.order.js.map
