import React from 'react';
import { Chip, Group } from '@mantine/core';

function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Chip, { value: "default", variant: "outline" }, "Outline default"), /* @__PURE__ */ React.createElement(Chip, { value: "checked", variant: "outline" }, "Outline checked"), /* @__PURE__ */ React.createElement(Chip, { value: "checked-disabled", disabled: true, variant: "outline" }, "Outline checked disabled"))), /* @__PURE__ */ React.createElement(Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(Chip, { value: "default", variant: "light" }, "Light default"), /* @__PURE__ */ React.createElement(Chip, { value: "checked", variant: "light" }, "Light checked"), /* @__PURE__ */ React.createElement(Chip, { value: "checked-disabled", disabled: true, variant: "light" }, "Light checked disabled"))), /* @__PURE__ */ React.createElement(Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(Chip, { value: "default", variant: "filled" }, "Filled default"), /* @__PURE__ */ React.createElement(Chip, { value: "checked", variant: "filled" }, "Filled checked"), /* @__PURE__ */ React.createElement(Chip, { value: "checked-disabled", disabled: true, variant: "filled" }, "Filled checked disabled"))));
}
const states = {
  type: "code",
  component: Demo
};

export { states };
//# sourceMappingURL=Chip.demo.states.js.map
