import React, { useState, useCallback, useEffect, Children } from 'react';
import { createVarsResolver, rem, getSpacing, factory, useProps, useStyles, useRandomClassName, useDirection, UnstyledButton, Box, AccordionChevron } from '@mantine/core';
import { clamp } from '@mantine/hooks';
import useEmblaCarousel from 'embla-carousel-react';
import { getChevronRotation } from './get-chevron-rotation.js';
import { CarouselProvider } from './Carousel.context.js';
import { CarouselSlide } from './CarouselSlide/CarouselSlide.js';
import { CarouselVariables } from './CarouselVariables/CarouselVariables.js';
import classes from './Carousel.module.css.js';

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
  controlSize: 26,
  controlsOffset: "sm",
  slideSize: "100%",
  slideGap: 0,
  orientation: "horizontal",
  align: "center",
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: "",
  withKeyboardEvents: true
};
const varsResolver = createVarsResolver(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      "--carousel-height": rem(height),
      "--carousel-control-size": rem(controlSize),
      "--carousel-controls-offset": getSpacing(controlsOffset)
    }
  })
);
const Carousel = factory((_props, ref) => {
  const props = useProps("Carousel", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlProps,
    previousControlProps,
    controlSize,
    controlsOffset,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    skipSnaps,
    containScroll,
    withKeyboardEvents
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "getEmblaApi",
    "onNextSlide",
    "onPreviousSlide",
    "onSlideChange",
    "nextControlProps",
    "previousControlProps",
    "controlSize",
    "controlsOffset",
    "slideSize",
    "slideGap",
    "orientation",
    "height",
    "align",
    "slidesToScroll",
    "includeGapInSize",
    "draggable",
    "dragFree",
    "loop",
    "speed",
    "initialSlide",
    "inViewThreshold",
    "withControls",
    "withIndicators",
    "plugins",
    "nextControlIcon",
    "previousControlIcon",
    "skipSnaps",
    "containScroll",
    "withKeyboardEvents"
  ]);
  const getStyles = useStyles({
    name: "Carousel",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const responsiveClassName = useRandomClassName();
  const { dir } = useDirection();
  const [emblaRefElement, embla] = useEmblaCarousel(
    {
      axis: orientation === "horizontal" ? "x" : "y",
      direction: orientation === "horizontal" ? dir : void 0,
      startIndex: initialSlide,
      loop,
      align,
      slidesToScroll,
      draggable,
      dragFree,
      speed,
      inViewThreshold,
      skipSnaps,
      containScroll
    },
    plugins
  );
  const [selected, setSelected] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const handleScroll = useCallback((index) => embla && embla.scrollTo(index), [embla]);
  const handleSelect = useCallback(() => {
    if (!embla)
      return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange == null ? void 0 : onSlideChange(slide);
  }, [embla, setSelected]);
  const handlePrevious = useCallback(() => {
    embla == null ? void 0 : embla.scrollPrev();
    onPreviousSlide == null ? void 0 : onPreviousSlide();
  }, [embla]);
  const handleNext = useCallback(() => {
    embla == null ? void 0 : embla.scrollNext();
    onNextSlide == null ? void 0 : onNextSlide();
  }, [embla]);
  const handleKeydown = useCallback(
    (event) => {
      if (withKeyboardEvents) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          handleNext();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          handlePrevious();
        }
      }
    },
    [embla]
  );
  useEffect(() => {
    if (embla) {
      getEmblaApi == null ? void 0 : getEmblaApi(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on("select", handleSelect);
      return () => {
        embla.off("select", handleSelect);
      };
    }
    return void 0;
  }, [embla, slidesToScroll]);
  useEffect(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected(
        (currentSelected) => clamp(currentSelected, 0, Children.toArray(children).length - 1)
      );
    }
  }, [Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = (embla == null ? void 0 : embla.canScrollPrev()) || false;
  const canScrollNext = (embla == null ? void 0 : embla.canScrollNext()) || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("indicator")), {
      key: index,
      "data-active": index === selected || void 0,
      "aria-hidden": true,
      tabIndex: -1,
      onClick: () => handleScroll(index)
    })
  ));
  return /* @__PURE__ */ React.createElement(CarouselProvider, { value: { getStyles, orientation } }, /* @__PURE__ */ React.createElement(CarouselVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` })), /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others), {
      mod: { orientation, "include-gap-in-size": includeGapInSize },
      onKeyDownCapture: handleKeydown
    }),
    /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, getStyles("viewport")), { ref: emblaRefElement }), /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, getStyles("container")), { "data-orientation": orientation }), children)),
    withIndicators && /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("indicators")), indicators),
    withControls && /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ React.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, previousControlProps), getStyles("control")), {
        onClick: handlePrevious,
        "data-inactive": !canScrollPrev || void 0,
        tabIndex: canScrollPrev ? 0 : -1
      }),
      typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ React.createElement(
        AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation({
              dir,
              orientation,
              direction: "previous"
            })}deg)`
          }
        }
      )
    ), /* @__PURE__ */ React.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        onClick: handleNext
      }, getStyles("control")), nextControlProps), {
        "data-inactive": !canScrollNext || void 0,
        tabIndex: canScrollNext ? 0 : -1
      }),
      typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ React.createElement(
        AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation({
              dir,
              orientation,
              direction: "next"
            })}deg)`
          }
        }
      )
    ))
  ));
});
Carousel.classes = classes;
Carousel.displayName = "@mantine/core/Carousel";
Carousel.Slide = CarouselSlide;

export { Carousel };
//# sourceMappingURL=Carousel.js.map
