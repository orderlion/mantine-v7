'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Styles_demo_rtlMixin_module = require('./Styles.demo.rtlMixin.module.css.js');

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
  return /* @__PURE__ */ React__default.createElement("div", { className: Styles_demo_rtlMixin_module['default'].demo }, "Demo");
}
const rtlMixin = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.rtlMixin = rtlMixin;
//# sourceMappingURL=Styles.demo.rtlMixin.js.map
