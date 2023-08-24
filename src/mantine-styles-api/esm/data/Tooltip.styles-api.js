const TooltipStylesApi = {
  selectors: {
    tooltip: "Root element",
    arrow: "Tooltip arrow, rendered inside tooltip"
  },
  vars: {
    tooltip: {
      "--tooltip-bg": "Tooltip `background-color`",
      "--tooltip-radius": "Tooltip `border-radius`"
    }
  },
  modifiers: [
    { modifier: "data-multiline", selector: "tooltip", condition: "`multiline` prop is set" }
  ]
};

export { TooltipStylesApi };
//# sourceMappingURL=Tooltip.styles-api.js.map
