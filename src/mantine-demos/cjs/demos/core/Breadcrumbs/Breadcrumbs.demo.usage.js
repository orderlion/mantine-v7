'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="\u2192" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`;
const items = [
  { title: "Mantine", href: "https://mantine.dev" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" }
].map((item, index) => /* @__PURE__ */ React__default.createElement(core.Anchor, { href: item.href, key: index }, item.title));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Breadcrumbs, null, items), /* @__PURE__ */ React__default.createElement(core.Breadcrumbs, { separator: "\u2192", mt: "xs", classNames: { separator: "mantine-rotate-rtl" } }, items));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Breadcrumbs.demo.usage.js.map
