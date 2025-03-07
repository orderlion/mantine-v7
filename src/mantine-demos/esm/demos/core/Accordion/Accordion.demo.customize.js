import React from 'react';
import { Accordion } from '@mantine/core';
import { groceries } from './_base.js';
import classes from './Accordion.demo.customize.module.css.js';

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
  const items = groceries.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React.createElement(Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React.createElement(Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React.createElement(Accordion, { defaultValue: "Apples", classNames: classes, variant: "filled" }, items);
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

export { customize };
//# sourceMappingURL=Accordion.demo.customize.js.map
