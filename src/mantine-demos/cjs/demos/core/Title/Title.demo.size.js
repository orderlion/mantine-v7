'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="${core.rem(12)}">H1 heading with ${core.rem(12)} size</Title>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Title, { order: 3, size: "h1" }, "H3 heading with h1 font-size"), /* @__PURE__ */ React__default.createElement(core.Title, { size: "h4" }, "H1 heading with h4 font-size"), /* @__PURE__ */ React__default.createElement(core.Title, { size: core.rem(12) }, "H1 heading with ", core.rem(12), " size"));
}
const size = {
  type: "code",
  component: Demo,
  code
};

exports.size = size;
//# sourceMappingURL=Title.demo.size.js.map
