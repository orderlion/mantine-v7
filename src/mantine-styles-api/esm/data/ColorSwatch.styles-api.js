const ColorSwatchStylesApi = {
  selectors: {
    root: "Root element",
    alphaOverlay: "Overlay with checkerboard pattern",
    shadowOverlay: "Overlay with inner box-shadow",
    colorOverlay: "Overlay with given color background",
    childrenOverlay: "Overlay with `children` inside"
  },
  vars: {
    root: {
      "--cs-radius": "Controls `border-radius` of all overlays and `root` element",
      "--cs-size": "Controls `width`, `height`, `min-width` and `min-height` of the `root` element"
    }
  }
};

export { ColorSwatchStylesApi };
//# sourceMappingURL=ColorSwatch.styles-api.js.map
