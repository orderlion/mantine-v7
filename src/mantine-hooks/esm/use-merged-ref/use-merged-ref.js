import { useCallback } from 'react';

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
  return useCallback(mergeRefs(...refs), refs);
}

export { assignRef, mergeRefs, useMergedRef };
//# sourceMappingURL=use-merged-ref.js.map
