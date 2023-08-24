import { createSafeContext } from '@mantine/core';

const [CarouselProvider, useCarouselContext] = createSafeContext(
  "Carousel component was not found in tree"
);

export { CarouselProvider, useCarouselContext };
//# sourceMappingURL=Carousel.context.js.map
