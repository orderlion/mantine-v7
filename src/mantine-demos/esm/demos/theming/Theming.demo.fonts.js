import React from 'react';
import { Title, Group, Button, Code } from '@mantine/core';

const code = `
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { order: 3, ff: "Greycliff CF, sans-serif", ta: "center" }, "Greycliff CF title"), /* @__PURE__ */ React.createElement(Group, { mt: "md" }, /* @__PURE__ */ React.createElement(Button, { ff: "Verdana, sans-serif" }, "Verdana button"), /* @__PURE__ */ React.createElement(Code, { ff: "Monaco, Courier, monospace" }, "Monaco, Courier Code")));
}
const fonts = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { fonts };
//# sourceMappingURL=Theming.demo.fonts.js.map
