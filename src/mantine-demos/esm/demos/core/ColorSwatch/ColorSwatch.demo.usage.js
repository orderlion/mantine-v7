import React from 'react';
import { Group, ColorSwatch } from '@mantine/core';

const code = `
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(ColorSwatch, { color: "#009790" }), /* @__PURE__ */ React.createElement(ColorSwatch, { color: "rgba(234, 22, 174, 0.5)" }), /* @__PURE__ */ React.createElement(ColorSwatch, { color: "var(--mantine-color-orange-5)" }));
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { usage };
//# sourceMappingURL=ColorSwatch.demo.usage.js.map
