'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');

function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  hooks.useIsomorphicEffect(() => {
    var _a;
    if (respectReducedMotion) {
      (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

exports.useRespectReduceMotion = useRespectReduceMotion;
//# sourceMappingURL=use-respect-reduce-motion.js.map
