import React from 'react';
import { useMantineColorScheme, Group, Button } from '@mantine/core';

const code = `
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`;
function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { onClick: () => setColorScheme("light") }, "Light"), /* @__PURE__ */ React.createElement(Button, { onClick: () => setColorScheme("dark") }, "Dark"), /* @__PURE__ */ React.createElement(Button, { onClick: () => setColorScheme("auto") }, "Auto"), /* @__PURE__ */ React.createElement(Button, { onClick: clearColorScheme }, "Clear"));
}
const colorScheme = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { colorScheme };
//# sourceMappingURL=Theming.demo.colorScheme.js.map
