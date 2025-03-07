'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@floating-ui/react');
var TooltipGroup_context = require('./TooltipGroup.context.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const defaultProps = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = useProps.useProps("TooltipGroup", defaultProps, props);
  return /* @__PURE__ */ React__default.createElement(TooltipGroup_context.TooltipGroupProvider, { value: true }, /* @__PURE__ */ React__default.createElement(react.FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay } }, children));
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";

exports.TooltipGroup = TooltipGroup;
//# sourceMappingURL=TooltipGroup.js.map
