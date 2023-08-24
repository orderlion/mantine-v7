import React from 'react';
import { Box, rem } from '@mantine/core';
import classes from './DemoArea.module.css.js';

function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      className: classes.demo,
      mod: { "with-padding": withPadding, centered, dimmed, striped },
      __vars: {
        "--demo-flex": maxWidth ? "1" : void 0,
        "--demo-max-width": maxWidth ? rem(maxWidth) : void 0,
        "--demo-min-height": minHeight ? rem(minHeight) : void 0,
        "--demo-margin-y": maxWidth && centered ? "auto" : void 0
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: classes.demoInner }, children)
  );
}

export { DemoArea };
//# sourceMappingURL=DemoArea.js.map
