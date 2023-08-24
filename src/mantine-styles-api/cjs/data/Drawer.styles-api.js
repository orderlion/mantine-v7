'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const DrawerStylesApi = {
  selectors: {
    root: "Root element",
    inner: "Element used to center modal, has fixed position, takes entire screen",
    content: "`Drawer.Content` root element",
    header: "Contains title and close button",
    overlay: "Overlay displayed under the `Drawer.Content`",
    title: "Drawer title (h2 tag), displayed in the header",
    body: "Drawer body, displayed after header",
    close: "Close button"
  },
  vars: {
    root: {
      "--drawer-size": "Controls `width` of `Drawer.Content`",
      "--drawer-flex": "Controls `flex` property of `Drawer.Content`",
      "--drawer-align": "Controls `align-items` property of `Drawer.Content`",
      "--drawer-justify": "Controls `justify-content` property of `Drawer.Content`",
      "--drawer-height": "Controls `height` property of `Drawer.Content`"
    }
  }
};

exports.DrawerStylesApi = DrawerStylesApi;
//# sourceMappingURL=Drawer.styles-api.js.map
