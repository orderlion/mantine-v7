import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './ActionIcon.demo.disabledStyles.module.css.js';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
`;
const cssCode = `
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", className: classes.button, disabled: true, "aria-label": "Disabled with styles" }, /* @__PURE__ */ React.createElement(IconHeart, null));
}
const disabledStyles = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

export { disabledStyles };
//# sourceMappingURL=ActionIcon.demo.disabledStyles.js.map
