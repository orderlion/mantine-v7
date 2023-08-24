import React from 'react';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Progress.Root, { size: "xl" }, /* @__PURE__ */ React.createElement(Progress.Section, { value: 35, color: "cyan" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Documents")), /* @__PURE__ */ React.createElement(Progress.Section, { value: 28, color: "pink" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Photos")), /* @__PURE__ */ React.createElement(Progress.Section, { value: 15, color: "orange" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Other")));
}
const compound = {
  type: "code",
  component: Demo,
  code
};

export { compound };
//# sourceMappingURL=Progress.demo.compound.js.map
