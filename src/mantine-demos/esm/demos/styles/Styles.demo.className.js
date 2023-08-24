import React from 'react';
import { Box } from '@mantine/core';
import classes from './Styles.demo.className.module.css.js';

const code = `
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`;
const cssCode = `
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 0.1rem 0.7rem;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, { className: classes.box }, "Box component with ", /* @__PURE__ */ React.createElement("span", { className: classes.highlight }, "some styles"));
}
const className = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode }
  ]
};

export { className };
//# sourceMappingURL=Styles.demo.className.js.map
