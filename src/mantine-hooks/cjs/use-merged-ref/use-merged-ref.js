'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return React.useCallback(mergeRefs(...refs), refs);
}

exports.assignRef = assignRef;
exports.mergeRefs = mergeRefs;
exports.useMergedRef = useMergedRef;
//# sourceMappingURL=use-merged-ref.js.map
