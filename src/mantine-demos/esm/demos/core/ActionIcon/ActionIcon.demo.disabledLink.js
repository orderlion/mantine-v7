import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      component: "a",
      href: "https://mantine.dev",
      "data-disabled": true,
      size: "xl",
      "aria-label": "Open in a new tab",
      onClick: (event) => event.preventDefault()
    },
    /* @__PURE__ */ React.createElement(IconExternalLink, null)
  );
}
const disabledLink = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { disabledLink };
//# sourceMappingURL=ActionIcon.demo.disabledLink.js.map
