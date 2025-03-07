'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cx = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return cx__default(
    (options == null ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    (options == null ? void 0 : options.active) && !unstyled && theme.activeClassName
  );
}

exports.FOCUS_CLASS_NAMES = FOCUS_CLASS_NAMES;
exports.getGlobalClassNames = getGlobalClassNames;
//# sourceMappingURL=get-global-class-names.js.map
