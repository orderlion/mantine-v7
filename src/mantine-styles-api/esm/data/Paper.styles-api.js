const PaperStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--paper-radius": "Controls `border-radius`",
      "--paper-shadow": "Controls `box-shadow`"
    }
  },
  modifiers: [
    { modifier: "data-with-border", selector: "root", condition: "`withBorderProp` is set" }
  ]
};

export { PaperStylesApi };
//# sourceMappingURL=Paper.styles-api.js.map
