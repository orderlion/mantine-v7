'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Rating_context = require('./Rating.context.js');
var Rating_module = require('./Rating.module.css.js');
var RatingItem = require('./RatingItem/RatingItem.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var DirectionProvider = require('../../core/DirectionProvider/DirectionProvider.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
function roundValueTo(value, to) {
  var _a;
  const rounded = Math.round(value / to) * to;
  const precision = ((_a = `${to}`.split(".")[1]) == null ? void 0 : _a.length) || 0;
  return Number(rounded.toFixed(precision));
}
const defaultProps = {
  size: "sm",
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: "yellow"
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { size, color }) => ({
  root: {
    "--rating-size": getSize.getSize(size, "rating-size"),
    "--rating-color": getThemeColor.getThemeColor(color, theme)
  }
}));
const Rating = factory.factory((_props, ref) => {
  const props = useProps.useProps("Rating", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    name,
    id,
    value,
    defaultValue,
    onChange,
    fractions,
    count,
    onMouseEnter,
    readOnly,
    onMouseMove,
    onHover,
    onMouseLeave,
    size,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "name",
    "id",
    "value",
    "defaultValue",
    "onChange",
    "fractions",
    "count",
    "onMouseEnter",
    "readOnly",
    "onMouseMove",
    "onHover",
    "onMouseLeave",
    "size",
    "variant",
    "getSymbolLabel",
    "color",
    "emptySymbol",
    "fullSymbol",
    "highlightSelectedOnly"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Rating",
    classes: Rating_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { dir } = DirectionProvider.useDirection();
  const _name = hooks.useId(name);
  const _id = hooks.useId(id);
  const rootRef = React.useRef(null);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange
  });
  const [hovered, setHovered] = React.useState(-1);
  const [isOutside, setOutside] = React.useState(true);
  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count);
  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;
  const handleMouseEnter = (event) => {
    onMouseEnter == null ? void 0 : onMouseEnter(event);
    !readOnly && setOutside(false);
  };
  const handleMouseMove = (event) => {
    onMouseMove == null ? void 0 : onMouseMove(event);
    if (readOnly) {
      return;
    }
    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;
    const hoverPosition = dir === "rtl" ? right - event.clientX : event.clientX - left;
    const hoverValue = hoverPosition / symbolWidth;
    const rounded = hooks.clamp(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      _count
    );
    setHovered(rounded);
    rounded !== hovered && (onHover == null ? void 0 : onHover(rounded));
  };
  const handleMouseLeave = (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    if (readOnly) {
      return;
    }
    setHovered(-1);
    setOutside(true);
    hovered !== -1 && (onHover == null ? void 0 : onHover(-1));
  };
  const handleItemBlur = () => isOutside && setHovered(-1);
  const handleChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setValue(event);
      } else {
        setValue(parseFloat(event.target.value));
      }
    }
  };
  const items = Array(_count).fill(0).map((_, index) => {
    const integerValue = index + 1;
    const fractionItems = Array.from(new Array(index === 0 ? _fractions + 1 : _fractions));
    const isGroupActive = !readOnly && Math.ceil(hovered) === integerValue;
    return /* @__PURE__ */ React__default.createElement(
      "div",
      __spreadValues({
        key: integerValue,
        "data-active": isGroupActive || void 0
      }, getStyles("symbolGroup")),
      fractionItems.map((__, fractionIndex) => {
        const fractionValue = decimalUnit * (index === 0 ? fractionIndex : fractionIndex + 1);
        const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);
        return /* @__PURE__ */ React__default.createElement(
          RatingItem.RatingItem,
          {
            key: `${integerValue}-${symbolValue}`,
            size,
            getSymbolLabel,
            emptyIcon: emptySymbol,
            fullIcon: fullSymbol,
            full: highlightSelectedOnly ? symbolValue === finalValue : symbolValue <= finalValue,
            active: symbolValue === finalValue,
            checked: symbolValue === stableValueRounded,
            readOnly,
            fractionValue,
            value: symbolValue,
            name: _name,
            onChange: handleChange,
            onBlur: handleItemBlur,
            id: `${_id}-${index}-${fractionIndex}`
          }
        );
      })
    );
  });
  return /* @__PURE__ */ React__default.createElement(Rating_context.RatingProvider, { value: { getStyles } }, /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref: hooks.useMergedRef(rootRef, ref)
    }, getStyles("root")), {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      variant,
      size
    }), others),
    items
  ));
});
Rating.classes = Rating_module['default'];
Rating.displayName = "@mantine/core/Rating";

exports.Rating = Rating;
//# sourceMappingURL=Rating.js.map
