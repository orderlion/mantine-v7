import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState("top");
  const open = (s) => {
    setSize(s);
    setOpened(true);
  };
  const controls = ["xs", "sm", "md", "lg", "xl", "100%", "40rem", "25%"].map((s) => /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => open(s), key: s }, s));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Drawer,
    {
      opened,
      onClose: () => setOpened(false),
      padding: "md",
      size,
      withCloseButton: false
    },
    "Press escape to close the drawer"
  ), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, controls));
}
const sizes = {
  type: "code",
  component: Demo
};

export { sizes };
//# sourceMappingURL=Drawer.demo.sizes.js.map
