import React from 'react';
import { Group, Text, Divider } from '@mantine/core';

const code = `
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Text, null, "Label"), /* @__PURE__ */ React.createElement(Divider, { orientation: "vertical" }), /* @__PURE__ */ React.createElement(Text, null, "Label"), /* @__PURE__ */ React.createElement(Divider, { size: "sm", orientation: "vertical" }), /* @__PURE__ */ React.createElement(Text, null, "Label"), /* @__PURE__ */ React.createElement(Divider, { size: "md", orientation: "vertical" }), /* @__PURE__ */ React.createElement(Text, null, "Label"), /* @__PURE__ */ React.createElement(Divider, { size: "lg", orientation: "vertical" }), /* @__PURE__ */ React.createElement(Text, null, "Label"), /* @__PURE__ */ React.createElement(Divider, { size: "xl", orientation: "vertical" }), /* @__PURE__ */ React.createElement(Text, null, "Label"));
}
const orientation = {
  type: "code",
  code,
  component: Demo
};

export { orientation };
//# sourceMappingURL=Divider.demo.orientation.js.map
