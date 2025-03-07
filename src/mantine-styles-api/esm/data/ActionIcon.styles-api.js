const ActionIconStylesApi = {
  selectors: {
    root: "Root element",
    loader: "`Loader` component, rendered inside root element when `loading` prop is set"
  },
  vars: {
    root: {
      "--ai-bg": "Controls `background`",
      "--ai-hover": "Controls `background` when hovered",
      "--ai-bd": "Controls `border`",
      "--ai-color": "Controls icon `color`",
      "--ai-radius": "Controls `border-radius`",
      "--ai-size": "Controls `width`, `height`, `min-width` and `min-height` styles"
    }
  },
  modifiers: [
    { modifier: "data-disabled", selector: "root", condition: "`disabled` prop is set" },
    { modifier: "data-loading", selector: "root", condition: "`loading` prop is set" }
  ]
};
const ActionIconGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--ai-border-width": "Controls `border-width` of child ActionIcon components that are placed beside one another"
    }
  },
  modifiers: [
    { modifier: "data-orientation", selector: "group", value: "Value of `orientation` prop" }
  ]
};

export { ActionIconGroupStylesApi, ActionIconStylesApi };
//# sourceMappingURL=ActionIcon.styles-api.js.map
