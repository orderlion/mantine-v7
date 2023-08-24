import React from 'react';
import { Center, Box } from '@mantine/core';

const code = `
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Center, { maw: 400, h: 100, bg: "var(--mantine-color-gray-light)" }, /* @__PURE__ */ React.createElement(Box, { bg: "var(--mantine-color-blue-light)" }, "All elements inside Center are centered"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Center.demo.usage.js.map
