import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { loading: true }, "Filled button"), /* @__PURE__ */ React.createElement(Button, { variant: "light", loading: true }, "Light button"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", loading: true }, "Outline button"));
}
const loading = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { loading };
//# sourceMappingURL=Button.demo.loading.js.map
