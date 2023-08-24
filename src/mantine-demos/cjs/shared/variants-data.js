'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const STATIC_VARIANTS = ["filled", "light", "outline", "transparent", "white", "default"];
const INTERACTIVE_VARIANTS = [
  "default",
  "filled",
  "light",
  "outline",
  "subtle",
  "transparent",
  "white"
];
const interactiveVariantsControl = {
  type: "select",
  prop: "variant",
  data: INTERACTIVE_VARIANTS,
  initialValue: "filled",
  libraryValue: "__none__"
};
const staticVariantsControl = {
  type: "select",
  prop: "variant",
  data: STATIC_VARIANTS,
  initialValue: "filled",
  libraryValue: "__none__"
};

exports.INTERACTIVE_VARIANTS = INTERACTIVE_VARIANTS;
exports.STATIC_VARIANTS = STATIC_VARIANTS;
exports.interactiveVariantsControl = interactiveVariantsControl;
exports.staticVariantsControl = staticVariantsControl;
//# sourceMappingURL=variants-data.js.map
