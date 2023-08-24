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
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { mb: "xs" }, "1 sibling (default)"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, siblings: 1, defaultValue: 10 }), /* @__PURE__ */ React__default.createElement(core.Text, { mb: "xs", mt: "xl" }, "2 siblings"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, siblings: 2, defaultValue: 10 }), /* @__PURE__ */ React__default.createElement(core.Text, { mb: "xs", mt: "xl" }, "3 siblings"), /* @__PURE__ */ React__default.createElement(core.Pagination, { total: 20, siblings: 3, defaultValue: 10 }));
}
const siblings = {
  type: "code",
  code,
  component: Demo
};

exports.siblings = siblings;
//# sourceMappingURL=Pagination.demo.siblings.js.map
