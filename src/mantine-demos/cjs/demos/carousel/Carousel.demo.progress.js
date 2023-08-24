'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var core = require('@mantine/core');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
`;
function Demo() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [embla, setEmbla] = React.useState(null);
  const handleScroll = React.useCallback(() => {
    if (!embla)
      return;
    const progress2 = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress2 * 100);
  }, [embla, setScrollProgress]);
  React.useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    carousel.Carousel,
    {
      dragFree: true,
      slideSize: "50%",
      slideGap: "md",
      height: 200,
      getEmblaApi: setEmbla,
      initialSlide: 2
    },
    /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 12 })
  ), /* @__PURE__ */ React__default.createElement(core.Progress, { value: scrollProgress, maw: 320, size: "sm", mt: "xl", mx: "auto" }));
}
const progress = {
  type: "code",
  component: Demo,
  code
};

exports.progress = progress;
//# sourceMappingURL=Carousel.demo.progress.js.map
