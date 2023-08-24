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
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Title, { order: 1 }, "This is h1 title"), /* @__PURE__ */ React__default.createElement(core.Title, { order: 2 }, "This is h2 title"), /* @__PURE__ */ React__default.createElement(core.Title, { order: 3 }, "This is h3 title"), /* @__PURE__ */ React__default.createElement(core.Title, { order: 4 }, "This is h4 title"), /* @__PURE__ */ React__default.createElement(core.Title, { order: 5 }, "This is h5 title"), /* @__PURE__ */ React__default.createElement(core.Title, { order: 6 }, "This is h6 title"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Title.demo.usage.js.map
