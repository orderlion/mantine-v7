import React from 'react';
import { Progress, Tooltip } from '@mantine/core';

const code = `
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents \u2013 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos \u2013 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other \u2013 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Progress.Root, { size: 40 }, /* @__PURE__ */ React.createElement(Tooltip, { label: "Documents \u2013 33Gb" }, /* @__PURE__ */ React.createElement(Progress.Section, { value: 33, color: "cyan" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Documents"))), /* @__PURE__ */ React.createElement(Tooltip, { label: "Photos \u2013 28Gb" }, /* @__PURE__ */ React.createElement(Progress.Section, { value: 28, color: "pink" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Photos"))), /* @__PURE__ */ React.createElement(Tooltip, { label: "Other \u2013 15Gb" }, /* @__PURE__ */ React.createElement(Progress.Section, { value: 15, color: "orange" }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Other"))));
}
const tooltips = {
  type: "code",
  component: Demo,
  code
};

export { tooltips };
//# sourceMappingURL=Progress.demo.tooltips.js.map
