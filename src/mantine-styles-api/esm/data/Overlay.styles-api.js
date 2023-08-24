const OverlayStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--overlay-bg": "Controls `background-color`",
      "--overlay-filter": "Controls `backdrop-filter`",
      "--overlay-radius": "Controls `border-radius`",
      "--overlay-z-index": "Controls `z-index`"
    }
  },
  modifiers: [
    { modifier: "data-center", selector: "root", condition: "`center` prop is set" },
    { modifier: "data-fixed", selector: "root", condition: "`fixed` prop is set" }
  ]
};

export { OverlayStylesApi };
//# sourceMappingURL=Overlay.styles-api.js.map
