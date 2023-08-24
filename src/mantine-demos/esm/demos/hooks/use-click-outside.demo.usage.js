import React, { useState } from 'react';
import { Group, Button, Paper, rem } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => setOpened(true) }, "Open dropdown")), opened && /* @__PURE__ */ React.createElement(
    Paper,
    {
      ref,
      shadow: "sm",
      style: {
        width: rem(300),
        height: rem(60),
        position: "absolute",
        top: 0,
        left: `calc(50% - ${rem(150)})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
      }
    },
    /* @__PURE__ */ React.createElement("span", null, "Click outside to close")
  )));
}
const useClickOutsideUsage = {
  type: "code",
  component: Demo,
  code,
  dimmed: true
};

export { useClickOutsideUsage };
//# sourceMappingURL=use-click-outside.demo.usage.js.map
