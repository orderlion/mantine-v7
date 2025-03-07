import { mergeVars } from './merge-vars.js';

function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName
}) {
  var _a;
  return (_a = mergeVars([
    varsResolver == null ? void 0 : varsResolver(theme, props, stylesCtx),
    ...themeName.map((name) => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = theme.components) == null ? void 0 : _a2[name]) == null ? void 0 : _b.vars) == null ? void 0 : _c.call(_b, theme, props, stylesCtx);
    }),
    vars == null ? void 0 : vars(theme, props, stylesCtx)
  ])) == null ? void 0 : _a[selector];
}

export { resolveVars };
//# sourceMappingURL=resolve-vars.js.map
