import React from 'react';
import { DemoRoot } from '../DemoRoot/DemoRoot.js';
import { DemoArea } from '../DemoArea/DemoArea.js';
import { DemoCode } from '../DemoCode/DemoCode.js';

function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
  minHeight,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React.createElement(DemoRoot, null, /* @__PURE__ */ React.createElement(
    DemoArea,
    {
      withPadding,
      centered,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ React.createElement(DemoCode, { code, defaultExpanded }));
}

export { CodeDemo };
//# sourceMappingURL=CodeDemo.js.map
