import React from 'react';
import { Text, Code, Group, Button, MantineThemeProvider } from '@mantine/core';

function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, null, "Focus ring: ", /* @__PURE__ */ React.createElement(Code, null, "auto")), /* @__PURE__ */ React.createElement(Group, { mt: "xs" }, /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 1"), /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 2")), /* @__PURE__ */ React.createElement(MantineThemeProvider, { inherit: true, theme: { focusRing: "always" } }, /* @__PURE__ */ React.createElement(Text, { mt: "lg" }, "Focus ring: ", /* @__PURE__ */ React.createElement(Code, null, "always")), /* @__PURE__ */ React.createElement(Group, { mt: "xs" }, /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 1"), /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 2"))), /* @__PURE__ */ React.createElement(MantineThemeProvider, { inherit: true, theme: { focusRing: "never" } }, /* @__PURE__ */ React.createElement(Text, { mt: "lg" }, "Focus ring: ", /* @__PURE__ */ React.createElement(Code, null, "never")), /* @__PURE__ */ React.createElement(Group, { mt: "xs" }, /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 1"), /* @__PURE__ */ React.createElement(Button, { size: "xs" }, "Button 2"))));
}
const focusRing = {
  type: "code",
  component: Demo
};

export { focusRing };
//# sourceMappingURL=Theming.demo.focusRing.js.map
