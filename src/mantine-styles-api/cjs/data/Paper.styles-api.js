'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PaperStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--paper-radius": "Controls `border-radius`",
      "--paper-shadow": "Controls `box-shadow`"
    }
  },
  modifiers: [
    { modifier: "data-with-border", selector: "root", condition: "`withBorderProp` is set" }
  ]
};

exports.PaperStylesApi = PaperStylesApi;
//# sourceMappingURL=Paper.styles-api.js.map
