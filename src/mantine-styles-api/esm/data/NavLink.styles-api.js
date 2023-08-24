const NavLinkStylesApi = {
  selectors: {
    root: "Root element",
    body: "Contains label and description",
    section: "Left and right sections",
    label: "NavLink label",
    description: "Dimmed description displayed below the label",
    children: "Wrapper around nested links",
    chevron: "Default chevron icon"
  },
  vars: {
    root: {
      "--nl-bg": "Controls link `background-color`",
      "--nl-color": "Controls link `color`",
      "--nl-hover": "Controls link `background-color` when hovered"
    },
    children: {
      "--nl-offset": "Controls nested links offset"
    }
  },
  modifiers: [{ modifier: "data-active", selector: "root", condition: "`active` prop is set" }]
};

export { NavLinkStylesApi };
//# sourceMappingURL=NavLink.styles-api.js.map
