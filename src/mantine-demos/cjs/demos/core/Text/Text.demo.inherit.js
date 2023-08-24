'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Title, { order: 3 }, "Title in which you want to", " ", /* @__PURE__ */ React__default.createElement(core.Text, { span: true, c: "blue", inherit: true }, "highlight"), " ", "something");
}
const inherit = {
  type: "code",
  component: Demo,
  code
};

exports.inherit = inherit;
//# sourceMappingURL=Text.demo.inherit.js.map
