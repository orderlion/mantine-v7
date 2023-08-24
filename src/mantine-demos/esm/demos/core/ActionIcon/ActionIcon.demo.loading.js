import React from 'react';
import { Group, ActionIcon } from '@mantine/core';

const code = `
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(ActionIcon, { loading: true, "aria-label": "Filled loading" }), /* @__PURE__ */ React.createElement(ActionIcon, { variant: "light", loading: true, "aria-label": "Light loading" }), /* @__PURE__ */ React.createElement(ActionIcon, { variant: "outline", loading: true, "aria-label": "Outline loading" }));
}
const loading = {
  type: "code",
  component: Demo,
  code
};

export { loading };
//# sourceMappingURL=ActionIcon.demo.loading.js.map
