import React from 'react';
import { Button } from '@mantine/core';
import classes from './Button.demo.disabledStyles.module.css.js';

const code = `
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
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
  return /* @__PURE__ */ React.createElement(Button, { className: classes.button, disabled: true }, "Disabled with styles");
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
//# sourceMappingURL=Button.demo.disabledStyles.js.map
