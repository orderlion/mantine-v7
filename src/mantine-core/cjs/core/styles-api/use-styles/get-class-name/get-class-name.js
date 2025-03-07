'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cx = require('clsx');
var getStaticClassNames = require('./get-static-class-names/get-static-class-names.js');
var getThemeClassNames = require('./get-theme-class-names/get-theme-class-names.js');
var getGlobalClassNames = require('./get-global-class-names/get-global-class-names.js');
var getVariantClassName = require('./get-variant-class-name/get-variant-class-name.js');
var getRootClassName = require('./get-root-class-name/get-root-class-name.js');
var getSelectorClassName = require('./get-selector-class-name/get-selector-class-name.js');
var getResolvedClassNames = require('./get-resolved-class-names/get-resolved-class-names.js');
var getOptionsClassNames = require('./get-options-class-names/get-options-class-names.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx
}) {
  return cx__default(
    getGlobalClassNames.getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames.getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName.getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames.getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames.getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName.getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName.getSelectorClassName({ selector, classes, unstyled }),
    getStaticClassNames.getStaticClassNames({ themeName, classNamesPrefix, selector }),
    options == null ? void 0 : options.className
  );
}

exports.getClassName = getClassName;
//# sourceMappingURL=get-class-name.js.map
