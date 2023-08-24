'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const TextStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--text-fz": "Controls `font-size` property",
      "--text-lh": "Controls `line-height` property",
      "--text-gradient": "Text fill gradient",
      "--text-line-clamp": "Number of lines that should be visible"
    }
  },
  modifiers: [
    {
      modifier: "data-truncate",
      selector: "root",
      value: "Value of `truncate` prop",
      condition: "`truncate` prop is set"
    },
    { modifier: "data-line-clamp", selector: "root", condition: "`lineClamp` prop is a number" },
    { modifier: "data-inline", selector: "root", condition: "`inline` prop is set" },
    { modifier: "data-inherit", selector: "root", condition: "`inherit` prop is set" }
  ]
};

exports.TextStylesApi = TextStylesApi;
//# sourceMappingURL=Text.styles-api.js.map
