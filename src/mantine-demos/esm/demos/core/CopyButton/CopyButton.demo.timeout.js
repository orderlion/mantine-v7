import React from 'react';
import { CopyButton, Tooltip, ActionIcon, rem } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

const code = `
import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(CopyButton, { value: "https://mantine.dev", timeout: 2e3 }, ({ copied, copy }) => /* @__PURE__ */ React.createElement(Tooltip, { label: copied ? "Copied" : "Copy", withArrow: true, position: "right" }, /* @__PURE__ */ React.createElement(ActionIcon, { color: copied ? "teal" : "gray", variant: "subtle", onClick: copy }, copied ? /* @__PURE__ */ React.createElement(IconCheck, { style: { width: rem(16) } }) : /* @__PURE__ */ React.createElement(IconCopy, { style: { width: rem(16) } }))));
}
const timeout = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { timeout };
//# sourceMappingURL=CopyButton.demo.timeout.js.map
