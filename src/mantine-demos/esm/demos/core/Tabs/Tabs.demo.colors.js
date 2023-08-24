import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, { color: "teal", defaultValue: "first" }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "first" }, "Teal tab"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "second", color: "blue" }, "Blue tab")), /* @__PURE__ */ React.createElement(Tabs.Panel, { value: "first", pt: "xs" }, "First tab color is teal, it gets this value from context"), /* @__PURE__ */ React.createElement(Tabs.Panel, { value: "second", pt: "xs" }, "Second tab color is blue, it gets this value from props, props have the priority and will override context value"));
}
const colors = {
  type: "code",
  code,
  component: Demo
};

export { colors };
//# sourceMappingURL=Tabs.demo.colors.js.map
