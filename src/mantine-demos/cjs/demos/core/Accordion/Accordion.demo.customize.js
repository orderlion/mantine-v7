'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');
var Accordion_demo_customize_module = require('./Accordion.demo.customize.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples" classNames={classes}>
      {items}
    </Accordion>
  );
}
`;
const cssCode = `.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: rem(1px) solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--mantine-color-body);
    border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
    box-shadow: var(--mantine-shadow-md);
    border-radius: var(--mantine-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}
`;
function Demo() {
  const items = _base.groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React__default.createElement(core.Accordion, { defaultValue: "Apples", classNames: Accordion_demo_customize_module['default'], variant: "filled" }, items);
}
const customize = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" }
  ],
  centered: true,
  maxWidth: 500
};

exports.customize = customize;
//# sourceMappingURL=Accordion.demo.customize.js.map
