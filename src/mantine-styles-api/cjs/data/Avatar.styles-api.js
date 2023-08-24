'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const AvatarStylesApi = {
  selectors: {
    root: "Root element",
    image: "`img` element",
    placeholder: "Avatar placeholder, displayed when the image cannot be loaded"
  },
  vars: {
    root: {
      "--avatar-bd": "Controls placeholder `border`",
      "--avatar-bg": "Controls placeholder `background`",
      "--avatar-color": "Controls placeholder text `color`",
      "--avatar-size": "Controls `width`, `min-width` and `height`",
      "--avatar-radius": "Controls `border-radius`"
    }
  }
};
const AvatarGroupStylesApi = {
  selectors: {
    group: "Root element"
  },
  vars: {
    group: {
      "--ag-spacing": "Controls negative spacing between avatars"
    }
  }
};

exports.AvatarGroupStylesApi = AvatarGroupStylesApi;
exports.AvatarStylesApi = AvatarStylesApi;
//# sourceMappingURL=Avatar.styles-api.js.map
