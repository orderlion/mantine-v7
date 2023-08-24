import React from 'react';
import classes from './Styles.demo.rtlMixin.module.css.js';

const code = `
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`;
const cssCode = `
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", { className: classes.demo }, "Demo");
}
const rtlMixin = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

export { rtlMixin };
//# sourceMappingURL=Styles.demo.rtlMixin.js.map
