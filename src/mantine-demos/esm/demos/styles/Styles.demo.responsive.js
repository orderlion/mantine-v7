import React from 'react';
import classes from './Styles.demo.responsive.module.css.js';

const code = `
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`;
const cssCode = `
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", { className: classes.demo }, "Demo");
}
const responsive = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

export { responsive };
//# sourceMappingURL=Styles.demo.responsive.js.map
