'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: "xs" }), /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: "sm" }), /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: "md" }), /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: "lg" }), /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: "xl" }), /* @__PURE__ */ React__default.createElement(core.Divider, { my: "xs", size: 10 }));
}
const sizes = {
  type: "code",
  code,
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=Divider.demo.sizes.js.map
