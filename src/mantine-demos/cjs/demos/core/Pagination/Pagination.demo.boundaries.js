'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { mb: "xs" }, "1 boundary (default)"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, boundaries: 1, defaultValue: 10 }), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "xl", mb: "xs" }, "2 boundaries"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, boundaries: 2, defaultValue: 10 }), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "xl", mb: "xs" }, "3 boundaries"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, boundaries: 3, defaultValue: 10 }));
}
const boundaries = {
  type: "code",
  code,
  component: Demo
};

exports.boundaries = boundaries;
//# sourceMappingURL=Pagination.demo.boundaries.js.map
