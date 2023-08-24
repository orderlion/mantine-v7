const SkeletonStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--skeleton-height": "Controls skeleton `height`",
      "--skeleton-width": "Controls skeleton `width`",
      "--skeleton-radius": "Controls skeleton `border-radius`"
    }
  },
  modifiers: [
    { modifier: "data-visible", selector: "root", condition: "`visible` prop is set" },
    { modifier: "data-animate", selector: "root", condition: "`animate` prop is set" }
  ]
};

export { SkeletonStylesApi };
//# sourceMappingURL=Skeleton.styles-api.js.map
