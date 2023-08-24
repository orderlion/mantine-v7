import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { hiddenFrom: "sm", color: "orange" }, "Hidden from sm"), /* @__PURE__ */ React.createElement(Button, { visibleFrom: "sm", color: "cyan" }, "Visible from sm"), /* @__PURE__ */ React.createElement(Button, { visibleFrom: "md", color: "pink" }, "Visible from md"));
}
const hiddenVisible = {
  type: "code",
  component: Demo,
  code
};

export { hiddenVisible };
//# sourceMappingURL=Styles.demo.hiddenVisible.js.map
