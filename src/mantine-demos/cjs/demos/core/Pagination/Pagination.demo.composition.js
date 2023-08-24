'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Pagination.Root, { total: 10 }, /* @__PURE__ */ React__default.createElement(core.Group, { gap: 5, justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Pagination.First, null), /* @__PURE__ */ React__default.createElement(core.Pagination.Previous, null), /* @__PURE__ */ React__default.createElement(core.Pagination.Items, null), /* @__PURE__ */ React__default.createElement(core.Pagination.Next, null), /* @__PURE__ */ React__default.createElement(core.Pagination.Last, null)));
}
const composition = {
  type: "code",
  component: Demo,
  code
};

exports.composition = composition;
//# sourceMappingURL=Pagination.demo.composition.js.map
