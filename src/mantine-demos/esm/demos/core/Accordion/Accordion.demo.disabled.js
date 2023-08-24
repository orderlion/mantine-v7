import React from 'react';
import { Accordion } from '@mantine/core';
import { groceries } from './_base.js';

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
  const items = groceries.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React.createElement(Accordion.Control, { icon: item.emoji, disabled: item.value === "Bananas" }, item.value), /* @__PURE__ */ React.createElement(Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React.createElement(Accordion, { defaultValue: "Apples" }, items);
}
const disabled = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 600
};

export { disabled };
//# sourceMappingURL=Accordion.demo.disabled.js.map
