'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Styles_demo_sizesMedia_module = require('./Styles.demo.sizesMedia.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`;
const cssCode = `
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "My input",
      placeholder: "My input",
      size: "xs",
      className: Styles_demo_sizesMedia_module['default']["input-mobile"]
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "My input",
      placeholder: "My input",
      size: "xl",
      className: Styles_demo_sizesMedia_module['default']["input-desktop"]
    }
  ));
}
const sizesMedia = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.sizesMedia = sizesMedia;
//# sourceMappingURL=Styles.demo.sizesMedia.js.map
