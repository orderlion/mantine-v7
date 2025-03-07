import React, { useState, useCallback, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import { Slides } from './_slides.js';

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);
  const handleScroll = useCallback(() => {
    if (!embla)
      return;
    const progress2 = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress2 * 100);
  }, [embla, setScrollProgress]);
  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Carousel,
    {
      dragFree: true,
      slideSize: "50%",
      slideGap: "md",
      height: 200,
      getEmblaApi: setEmbla,
      initialSlide: 2
    },
    /* @__PURE__ */ React.createElement(Slides, { count: 12 })
  ), /* @__PURE__ */ React.createElement(Progress, { value: scrollProgress, maw: 320, size: "sm", mt: "xl", mx: "auto" }));
}
const progress = {
  type: "code",
  component: Demo,
  code
};

export { progress };
//# sourceMappingURL=Carousel.demo.progress.js.map
