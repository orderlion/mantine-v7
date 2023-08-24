'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`;
function Demo() {
  const items = _base.groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, { icon: item.emoji, disabled: item.value === "Bananas" }, item.value), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React__default.createElement(core.Accordion, { defaultValue: "Apples" }, items);
}
const disabled = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 600
};

exports.disabled = disabled;
//# sourceMappingURL=Accordion.demo.disabled.js.map
