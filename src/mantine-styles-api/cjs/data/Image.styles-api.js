'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ImageStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--image-object-fit": "Controls `object-fit` property",
      "--image-radius": "Controls `border-radius` property"
    }
  },
  modifiers: [{ modifier: "data-fallback", selector: "root", condition: "Image failed to load" }]
};

exports.ImageStylesApi = ImageStylesApi;
//# sourceMappingURL=Image.styles-api.js.map
