import { resolveClassNames } from '../resolve-class-names/resolve-class-names.js';

function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options == null ? void 0 : options.classNames,
    props: (options == null ? void 0 : options.props) || props,
    stylesCtx
  })[selector];
}

export { getOptionsClassNames };
//# sourceMappingURL=get-options-class-names.js.map
