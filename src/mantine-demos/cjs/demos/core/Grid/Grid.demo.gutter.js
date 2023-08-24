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
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Grid, { gutter: { base: 5, xs: "md", md: "xl", xl: 50 } }, /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "3"));
}
const gutter = {
  type: "code",
  code,
  component: Demo
};

exports.gutter = gutter;
//# sourceMappingURL=Grid.demo.gutter.js.map
