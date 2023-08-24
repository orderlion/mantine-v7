import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { Anchor, Center, rem, Box } from '@mantine/core';

const code = `
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev", target: "_blank" }, /* @__PURE__ */ React.createElement(Center, { inline: true }, /* @__PURE__ */ React.createElement(IconArrowLeft, { style: { width: rem(12), height: rem(12) }, className: "mantine-rotate-rtl" }), /* @__PURE__ */ React.createElement(Box, { ml: 5 }, "Back to Mantine website")));
}
const inline = {
  type: "code",
  code,
  component: Demo
};

export { inline };
//# sourceMappingURL=Center.demo.inline.js.map
