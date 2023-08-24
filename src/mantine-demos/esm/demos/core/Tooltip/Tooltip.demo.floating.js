import React from 'react';
import { Tooltip, Box } from '@mantine/core';

const code = `
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip.Floating, { label: "Floating tooltip" }, /* @__PURE__ */ React.createElement(Box, { p: "xl", bg: "var(--mantine-color-blue-light)", style: { cursor: "default" } }, "Hover over the box to see tooltip"));
}
const floating = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { floating };
//# sourceMappingURL=Tooltip.demo.floating.js.map
