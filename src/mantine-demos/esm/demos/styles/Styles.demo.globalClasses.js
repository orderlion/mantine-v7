import React from 'react';
import { Group } from '@mantine/core';

const code = `
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="mantine-focus-auto">
        Focus auto
      </button>
      <button type="button" className="mantine-focus-always">
        Focus always
      </button>
      <button type="button" className="mantine-focus-never">
        Focus never
      </button>
      <button type="button" className="mantine-active">
        Active
      </button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mantine-focus-auto" }, "Focus auto"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mantine-focus-always" }, "Focus always"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mantine-focus-never" }, "Focus never"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mantine-active" }, "Active"));
}
const globalClasses = {
  type: "code",
  component: Demo,
  code
};

export { globalClasses };
//# sourceMappingURL=Styles.demo.globalClasses.js.map
