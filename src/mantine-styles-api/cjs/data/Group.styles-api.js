'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const GroupStylesApi = {
  selectors: {
    root: "Root element"
  },
  vars: {
    root: {
      "--group-align": "Controls `align-items` property",
      "--group-justify": "Controls `justify-content` property",
      "--group-gap": "Controls `gap` property",
      "--group-wrap": "Controls `flex-wrap` property",
      "--group-child-width": "Controls `max-width` of child elements, applied when grow prop is set and `preventGrowOverflow` is `true`"
    }
  },
  modifiers: [{ modifier: "data-grow", selector: "root", condition: "`grow` prop is set" }]
};

exports.GroupStylesApi = GroupStylesApi;
//# sourceMappingURL=Group.styles-api.js.map
