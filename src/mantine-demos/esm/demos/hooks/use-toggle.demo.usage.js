import React from 'react';
import { Button } from '@mantine/core';
import { useToggle, upperFirst } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;
function Demo() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);
  return /* @__PURE__ */ React.createElement(Button, { color: value, onClick: () => toggle() }, upperFirst(value));
}
const useToggleDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { useToggleDemo };
//# sourceMappingURL=use-toggle.demo.usage.js.map
