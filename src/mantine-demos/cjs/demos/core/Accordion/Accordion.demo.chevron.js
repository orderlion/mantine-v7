'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var _base = require('./_base.js');
var Accordion_demo_chevron_module = require('./Accordion.demo.chevron.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

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
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
`;
const cssCode = `
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`;
function Demo() {
  const items = _base.groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React__default.createElement(
    core.Accordion,
    {
      defaultValue: "Apples",
      classNames: { chevron: Accordion_demo_chevron_module['default'].chevron },
      chevron: /* @__PURE__ */ React__default.createElement(iconsReact.IconPlus, { className: Accordion_demo_chevron_module['default'].icon })
    },
    items
  );
}
const chevron = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" }
  ],
  centered: true,
  maxWidth: 600
};

exports.chevron = chevron;
//# sourceMappingURL=Accordion.demo.chevron.js.map
