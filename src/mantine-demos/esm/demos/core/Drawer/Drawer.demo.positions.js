import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState("top");
  const open = (p) => {
    setPosition(p);
    setOpened(true);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Drawer,
    {
      opened,
      onClose: () => setOpened(false),
      padding: "md",
      position,
      withCloseButton: false
    },
    "Press escape to close the drawer"
  ), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => open("left") }, "Left"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => open("right") }, "Right"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => open("top") }, "Top"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => open("bottom") }, "Bottom")));
}
const positions = {
  type: "code",
  component: Demo
};

export { positions };
//# sourceMappingURL=Drawer.demo.positions.js.map
