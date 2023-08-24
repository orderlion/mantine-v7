'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var HeaderControl = require('./HeaderControl.js');
var ColorSchemeControl_module = require('./ColorSchemeControl.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

function ColorSchemeControl() {
  const { setColorScheme } = core.useMantineColorScheme();
  const computedColorScheme = core.useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ React__default.createElement(
    HeaderControl.HeaderControl,
    {
      onClick: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
      tooltip: `${computedColorScheme === "dark" ? "Light" : "Dark"} mode`
    },
    /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, { className: cx__default(ColorSchemeControl_module['default'].icon, ColorSchemeControl_module['default'].light), stroke: 1.5 }),
    /* @__PURE__ */ React__default.createElement(iconsReact.IconMoon, { className: cx__default(ColorSchemeControl_module['default'].icon, ColorSchemeControl_module['default'].dark), stroke: 1.5 })
  );
}

exports.ColorSchemeControl = ColorSchemeControl;
//# sourceMappingURL=ColorSchemeControl.js.map
