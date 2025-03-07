'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Pagination_context = require('../Pagination.context.js');
var Pagination_module = require('../Pagination.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var createEventHandler = require('../../../core/utils/create-event-handler/create-event-handler.js');

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
const defaultProps = {
  siblings: 1,
  boundaries: 1,
  size: "md"
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { size, radius, color }) => ({
    root: {
      "--pagination-control-radius": getSize.getRadius(radius),
      "--pagination-control-size": getSize.getSize(size, "pagination-control-size"),
      "--pagination-control-fz": getSize.getFontSize(size),
      "--pagination-active-bg": getThemeColor.getThemeColor(color, theme)
    }
  })
);
const PaginationRoot = factory.factory((_props, ref) => {
  const props = useProps.useProps("PaginationRoot", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "total",
    "value",
    "defaultValue",
    "onChange",
    "disabled",
    "siblings",
    "boundaries",
    "color",
    "radius",
    "onNextPage",
    "onPreviousPage",
    "onFirstPage",
    "onLastPage",
    "getItemProps"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Pagination",
    classes: Pagination_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { range, setPage, next, previous, active, first, last } = hooks.usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries
  });
  const handleNextPage = createEventHandler.createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler.createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler.createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler.createEventHandler(onLastPage, last);
  return /* @__PURE__ */ React__default.createElement(
    Pagination_context.PaginationProvider,
    {
      value: {
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles
      }
    },
    /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.classes = Pagination_module['default'];
PaginationRoot.displayName = "@mantine/core/PaginationRoot";

exports.PaginationRoot = PaginationRoot;
//# sourceMappingURL=PaginationRoot.js.map
