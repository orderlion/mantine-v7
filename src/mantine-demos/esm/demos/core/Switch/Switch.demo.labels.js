import React from 'react';
import { Group, Switch } from '@mantine/core';

const code = `
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Switch, { size: "xs", onLabel: "ON", offLabel: "OFF" }), /* @__PURE__ */ React.createElement(Switch, { size: "sm", onLabel: "ON", offLabel: "OFF" }), /* @__PURE__ */ React.createElement(Switch, { size: "md", onLabel: "ON", offLabel: "OFF" }), /* @__PURE__ */ React.createElement(Switch, { size: "lg", onLabel: "ON", offLabel: "OFF" }), /* @__PURE__ */ React.createElement(Switch, { size: "xl", onLabel: "ON", offLabel: "OFF" }));
}
const labels = {
  type: "code",
  component: Demo,
  code
};

export { labels };
//# sourceMappingURL=Switch.demo.labels.js.map
