const DividerStylesApi = {
  selectors: {
    root: "Root element",
    label: "Label element"
  },
  vars: {
    root: {
      "--divider-border-style": "Controls `border-style`",
      "--divider-color": "Controls `border-color`",
      "--divider-size": "Controls `border-width`"
    }
  },
  modifiers: [
    { modifier: "data-with-label", selector: "root", condition: "`label` prop is truthy" },
    { modifier: "data-orientation", selector: "root", value: "Value of `orientation` prop" },
    { modifier: "data-position", selector: "label", value: "Value of `labelPosition` prop" }
  ]
};

export { DividerStylesApi };
//# sourceMappingURL=Divider.styles-api.js.map
