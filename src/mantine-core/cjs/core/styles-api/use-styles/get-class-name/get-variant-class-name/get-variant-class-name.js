'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return (options == null ? void 0 : options.variant) && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}

exports.getVariantClassName = getVariantClassName;
//# sourceMappingURL=get-variant-class-name.js.map
