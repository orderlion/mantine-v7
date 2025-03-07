import { useIsomorphicEffect } from '@mantine/hooks';

function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    var _a;
    if (respectReducedMotion) {
      (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

export { useRespectReduceMotion };
//# sourceMappingURL=use-respect-reduce-motion.js.map
