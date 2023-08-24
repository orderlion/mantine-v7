'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Styles_demo_responsive_module = require('./Styles.demo.responsive.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement("div", { className: Styles_demo_responsive_module['default'].demo }, "Demo");
}
const responsive = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.responsive = responsive;
//# sourceMappingURL=Styles.demo.responsive.js.map
