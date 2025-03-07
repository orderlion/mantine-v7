'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector
}) {
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

exports.getStaticClassNames = getStaticClassNames;
//# sourceMappingURL=get-static-class-names.js.map
