'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var SliderRoot = require('../SliderRoot/SliderRoot.js');
var Track = require('../Track/Track.js');
var Thumb = require('../Thumb/Thumb.js');
var getPosition = require('../utils/get-position/get-position.js');
var getChangeValue = require('../utils/get-change-value/get-change-value.js');
var getGloatingValue = require('../utils/get-floating-value/get-gloating-value.js');
var getPrecision = require('../utils/get-precision/get-precision.js');
var Slider_context = require('../Slider.context.js');
var Slider_module = require('../Slider.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var DirectionProvider = require('../../../core/DirectionProvider/DirectionProvider.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
const defaultProps = {
  size: "md",
  radius: "xl",
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  thumbLabel: "",
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize.getSize(size, "slider-size"),
      "--slider-color": getThemeColor.getThemeColor(color, theme),
      "--slider-radius": getSize.getRadius(radius),
      "--slider-thumb-size": typeof thumbSize !== "undefined" ? rem.rem(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
const Slider = factory.factory((_props, ref) => {
  const props = useProps.useProps("Slider", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "value",
    "onChange",
    "onChangeEnd",
    "size",
    "min",
    "max",
    "step",
    "precision",
    "defaultValue",
    "name",
    "marks",
    "label",
    "labelTransitionProps",
    "labelAlwaysOn",
    "thumbLabel",
    "showLabelOnHover",
    "thumbChildren",
    "disabled",
    "unstyled",
    "scale",
    "inverted",
    "className",
    "style",
    "vars"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Slider",
    props,
    classes: Slider_module['default'],
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver
  });
  const { dir } = DirectionProvider.useDirection();
  const [hovered, setHovered] = React.useState(false);
  const [_value, setValue] = hooks.useUncontrolled({
    value: typeof value === "number" ? hooks.clamp(value, min, max) : value,
    defaultValue: typeof defaultValue === "number" ? hooks.clamp(defaultValue, min, max) : defaultValue,
    finalValue: hooks.clamp(0, min, max),
    onChange
  });
  const valueRef = React.useRef(_value);
  const root = React.useRef();
  const thumb = React.useRef();
  const position = getPosition.getPosition({ value: _value, min, max });
  const scaledValue = scale(_value);
  const _label = typeof label === "function" ? label(scaledValue) : label;
  const precision = _precision != null ? _precision : getPrecision.getPrecision(step);
  const handleChange = React.useCallback(
    ({ x }) => {
      if (!disabled) {
        const nextValue = getChangeValue.getChangeValue({
          value: x,
          min,
          max,
          step,
          precision
        });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision, setValue]
  );
  const { ref: container, active } = hooks.useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  const handleTrackKeydownCapture = (event) => {
    var _a2, _b, _c, _d, _e, _f;
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          (_a2 = thumb.current) == null ? void 0 : _a2.focus();
          const nextValue = getGloatingValue.getFloatingValue(
            Math.min(Math.max(_value + step, min), max),
            precision
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          (_b = thumb.current) == null ? void 0 : _b.focus();
          const nextValue = getGloatingValue.getFloatingValue(
            Math.min(Math.max(dir === "rtl" ? _value - step : _value + step, min), max),
            precision
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          (_c = thumb.current) == null ? void 0 : _c.focus();
          const nextValue = getGloatingValue.getFloatingValue(
            Math.min(Math.max(_value - step, min), max),
            precision
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          (_d = thumb.current) == null ? void 0 : _d.focus();
          const nextValue = getGloatingValue.getFloatingValue(
            Math.min(Math.max(dir === "rtl" ? _value + step : _value - step, min), max),
            precision
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "Home": {
          event.preventDefault();
          (_e = thumb.current) == null ? void 0 : _e.focus();
          onChangeEnd == null ? void 0 : onChangeEnd(min);
          setValue(min);
          break;
        }
        case "End": {
          event.preventDefault();
          (_f = thumb.current) == null ? void 0 : _f.focus();
          onChangeEnd == null ? void 0 : onChangeEnd(max);
          setValue(max);
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ React__default.createElement(Slider_context.SliderProvider, { value: { getStyles } }, /* @__PURE__ */ React__default.createElement(
    SliderRoot.SliderRoot,
    __spreadProps(__spreadValues({}, others), {
      ref: hooks.useMergedRef(ref, root),
      onKeyDownCapture: handleTrackKeydownCapture,
      onMouseDownCapture: () => {
        var _a2;
        return (_a2 = root.current) == null ? void 0 : _a2.focus();
      },
      size,
      disabled
    }),
    /* @__PURE__ */ React__default.createElement(
      Track.Track,
      {
        inverted,
        offset: 0,
        filled: position,
        marks,
        min,
        max,
        value: scaledValue,
        disabled,
        containerProps: {
          ref: container,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0
        }
      },
      /* @__PURE__ */ React__default.createElement(
        Thumb.Thumb,
        {
          max,
          min,
          value: scaledValue,
          position,
          dragging: active,
          label: _label,
          ref: thumb,
          labelTransitionProps,
          labelAlwaysOn,
          thumbLabel,
          showLabelOnHover,
          isHovered: hovered,
          disabled
        },
        thumbChildren
      )
    ),
    /* @__PURE__ */ React__default.createElement("input", { type: "hidden", name, value: scaledValue })
  ));
});
Slider.classes = Slider_module['default'];
Slider.displayName = "@mantine/core/Slider";

exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map
