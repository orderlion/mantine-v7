'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Pagination_context = require('../Pagination.context.js');
var Pagination_icons = require('../Pagination.icons.js');
var PaginationControl = require('../PaginationControl/PaginationControl.js');
var createPolymorphicComponent = require('../../../core/factory/create-polymorphic-component.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function createEdgeComponent({ icon, name, action, type }) {
  const defaultProps = { icon };
  const Component = React.forwardRef((props, ref) => {
    const _a = useProps.useProps(name, defaultProps, props), { icon: _icon } = _a, others = __objRest(_a, ["icon"]);
    const Icon = _icon;
    const ctx = Pagination_context.usePaginationContext();
    const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
    return /* @__PURE__ */ React__default.createElement(
      PaginationControl.PaginationControl,
      __spreadValues({
        disabled: ctx.disabled || disabled,
        ref,
        onClick: ctx[action],
        withPadding: false
      }, others),
      /* @__PURE__ */ React__default.createElement(
        Icon,
        {
          style: {
            width: "calc(var(--pagination-control-size) / 1.8)",
            height: "calc(var(--pagination-control-size) / 1.8)"
          }
        }
      )
    );
  });
  Component.displayName = `@mantine/core/${name}`;
  return createPolymorphicComponent.createPolymorphicComponent(Component);
}
const PaginationNext = createEdgeComponent({
  icon: Pagination_icons.PaginationNextIcon,
  name: "PaginationNext",
  action: "onNext",
  type: "next"
});
const PaginationPrevious = createEdgeComponent({
  icon: Pagination_icons.PaginationPreviousIcon,
  name: "PaginationPrevious",
  action: "onPrevious",
  type: "previous"
});
const PaginationFirst = createEdgeComponent({
  icon: Pagination_icons.PaginationFirstIcon,
  name: "PaginationFirst",
  action: "onFirst",
  type: "previous"
});
const PaginationLast = createEdgeComponent({
  icon: Pagination_icons.PaginationLastIcon,
  name: "PaginationLast",
  action: "onLast",
  type: "next"
});

exports.PaginationFirst = PaginationFirst;
exports.PaginationLast = PaginationLast;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.createEdgeComponent = createEdgeComponent;
//# sourceMappingURL=PaginationEdges.js.map
